import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Tyraine Johnson Blog',
    description: 'My Astro blog posts',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
  });
}