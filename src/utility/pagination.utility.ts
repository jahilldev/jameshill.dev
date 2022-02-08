import { IData } from '@/modules/shared/model/page.model';

/* -----------------------------------
 *
 * Permalink
 *
 * -------------------------------- */

function paginatePermalink({ pagination: { pageNumber }}: IData, slugPath: string) {
  return `${slugPath}/${pageNumber && pageNumber + 1 || ''}/index.html`
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { paginatePermalink };