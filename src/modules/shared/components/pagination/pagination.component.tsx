import { h } from 'preact';
import classNames from 'classnames';
import style from './pagination.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  pageIndex: number;
  pageLinks: any;
}

/* -----------------------------------
 *
 * Pagination
 *
 * -------------------------------- */

function Pagination({ pageIndex, pageLinks }: IProps) {
  if (pageLinks.length <= 1) {
    return;
  }

  return (
    <nav>
      {pageLinks.map((linkHref, index) => (
        <a href={linkHref} class={classNames({ [style.active]: pageIndex === index })}>
          {index + 1}
        </a>
      ))}
    </nav>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Pagination };
