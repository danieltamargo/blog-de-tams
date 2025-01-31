import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string().min(1, "El título es obligatorio"),
    description: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const techConcepts = defineCollection({
  schema: z.object({
    title: z.string().min(1, "El título es obligatorio"),
    description: z.string().optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
  })
})

const multiCodeBlocks = defineCollection({
  schema: z.object({
    lang: z.string().min(1, "El lenguaje es obligatorio"),
  })
})

export const collections = { 
  'blog': blog, 
  'tech-concepts': techConcepts, 
  'multi-code-blocks': multiCodeBlocks 
};