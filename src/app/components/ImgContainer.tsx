import type { Photo } from '@/models/Images';
import Image from 'next/image';

type Props = {
  photo: Photo;
};

const ImgContainer = ({ photo }: Props) => {
  return (
    <div className='h-64 bg-gray-200 rounded-xl relative overflow-hidden'>
      {/* object-cover is a tailwind class */}
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        className='object-cover'
      />
    </div>
  );
};

export default ImgContainer;
