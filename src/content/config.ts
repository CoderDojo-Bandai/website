import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        summary: z.string(),
        cover: image(),
    }),
});

export const collections = {
    'blog': blogCollection,
};