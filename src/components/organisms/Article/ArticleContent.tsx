import { ArticleCard } from "@/components/molecules/Article/Card";
import { ArticleSkeleton } from "@/components/molecules/Article/Skeleton";
import { useArticle } from "@/hooks/article/useArticle";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { articleAction } from "@/reducers/article";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";

const PAGE_SIZE = 10;

const ArticleContent: React.FC<{ alias: string }> = ({ alias }) => {
  const dispatch = useAppDispatch();
  const { data: articlesData } = useAppSelector((state) => state.article);
  const { onGetListArticle } = useArticle(alias);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const onGetListArticleRef = useRef(onGetListArticle);

  const lastArticleRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    onGetListArticleRef.current = onGetListArticle;
  }, [onGetListArticle]);

  useEffect(() => {
    let isMounted = true;

    const loadArticles = async () => {
      try {
        setLoading(true);
        const { data: newAricles } = await onGetListArticleRef.current({
          alias,
          page,
        });
        dispatch(
          articleAction.setDataArticles({
            data: newAricles,
          })
        );
        setLoading(false);
        if (newAricles.length < PAGE_SIZE) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Failed to load articles:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadArticles();

    return () => {
      isMounted = false;
    };
  }, [page, alias, dispatch]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       setPage((prev) => prev + 1);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", p: 2 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {articlesData.map((article, idx) => {
          if (articlesData.length === idx + 1) {
            return (
              <ArticleCard
                ref={lastArticleRef}
                key={article._id}
                article={article}
              />
            );
          }
          return <ArticleCard key={article._id} article={article} />;
        })}

        {loading && <ArticleSkeleton />}
      </Masonry>
    </Box>
  );
};

export { ArticleContent };
