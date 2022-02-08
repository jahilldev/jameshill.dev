import { h } from 'preact';
import classNames from 'classnames';
import style from './pagination.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  className: string;
  pageIndex: number;
  pageLinks: any;
}

/* -----------------------------------
 *
 * Pagination
 *
 * -------------------------------- */

function Pagination({ className, pageIndex, pageLinks }: IProps) {
  const wrapperClass = classNames(style.pagination, className);

  if (pageLinks.length <= 1) {
    return;
  }

  return (
    <nav class={wrapperClass}>
      {pageLinks.map((linkHref, index) => {
        const linkClass = classNames(style.link, { [style.active]: pageIndex === index });

        return (
          <a href={linkHref} class={linkClass}>
            {index + 1}
          </a>
        );
      })}
    </nav>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Pagination };
