import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
   site: 'https://temporaldecoupling.com',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    netlify(),
    sitemap(),
  ]
});