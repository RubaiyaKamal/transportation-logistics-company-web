export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type NewsPost = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readingMinutes: number;
  body: NewsBlock[];
};
