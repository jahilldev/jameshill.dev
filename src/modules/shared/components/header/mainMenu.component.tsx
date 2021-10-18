import { h } from 'preact';
import style from './mainMenu.module.scss';

/* -----------------------------------
 *
 * Navigation
 *
 * -------------------------------- */

function MainMenu() {
  return (
    <section class={style.wrapper}>
      <div class={style.inner}>
        <h3 class={style.title}>
          <span>Main Menu</span>
        </h3>
        <a href="/" class={style.link}>
          Home
        </a>
      </div>
    </section>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { MainMenu };
