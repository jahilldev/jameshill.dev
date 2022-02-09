import { h } from 'preact';
import { ILink } from '@/data/socialMenu';
import style from './footer.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  socialLinks: ILink[];
}

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { SocialMenu } from '@/modules/shared/components/socialMenu';

/* -----------------------------------
 *
 * Footer
 *
 * -------------------------------- */

function Footer({ socialLinks }: IProps) {
  return (
    <footer class={style.footer}>
      <SocialMenu className={style.social} socialLinks={socialLinks} />
    </footer>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Footer };
