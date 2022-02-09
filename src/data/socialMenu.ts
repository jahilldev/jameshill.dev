/* -----------------------------------
 *
 * Links
 *
 * -------------------------------- */

interface ILink {
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

const socialLinks: ILink[] = [
  {
    imageSrc: twitterIcon,
    href: 'https://twitter.com/jahilldev',
    altText: 'Twitter'
  },
  {
    imageSrc: githubIcon,
    href: 'https://github.com/jahilldev',
    altText: 'Github'
  },
  {
    imageSrc: linkedinIcon,
    href: 'https://www.linkedin.com/in/jameshill-dev',
    altText: 'LinkedIn'
  },
];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { ILink, socialLinks };
