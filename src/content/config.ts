import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // Menambahkan deskripsi untuk proyek
    image: z.string(),
    tech: z.array(z.string()), // Menambahkan array teknologi
    github: z.string(),
    demo: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  project: projectCollection
}