import { h } from 'preact';
import { IData, IPage } from '@/modules/shared/model/page.model';
import style from './default.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps extends IData {
  title: string;
  content: string;
  cssPath: string;
  jsPath: string;
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Html } from '@/modules/shared/components';
import { Header } from '@/modules/shared/components/header';
import { Footer } from '@/modules/shared/components/footer';

/* -----------------------------------
 *
 * Article
 *
 * -------------------------------- */

function Page(
  this: IPage,
  {
    siteMeta,
    mainMenu: { menuLinks },
    socialData: { socialMenu },
    title = '',
    content,
    cssPath,
    jsPath,
  }: IProps
) {
  const pageTitle = [title, siteMeta.pageTitle].filter((item) => !!item).join(' - ');
  const pageCss = this.getAssetContents(['layouts/default.11ty.css', cssPath]);

  return (
    <Html siteMeta={siteMeta} pageTitle={pageTitle} inlineCss={pageCss} jsPath={jsPath}>
      <div class={style.wrapper}>
        <Header menuLinks={menuLinks} />
        {content}
        <Footer socialMenu={socialMenu} />
      </div>
    </Html>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

module.exports = Page;
