import { h } from 'preact';
import { ICollections } from '@/modules/shared/model/collections.model';
import { IPage, IData } from '@/modules/shared/model/page.model';
import { paginatePermalink } from '@/utility/pagination.utility';
import style from './list.module.scss';

/* -----------------------------------
 *
 * IData
 *
 * -------------------------------- */

interface IProps extends IData {
  permalink: string;
  collections?: ICollections;
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Banner } from '@/modules/shared/components/banner';
import { Pagination } from '@/modules/shared/components/pagination';
import { ArticleList } from '@/modules/articles/components/articleList';
import { ProfileImage } from '@/modules/shared/components/profileImage';
import { RecentArticles } from '@/modules/articles/components/recentArticles';

/* -----------------------------------
 *
 * Page
 *
 * -------------------------------- */

function Page(
  this: IPage,
  { collections: { articles }, pagination: { pages, links, pageNumber } }: IProps
) {
  return (
    <main class={style.content}>
      <Banner>
        <h1>Articles</h1>
      </Banner>
      <div class={style.container}>
        <div class={style.layout}>
          <article class={style.column}>
            <ArticleList className={style.articles} articles={pages[pageNumber]} />
            <Pagination
              className={style.pagination}
              pageIndex={pageNumber}
              pageLinks={links}
            />
          </article>
          <aside>
            <ProfileImage className={style.profile} />
            <div class={style.recent}>
              <h3 class={style.heading}>Recent Articles</h3>
              <RecentArticles articles={articles.slice(0, 5)} />
            </div>
          </aside>
        </div>
      </div>
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
  data: () => {
    return {
      layout: 'default.11ty.js',
      cssPath: 'articles/list.11ty.css',
      jsPath: 'articles/list.entry.js',
      title: 'Articles',
      permalink: (data) => paginatePermalink(data, 'articles'),
      pagination: {
        data: 'collections.articles',
        size: 6,
        alias: 'article',
      },
    };
  },
};
