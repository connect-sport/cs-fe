import { ArticlePage } from "@/components/pages/Article";
import { getCategories } from "@/services/category";
import { Metadata } from "next";
interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const categories = await getCategories();

  const allParams: { slug: string }[] = categories.map((category) => ({
    slug: category.alias,
  }));

  return allParams;
}

// ✅ 2. (Optional) SEO metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Article: ${params.slug}`,
    description: `Details for the article with slug: ${params.slug}`,
  };
}

export default async function SlugPage({ params }: PageProps) {
  return (
    <main>
      <ArticlePage slug={params.slug} />
    </main>
  );
}
