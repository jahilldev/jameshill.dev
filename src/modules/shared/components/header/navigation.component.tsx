import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import style from './navigation.module.scss';

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

function Navigation() {
  const [isActive, setActive] = useState(false);
  const activeClass = isActive ? style.active : '';

  return (
    <Fragment>
      <button class={`${style.button} ${activeClass}`} onClick={onClickToggle}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" />
          <path d="M0 40h62c13 0 6 28-4 18L35 35" />
          <path d="M0 50h70" />
          <path d="M0 60h62c13 0 6-28-4-18L35 65" />
        </svg>
      </button>
      {isActive && (
        <menu class={style.menu}>
          <MainMenu />
        </menu>
      )}
    </Fragment>
  );

  function onClickToggle() {
    setActive(!isActive);
  }
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Navigation };
