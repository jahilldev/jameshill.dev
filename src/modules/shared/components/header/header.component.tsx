import { h } from 'preact';
import { ILink } from '@/data/mainMenu';
import style from './header.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  menuLinks: ILink[];
}

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

function Header({ menuLinks }: IProps) {
  return (
    <header class={style.header}>
      <a href="/" class={style.logo}>
        James
      </a>
      <Navigation menuLinks={menuLinks} />
    </header>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Header };
