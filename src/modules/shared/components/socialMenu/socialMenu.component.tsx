import { h } from 'preact';
import { ILink } from '@/data/socialMenu';
import style from './socialMenu.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  className?: string;
  socialLinks: ILink[];
}

/* -----------------------------------
 *
 * Social
 *
 * -------------------------------- */

function SocialMenu({ className = '', socialLinks }: IProps) {
  return (
    <nav class={`${style.social} ${className}`}>
      {socialLinks.map(({ href, imageSrc, attributes = {} }) => (
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
