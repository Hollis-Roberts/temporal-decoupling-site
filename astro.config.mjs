import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import staticAdapter from '@astrojs/static'; // ✅ Static adapter

export default defineConfig({
  output: 'static',
  adapter: staticAdapter(), // ✅ Use static adapter
  markdown: {
    remarkPlugins: [remarkMath, remarkGfm],
    rehypePlugins: [rehypeKatex],
  },
});