import type { Photo } from '@/models/Images';
import Image from 'next/image';

type Props = {
  photo: Photo;
};

const ImgContainer = ({ photo }: Props) => {
  // Use https://ausi.github.io/respimagelint/  to get the value for the sizes
  // group | group-hover:opacity-75 -> When hover on the parent, the children change opacity to 75
  // https://nextjs.org/docs/app/api-reference/components/image#placeholder. The blur image is a very nice blur image Next.js can give you while loading the image.
  // This is need to set the network to slow 3G to be able to see.
  return (
    <div className='h-64 bg-gray-200 rounded-xl relative overflow-hidden group'>
      {/* object-cover is a tailwind class */}
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        sizes='(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)'
        placeholder='blur'
        blurDataURL={photo.blurredDataUrl}
        className='object-cover group-hover:opacity-75'
      />
    </div>
  );
};

export default ImgContainer;
