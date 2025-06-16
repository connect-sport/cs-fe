import { HomePage } from "@/components/pages/HomePage";
import { MainTemplate } from "@/components/templates/MainTemplate";
import { getCategories } from "@/services/category";

export default async function Home() {
  const categories = await getCategories();

  return (
    <MainTemplate>
      <HomePage categories={categories} />
    </MainTemplate>
  );
}
