/* -----------------------------------
 *
 * IMenuItem
 *
 * -------------------------------- */

interface IMenuItem {
  imageSrc: string;
  href: string;
  altText: string;
  attributes?: object;
}

/* -----------------------------------
 *
 * Images
 *
 * -------------------------------- */

import twitterIcon from '@/styles/images/twitter-icon.svg';
import githubIcon from '@/styles/images/github-icon.svg';
import linkedinIcon from '@/styles/images/linkedin-icon.svg';

/* -----------------------------------
 *
 * Links
 *
 * -------------------------------- */

const twitterUrl = 'https://twitter.com/jahilldev';
const githubUrl = 'https://github.com/jahilldev';
const linkedinUrl = 'https://www.linkedin.com/in/jameshill-dev/';

/* -----------------------------------
 *
 * Menu
 *
 * -------------------------------- */

const socialMenu: IMenuItem[] = [
  {
    imageSrc: twitterIcon,
    href: twitterUrl,
    altText: 'Twitter',
  },
  {
    imageSrc: githubIcon,
    href: githubUrl,
    altText: 'Github',
  },
  {
    imageSrc: linkedinIcon,
    href: linkedinUrl,
    altText: 'LinkedIn',
  },
];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export {
  IMenuItem,
  twitterIcon,
  githubIcon,
  linkedinIcon,
  twitterUrl,
  githubUrl,
  linkedinUrl,
  socialMenu,
};
