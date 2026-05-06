/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'SMA Technologies Help',
  tagline: 'OpCon RPA',
  url: 'https://help.smatechnologies.com',
  baseUrl: '/opcon/agents/opcon-rpa/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  organizationName: 'smatechnologies',
  projectName: 'opcon-rpa-docs',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: true,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/opcon-rpa-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7XYMFXX81Y',
          anonymizeIP: true,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/rpa-execution-context',
            to: '/rpa-security-settings',
          },
        ],
      },
    ],
  ],
};
