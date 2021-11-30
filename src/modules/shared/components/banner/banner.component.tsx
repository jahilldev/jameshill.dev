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

  const bannerStyle = bannerImage && `background-image: url(${bannerImage})`;

  return (
    <section class={wrapperClass} style={bannerStyle}>
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
