"use client";

import React, { Suspense } from "react";
import { CategoryPage } from "@/components/pages/Category";

export default function CategoryContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryPage />
    </Suspense>
  );
}
