import React, { useEffect, useRef } from "react";
import { BaseSwiper } from "@/components/atoms/Swiper";
import { useArticle } from "@/hooks/article/useArticle";
import { Button, Typography } from "@mui/material";
import { ArticleDto } from "@/dtos/article";
import { CategoryIcon } from "@/components/atoms/CategoryIcon";
import { useRouter } from "next/navigation";
import { ArticleCard } from "@/components/molecules/Article/Card";

interface HighlightProps {
  title: string;
  alias: string;
}

const Highlight: React.FC<HighlightProps> = ({ title, alias }) => {
  const { articles, onGetListArticle } = useArticle(alias);
  const { push } = useRouter();
  const onGetListArticleRef = useRef(onGetListArticle);

  const showAll = () => {
    push(`${alias}`);
  };

  useEffect(() => {
    onGetListArticleRef.current = onGetListArticle;
  }, [onGetListArticle]);

  useEffect(() => {
    onGetListArticleRef.current({ alias });
  }, [alias]);

  return (
    <section className="mb-4 border-b b border-b-gray-200 pb-4">
      <div className="flex justify-between items-center">
        <Typography variant="h4" className="text-left !mb-4 flex gap-2">
          <CategoryIcon type={alias} size={30} color="#4CAF50" />
          <span>{title}</span>
        </Typography>
        <Button variant="outlined" onClick={showAll}>
          Xem tất cả
        </Button>
      </div>
      <div>
        <BaseSwiper
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {articles.map((article: ArticleDto) => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </BaseSwiper>
      </div>
    </section>
  );
};

export { Highlight };
