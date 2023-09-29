import { z } from 'zod';

// https://www.pexels.com/api/documentation/#photos-curated
// in response section
const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

/*
I don't think it need the extends, I will just add it into the BasicImageSchema, rather than having BasicImageSchema has the type without photos
const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
  photos: z.array(PhotoSchema),
*/

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;

export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>;
