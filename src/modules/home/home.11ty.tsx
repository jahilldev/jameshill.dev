import { h } from 'preact';
import { IPage, IData } from '../shared/model/page.model';
import { strapLine } from '@/data/siteMeta';
import style from './home.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps extends IData {
  permalink: string;
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { MainIntro } from '@/modules/home/components/mainIntro';

/* -----------------------------------
 *
 * Page
 *
 * -------------------------------- */

function Page(this: IPage) {
  return (
    <main class={style.content}>
      <MainIntro />
    </main>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

module.exports = {
  render: Page,
  data: () => ({
    title: strapLine,
    permalink: 'index.html',
    layout: 'default.11ty.js',
    cssPath: 'home/home.11ty.css',
    jsPath: 'home/home.entry.js',
  }),
};
