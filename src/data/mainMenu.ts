/* -----------------------------------
 *
 * Links
 *
 * -------------------------------- */

interface ILink {
  linkText: string;
  href: string;
  attributes?: object;
  icon?: string;
}

/* -----------------------------------
 *
 * Links
 *
 * -------------------------------- */

const menuLinks: ILink[] = [
  { linkText: 'Homepage', href: '/' },
  { linkText: 'Articles', href: '/articles' },
  // { linkText: 'Workshop', href: '/workshop' },
  {
    linkText: 'Github',
    href: 'https://github.com/jahilldev',
    attributes: { rel: 'noreferrer', target: '_blank' },
    icon: 'github',
  },
];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { ILink, menuLinks };
