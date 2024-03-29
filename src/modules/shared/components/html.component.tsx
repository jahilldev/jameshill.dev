/* eslint-disable react/no-danger */
import { h, Fragment } from 'preact';
import { IData } from '@/modules/shared/model/page.model';
import style from './html.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  siteMeta?: IData['siteMeta'];
  pageTitle?: string;
  summaryText?: string;
  image?: string;
  inlineCss?: string;
  jsPath?: string;
  children: any;
}

/* -----------------------------------
 *
 * Images
 *
 * -------------------------------- */

import favicon from '@/styles/images/favicon.png';

/* -----------------------------------
 *
 * Html
 *
 * -------------------------------- */

function Html({
  siteMeta: { siteDomain, metaDescription },
  pageTitle,
  summaryText = metaDescription,
  image,
  inlineCss,
  jsPath,
  children,
}: IProps) {
  const scripts = ['vendor.js', 'shared/shared.entry.js', jsPath];

  return (
    <html lang="en" class={style.html}>
      <head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={summaryText} />
        <link rel="icon" type="image/png" href={favicon} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${siteDomain}/feed.xml`}
          title="James Hill - XML Feed"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <meta
          name="google-site-verification"
          content="mHNYu_uJnuUYYZmD8zONumXaKqZX4-TNzTs-60O6oEY"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jahilldev" />
        <meta name="twitter:title" content={pageTitle} />
        {summaryText && <meta name="twitter:description" content={summaryText} />}
        {image && <meta name="twitter:image" content={`${siteDomain}/${image}`} />}
        {getFontLink()}
        {jsPath && (
          <Fragment>
            {scripts.map((script) => (
              <link rel="preload" as="script" href={`/assets/${script}`} />
            ))}
          </Fragment>
        )}
        {inlineCss && <style dangerouslySetInnerHTML={{ __html: inlineCss }} />}
      </head>
      <body class={style.body}>
        {children}
        {jsPath && (
          <Fragment>
            {scripts.map((script) => (
              <script src={`/assets/${script}`} defer={true} />
            ))}
          </Fragment>
        )}
      </body>
    </html>
  );
}

/* -----------------------------------
 *
 * Fonts
 *
 * -------------------------------- */

function getFontLink() {
  const fonts = ['Poppins:wght@100;300;400;500;600', 'Roboto:wght@300;400;500;600'];
  const result = fonts.map((font) => `family=${font}`).join('&');
  const href = `https://fonts.googleapis.com/css2?${result}&display=swap`;

  return h(Fragment, {}, [
    h('link', { rel: 'preload', as: 'style', href }),
    h('link', {
      href,
      rel: 'stylesheet',
      media: 'none',
      onload: "if(media!='all')media='all'",
    }),
  ]);
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Html };
