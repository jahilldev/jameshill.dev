import { h } from 'preact';
import { IMenuItem } from '@/data/socialData';
import style from './footer.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  socialMenu: IMenuItem[];
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

function Footer({ socialMenu }: IProps) {
  return (
    <footer class={style.footer}>
      <SocialMenu className={style.social} socialMenu={socialMenu} />
    </footer>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Footer };
