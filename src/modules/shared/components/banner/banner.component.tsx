import { h } from 'preact';
import classNames from 'classnames';
import style from './banner.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  bannerImage?: string;
  children: any;
}

/* -----------------------------------
 *
 * Footer
 *
 * -------------------------------- */

function Banner({ bannerImage, children }: IProps) {
  const wrapperClass = classNames(style.banner, {
    [style.image]: bannerImage,
  });

  return (
    <section class={wrapperClass} style={`background-image: url(${bannerImage})`}>
      <div class={style.container}>{children}</div>
    </section>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Banner };
