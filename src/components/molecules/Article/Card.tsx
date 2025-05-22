import { SportImage } from "@/components/atoms/SportImage";
import { ARTICLE_TYPE_OPTIONS } from "@/constants/article";
import { ArticleDto } from "@/dtos/article";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";

type ArticleCardProps = {
  article: ArticleDto;
  ref?: React.Ref<HTMLDivElement>;
};

const ArticleCard = ({ article, ref }: ArticleCardProps) => {
  const title = useMemo(() => {
    const existAriticle = ARTICLE_TYPE_OPTIONS.find(
      (item) => item.value === article.title
    );
    return existAriticle ? existAriticle.label : "";
  }, [article.title]);

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper",
        boxShadow: 1,
      }}
      ref={ref}
    >
      <SportImage type={article.category.alias} alt={title} />
      <Box p={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </Box>
    </Box>
  );
};

export { ArticleCard };
