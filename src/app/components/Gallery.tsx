import type { ImagesResults } from '@/models/Images';
import fetchImages from '@/lib/fetchImages';

export default async function Gallery() {
  // https://www.pexels.com/api/documentation/#photos-curated
  const url = 'https://api.pexels.com/v1/curated';

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className='m-4 text-2xl font-bold'>No Images Found</h2>;

  // grid-cols-gallery is defined in C:\react\next-13-image-gallery\tailwind.config.ts
  return (
    <section className='px-2 my-3 grid gap-2 grid-cols-gallery'>
      {images.photos.map((photo) => (
        <div key={photo.id} className='h-64 bg-gray-200 rounded-xl'></div>
      ))}
    </section>
  );
}
