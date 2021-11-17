import { h } from 'preact';
import { useState } from 'preact/hooks';
import classNames from 'classnames';
import { ILinks } from '@/data/mainMenu';
import style from './navigation.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  menuLinks: ILinks[];
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { MainMenu } from './mainMenu.component';

/* -----------------------------------
 *
 * Navigation
 *
 * -------------------------------- */

function Navigation({ menuLinks }: IProps) {
  const [isActive, setActive] = useState(false);

  const [buttonClass, overlayClass] = [
    classNames(style.button, {
      [style.active]: isActive,
    }),
    classNames(style.overlay, {
      [style.active]: isActive,
    }),
  ];

  return (
    <nav class={style.navigation}>
      <a href="/articles">Articles</a>
      <button class={buttonClass} onClick={onClickToggle}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" />
          <path d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path d="M0 50h70" />
          <path d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </button>
      <div class={overlayClass}>{isActive && <MainMenu menuLinks={menuLinks} />}</div>
    </nav>
  );

  function onClickToggle() {
    const htmlElement = document.documentElement;
    const isScrollBar = document.body.scrollHeight > document.body.clientHeight;

    setActive(!isActive);

    if (isScrollBar) {
      htmlElement.classList.toggle('no-scroll');
    }
  }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Navigation };
