import { h } from 'preact';
import { IMenuItem } from '@/data/socialData';
import style from './socialMenu.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  className?: string;
  socialMenu: IMenuItem[];
}

/* -----------------------------------
 *
 * Social
 *
 * -------------------------------- */

function SocialMenu({ className = '', socialMenu }: IProps) {
  return (
    <nav class={`${style.social} ${className}`}>
      {socialMenu.map(({ href, imageSrc, attributes = {} }) => (
        <a href={href} target="_blank" rel="noreferrer" class={style.link} {...attributes}>
          <img src={imageSrc} class={style.icon} width="26" height="26" alt="Twitter" />
        </a>
      ))}
    </nav>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { SocialMenu };
