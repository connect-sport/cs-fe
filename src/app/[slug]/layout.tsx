"use client";

import { ArticlePage } from "@/components/pages/Article";
import { MainTemplate } from "@/components/templates/MainTemplate";
import React, { ReactNode, use } from "react";

interface ArticleLayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export default function SlugLayout({ params }: ArticleLayoutProps) {
  const { slug } = use(params);

  return (
    <MainTemplate>
      <ArticlePage slug={slug} />
    </MainTemplate>
  );
}
