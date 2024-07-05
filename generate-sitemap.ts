// generate-sitemap.js
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://kleankingcarpet.com' });
  const gzip = sitemapStream.pipe(createGzip());

  links.forEach(link => {
    sitemapStream.write(link);
  });

  sitemapStream.end();

  const sitemapBuffer = await streamToPromise(gzip);

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml.gz'), sitemapBuffer);

  console.log('Sitemap generated!');
})();