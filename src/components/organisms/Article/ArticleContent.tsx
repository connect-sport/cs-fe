import InfiniteScroll from "react-infinite-scroll-component";
import { Masonry } from "@mui/lab";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useRef, useState, useCallback, use } from "react";
import { ArticleDto } from "@/dtos/article";
import { RootState } from "@/libs/store";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useArticle } from "@/hooks/article/useArticle";
import { articleAction } from "@/reducers/article";
import { ArticleSkeleton } from "@/components/molecules/Article/Skeleton";
import { ArticleCard } from "@/components/molecules/Article/Card";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PAGE_SIZE = 12;

const ArticleContent: React.FC<{ alias: string }> = ({ alias }) => {
  const dispatch = useAppDispatch();
  const { data: articlesData, filters } = useAppSelector(
    (state: RootState) => state.article
  );
  const { onGetListArticle } = useArticle(alias);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const onGetListArticleRef = useRef(onGetListArticle);
  const pageRef = useRef(page);
  const nodeRef = useRef(null);
  const articlesDataRef = useRef(articlesData);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const columns = isSm ? 1 : isMd ? 2 : 3;

  useEffect(() => {
    onGetListArticleRef.current = onGetListArticle;
  }, [onGetListArticle]);

  useEffect(() => {
    articlesDataRef.current = articlesData;
  }, [articlesData]);

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    dispatch(articleAction.setDataArticles({ data: [] }));
    setPage(1);
    setHasMore(true);
  }, [alias, filters, dispatch]);

  useEffect(() => {
    const loadArticles = async () => {
      const { data } = await onGetListArticleRef.current({
        alias,
        pagination: {
          page: 1,
          limit: PAGE_SIZE,
        },
        filters: {},
      });
      dispatch(
        articleAction.setDataArticles({
          data,
        })
      );
    };

    loadArticles();

    return () => {
      dispatch(articleAction.setDataArticles({ data: [] }));
    };
  }, [alias, dispatch]);

  const loadMoreArticles = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const { data: newArticles } = await onGetListArticleRef.current({
        alias,
        pagination: {
          page: pageRef.current,
          limit: PAGE_SIZE,
        },
        filters,
      });

      const uniqueArticles = [
        ...articlesDataRef.current,
        ...newArticles.filter(
          (article: ArticleDto) =>
            !articlesDataRef.current.some(
              (existing: ArticleDto) => existing._id === article._id
            )
        ),
      ];

      dispatch(
        articleAction.setDataArticles({
          data: uniqueArticles,
        })
      );

      if (newArticles.length < PAGE_SIZE) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Failed to load articles", err);
    } finally {
      setLoading(false);
    }
  }, [alias, dispatch, filters, hasMore, loading]);

  return (
    <Box
      id="scrollableDiv"
      sx={{
        width: "100%",
        height: "100vh",
        p: 2,
        overflowY: "auto", // chỉ cần dòng này
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome, Safari
        },
      }}
    >
      <InfiniteScroll
        dataLength={articlesData.length}
        next={loadMoreArticles}
        hasMore={hasMore}
        loader={null}
        scrollThreshold={0.9}
        scrollableTarget="scrollableDiv"
        style={{ overflow: "visible" }}
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          <TransitionGroup component={null}>
            {(articlesData || []).map((article: ArticleDto) => (
              <div key={article._id}>
                <ArticleCard article={article} />
              </div>
            ))}
            {loading &&
              Array.from({ length: columns * 2 }).map((_, idx) => (
                <CSSTransition
                  key={`skeleton-${idx}`}
                  timeout={300}
                  classNames="fade"
                  nodeRef={nodeRef}
                >
                  <div ref={nodeRef}>
                    <ArticleSkeleton />
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </Masonry>
      </InfiniteScroll>
    </Box>
  );
};

export { ArticleContent };
