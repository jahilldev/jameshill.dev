/* eslint-disable react/no-danger */
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

function Page(this: IPage, { siteMeta, title = '', content, cssPath, jsPath }: IProps) {
  const pageTitle = [siteMeta.pageTitle, title].filter((item) => !!item).join(' - ');
  const pageCss = this.getAssetContents(['layouts/default.11ty.css', cssPath]);

  return (
    <Html title={pageTitle} inlineCss={pageCss} jsPath={jsPath}>
      <div class={style.wrapper}>
        <Header />
        {content}
        <Footer />
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
