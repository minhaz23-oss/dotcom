export type ArticleStatus = "draft" | "published";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: ArticleStatus;
  publishedAt: string | null;
  updatedAt: string;
};

export type Resource = {
  id: string;
  title: string;
  url: string;
  description: string;
};
