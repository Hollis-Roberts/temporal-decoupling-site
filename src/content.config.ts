import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  framework: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/framework' }),
    schema: z.object({
      sectionNumber: z.number(),
      title: z.string(),
      subtitle: z.string(),
      date: z.date(),
      heroImage: z.string().optional(),
    }),
  }),
};