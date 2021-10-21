/* -----------------------------------
 *
 * Links
 *
 * -------------------------------- */

interface ILinks {
  linkText: string;
  href: string;
  attributes?: object;
}

/* -----------------------------------
 *
 * Links
 *
 * -------------------------------- */

const menuLinks: ILinks[] = [
  { linkText: 'Homepage', href: '/' },
  { linkText: 'Articles', href: '/articles' },
  {
    linkText: 'Github',
    href: 'https://github.com/jhukdev',
    attributes: { rel: 'noreferrer', target: '_blank' },
  },
];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { ILinks, menuLinks };
