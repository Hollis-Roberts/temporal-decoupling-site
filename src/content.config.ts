import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import readingTime from 'reading-time';

export const collections = {
  framework: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/framework' }),
    schema: z.object({
      sectionNumber: z.number(),
      title: z.string(),
      subtitle: z.string(),
      date: z.date(),
      heroImage: z.string().optional(),
      pubDate: z.date(),
      updatedAt: z.date().optional(),
      readingTime: z.number().optional(),
          toc: z.array(z.object({
      slug: z.string(),
      text: z.string(),
    })).optional(),
    }),
    transform: async (data) => {
      // Auto-calculate reading time if not provided
      if (!data.readingTime && data.body) {
        const rt = readingTime(data.body);
        data.readingTime = Math.ceil(rt.minutes);
      }
      return data;
    },
  }),
};