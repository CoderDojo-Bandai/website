import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        summary: z.string(),
        cover: image(),
        draft: z.boolean(),
    }),
});

export const collections = {
    'blog': blogCollection,
};