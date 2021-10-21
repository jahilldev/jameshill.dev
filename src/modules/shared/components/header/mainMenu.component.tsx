import { h } from 'preact';
import { ILinks } from '@/data/mainMenu';
import style from './mainMenu.module.scss';

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
 * Navigation
 *
 * -------------------------------- */

function MainMenu({ menuLinks }: IProps) {
  return (
    <section class={style.wrapper}>
      <div class={style.inner}>
        <h3 class={style.title}>
          <span>Menu</span>
        </h3>
        <ul class={style.list}>
          {menuLinks.map(({ linkText, href, attributes }, index) => (
            <li class={style.item}>
              <a href={href} {...attributes} style={`--link-index: ${index + 1};`}>
                {linkText}
              </a>
            </li>
          ))}
        </ul>
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
