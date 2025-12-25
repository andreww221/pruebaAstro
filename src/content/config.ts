import { defineCollection, reference } from 'astro:content';
// import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';


const blog = defineCollection({
  //   loader: glob({ pattern: ['*.md', '!voyager-*'], base: 'src/data/space-probes' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: image(),

    //Relacion
    // author:z.string(),
    author: reference('author'),

    //Relacion
    tags: z.array(z.string()),

    isDraft: z.boolean().default(false),



  }),
});


const author = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    avatar: image(),
    twitter: z.string(),
    linkedIn: z.string(),
    github: z.string(),
    bio: z.string(),
    subtitle: z.string(),
  }),
});




export const collections = { blog, author };