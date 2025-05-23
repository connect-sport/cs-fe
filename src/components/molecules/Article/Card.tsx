import { SportImage } from "@/components/atoms/SportImage";
import { ARTICLE_TYPE_OPTIONS } from "@/constants/article";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { ArticleDto } from "@/dtos/article";
import { useModal } from "@/stores/contexts/ModalContext";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { flatMap, isEmpty } from "lodash";
import { memo, useMemo } from "react";
import { ArticleSkeleton } from "./Skeleton";

type ArticleCardProps = {
  article: ArticleDto;
  ref?: React.Ref<HTMLDivElement>;
};

const ArticleCard = memo(({ article, ref }: ArticleCardProps) => {
  const { openModal, closeModal } = useModal();

  const title = useMemo(() => {
    const existAriticle = ARTICLE_TYPE_OPTIONS.find(
      (item) => item.value === article.title
    );
    return existAriticle ? existAriticle.label : "";
  }, [article.title]);

  const showDetail = (article: ArticleDto) => {
    openModal(MODAL_KEYS.DETAILS_ARTICLE, {
      article,
      onClose: closeModal,
    });
  };

  if (!article) return <ArticleSkeleton />;

  return (
    <Card ref={ref} sx={{ maxWidth: 345, height: 400, marginBottom: 2 }}>
      <SportImage type={article.category.alias} alt={article.category.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "text.secondary" }}
        >
          <strong>
            {isEmpty(article.levels)
              ? "Tất cả trình độ"
              : flatMap(article.levels).join(", ")}
          </strong>
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button size="small" variant="outlined">
          Gọi điện
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={() => showDetail(article)}
        >
          Xem chi tiết
        </Button>
      </CardActions>
    </Card>
  );
});

ArticleCard.displayName = "ArticleCard";

export { ArticleCard };
