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

/*
An example of the return data can be:

imagesResults {
  page: 1,
  per_page: 15,
  photos: [
    {
      id: 18422815,
      width: 3268,
      height: 4904,
      url: 'https://www.pexels.com/photo/flame-under-hot-air-balloon-at-night-18422815/',
      photographer: 'M.Emin  BİLİR',
      photographer_url: 'https://www.pexels.com/@travelerchitect',
      photographer_id: 202978783,
      avg_color: '#312725',
      src: [Object],
      liked: false,
      alt: ''
    },
    ...
  ],
  total_results: 8000,
  next_page: 'https://api.pexels.com/v1/curated/?page=2&per_page=15'
}


*/
