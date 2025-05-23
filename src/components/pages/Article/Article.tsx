import React from "react";
import { ArticleContent } from "@/components/organisms/Article";
import ButtonAddArticle from "@/components/atoms/ButtonAddArticle/ButtonAddArticle";
import { ButtonFilterArticle } from "@/components/atoms/ButtonFilterArticle";

type ArticlePageProps = {
  slug: string;
};

const ArticlePage: React.FC<ArticlePageProps> = ({ slug }) => {
  return (
    <main>
      <ArticleContent alias={slug} />
      <ButtonFilterArticle alias={slug} />
      <ButtonAddArticle alias={slug} />
    </main>
  );
};

export { ArticlePage };
