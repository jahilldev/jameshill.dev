import { h } from 'preact';
import style from './header.module.scss';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Navigation } from './navigation.component';

/* -----------------------------------
 *
 * Home
 *
 * -------------------------------- */

function Header() {
  return (
    <header class={style.header}>
      <a href="/" class={style.logo}>
        James
      </a>
      <nav class={style.menu}>
        <a href="/articles">Articles</a>
        <Navigation />
      </nav>
    </header>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Header };
