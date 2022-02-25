import { h } from 'preact';
import { IArticle } from '@/modules/articles/model/article.model';
import { EMPTY_IMAGE } from '@/modules/shared/model/values.model';
import style from './articleTile.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  article: IArticle;
  lazyLoad: boolean;
  url: string;
  className?: string;
}

/* -----------------------------------
 *
 * Article
 *
 * -------------------------------- */

function ArticleTile({ lazyLoad, article, url, className = '' }: IProps) {
  return (
    <section class={`${style.tile} ${className}`}>
      <a href={url} class={style.image}>
        <picture>
          <source
            media="(min-width: 35.5em)"
            srcset={`/articles/_images/${article.thumbImage}`}
          />
          <source media="(min-width: 0em)" srcset={EMPTY_IMAGE} />
          <img
            class="tile-uber-callout-image"
            src={EMPTY_IMAGE}
            alt="Post"
            loading={lazyLoad ? 'lazy' : 'eager'}
          />
        </picture>
      </a>
      <div class={style.content}>
        <h2 class={style.title}>
          <a href={url} class={style.link}>
            {article.title}
          </a>
        </h2>
        <h3 class={style.tagline}>{article.tagline}</h3>
        <p class={style.excerpt}>{article.excerpt}</p>
      </div>
    </section>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { ArticleTile };
