import type { ImagesResults } from '@/models/Images';
import fetchImages from '@/lib/fetchImages';
import ImgContainer from './ImgContainer';
import addBlurredDataUrl from '@/lib/getBase64';

type Props = {
  // topic?: string | undefined;
  topic?: string;
};

export default async function Gallery({ topic }: Props) {
  // https://www.pexels.com/api/documentation/#photos-curated
  // https://www.pexels.com/api/documentation/#photos-search
  const url = topic
    ? `https://api.pexels.com/v1/search?query=${topic}`
    : 'https://api.pexels.com/v1/curated';

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className='m-4 text-2xl font-bold'>No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrl(images);

  // grid-cols-gallery is defined in C:\react\next-13-image-gallery\tailwind.config.ts
  // auto-rows-[10px] means grid row by default is 10px height
  return (
    <section className='px-2 my-3 grid gap-2 grid-cols-gallery auto-rows-[10px]'>
      {/*{images.photos.map((photo) => (*/}
      {photosWithBlur.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}
