import React from "react";
import { BaseSwiper } from "@/components/atoms/Swiper";
import { useArticle } from "@/hooks/article/useArticle";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ArticleDto } from "@/dtos/article";

interface HighlightProps {
  title: string;
  alias: string;
}

const Highlight: React.FC<HighlightProps> = ({ title, alias }) => {
  const { articles } = useArticle(alias);

  return (
    <section className="mb-4">
      <Typography variant="h3" className="text-left !mb-4">
        {title}
      </Typography>
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
            <Card key={article._id} sx={{ maxWidth: 345, height: 400 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Gọi điện</Button>
                <Button size="small">Xem chi tiết</Button>
              </CardActions>
            </Card>
          ))}
        </BaseSwiper>
      </div>
    </section>
  );
};

export { Highlight };
