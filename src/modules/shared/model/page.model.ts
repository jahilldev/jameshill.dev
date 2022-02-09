import * as siteMeta from '@/data/siteMeta';
import * as mainMenu from '@/data/mainMenu';
import * as socialMenu from '@/data/socialMenu';

/* -----------------------------------
 *
 * IPage
 *
 * -------------------------------- */

interface IPage {
  slug: string;
  url: string;
  getCollectionItem: (page: string) => any;
  getPreviousCollectionItem: (page: string) => any;
  getNextCollectionItem: (page: string) => any;
  getAssetContents: (file: string[]) => string;
}

/* -----------------------------------
 *
 * IData
 *
 * -------------------------------- */

interface IData {
  siteMeta: typeof siteMeta;
  mainMenu: typeof mainMenu;
  socialMenu: typeof socialMenu;
  pagination?: IPagination;
}

/* -----------------------------------
 *
 * IPagination
 *
 * -------------------------------- */

interface IPagination {
  data: string;
  size: number;
  alias?: string;
  items: any[];
  pages: any[][];
  pageNumber: number;
  previousPageLink: string;
  previous: string;
  nextPageLink: string;
  next: string;
  firstPageLink: string;
  lastPageLink: string;
  page: {
    previous: string[];
    next: string[];
    first: string[];
    last: string[];
  },
  links: string[];
  pageLinks: string[];
  previousPageHref: string;
  nextPageHref: string,
  firstPageHref: string;
  lastPageHref: string;
  hrefs: string[],
  href: {
    previous: string;
    next: string;
    first: string;
    last: string;
  }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IPage, IData };
