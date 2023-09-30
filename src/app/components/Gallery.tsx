import type { ImagesResults } from '@/models/Images';
import fetchImages from '@/lib/fetchImages';
import ImgContainer from './ImgContainer';
import addBlurredDataUrl from '@/lib/getBase64';

export default async function Gallery() {
  // https://www.pexels.com/api/documentation/#photos-curated
  const url = 'https://api.pexels.com/v1/curated';

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className='m-4 text-2xl font-bold'>No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrl(images);

  // grid-cols-gallery is defined in C:\react\next-13-image-gallery\tailwind.config.ts
  return (
    <section className='px-2 my-3 grid gap-2 grid-cols-gallery'>
      {/*{images.photos.map((photo) => (*/}
      {photosWithBlur.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}
