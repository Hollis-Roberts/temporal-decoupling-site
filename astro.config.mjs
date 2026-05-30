import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // ✅ CRITICAL: Explicitly tell Astro this is a static site
  output: 'static',
  
  integrations: [netlify()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});