import React from "react";
import {
  CategoryAddButton,
  CategoryTable,
} from "@/components/organisms/Category";

const CategoryPage: React.FC = () => {
  return (
    <main>
      <CategoryAddButton />
      <CategoryTable />
    </main>
  );
};

export { CategoryPage };
