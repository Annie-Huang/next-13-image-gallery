import type { Photo } from '@/models/Images';
import Image from 'next/image';

type Props = {
  photo: Photo;
};

const ImgContainer = ({ photo }: Props) => {
  // Use https://ausi.github.io/respimagelint/  to get the value for the sizes
  return (
    <div className='h-64 bg-gray-200 rounded-xl relative overflow-hidden'>
      {/* object-cover is a tailwind class */}
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        sizes='(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)'
        className='object-cover'
      />
    </div>
  );
};

export default ImgContainer;
