import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  description: z.string().optional(),
  date: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const blog = defineCollection({
  schema: baseSchema // baseSchema.extend({ body: z.string() }), si quisieramos agregar un campo body
});

const gym = defineCollection({
  schema: baseSchema,
});

const techConcepts = defineCollection({
  schema: baseSchema
})

const multiCodeBlocks = defineCollection({
  schema: z.object({})
})

export const collections = { 
  'blog': blog,
  'gym': gym, 
  'tech-concepts': techConcepts, 
  'multi-code-blocks': multiCodeBlocks 
};