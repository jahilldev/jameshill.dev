import * as siteMeta from '@/data/siteMeta';
import * as mainMenu from '@/data/mainMenu';

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
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IPage, IData };
