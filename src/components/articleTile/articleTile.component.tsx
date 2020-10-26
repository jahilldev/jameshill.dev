import { h } from 'preact';
import { IArticle } from '@/model/article.model';
import style from './articleTile.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  article: IArticle;
  url: string;
  className?: string;
}

/* -----------------------------------
 *
 * Article
 *
 * -------------------------------- */

function ArticleTile({ article, url, className = '' }: IProps) {
  return (
    <section class={`${style.tile} ${className}`}>
      <a href={url} class={style.image}>
        <img src={`/articles/_images/${article.image}`} alt="Post" />
      </a>
      <div class={style.content}>
        <h2 class={style.title}>
          <a href={url} class={style.link}>
            <span>{article.title}</span>
          </a>
        </h2>
        <time>{article.date.getFullYear()}</time>
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
