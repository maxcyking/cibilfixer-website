/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cibilfixer.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/dashboard/*',
    '/admin/*',
    '/api/*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/admin/',
          '/api/',
          '/_next/',
          '/404',
          '/500'
        ],
      },
    ],
    additionalSitemaps: [
      'https://cibilfixer.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/packages': 0.9,
      '/contact': 0.7,
      '/testimonials': 0.6,
      '/why-choose-us': 0.7,
      '/become-partner': 0.6,
      '/download': 0.5,
    };

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorities[path] || 0.5,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};