/* -----------------------------------
 *
 * IAritcle
 *
 * -------------------------------- */

interface IArticle {
  title: string;
  tagline: string;
  excerpt: string;
  bannerImage?: string;
  thumbImage: string;
  tags: string[];
  publish: boolean;
  date: Date;
  cssPath: string;
  jsPath: string;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IArticle };
