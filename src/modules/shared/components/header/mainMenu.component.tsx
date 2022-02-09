import { h } from 'preact';
import { ILink } from '@/data/mainMenu';
import style from './mainMenu.module.scss';

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
          {menuLinks.map(({ linkText, href, attributes, icon }, index) => (
            <li class={style.item}>
              <a href={href} {...attributes} style={`--index: ${index + 1};`}>
                {icon && <i class={icon} />}
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
