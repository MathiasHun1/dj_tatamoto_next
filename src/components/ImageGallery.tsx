import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import Image from 'next/image';

import img1 from '../../public/images/gallery/main/1.jpg';
import img2 from '../../public/images/gallery/main/2.jpg';
import img3 from '../../public/images/gallery/main/3.jpg';
import img4 from '../../public/images/gallery/main/4.jpg';
import img7 from '../../public/images/gallery/main/7.jpg';
import img8 from '../../public/images/gallery/main/8.jpg';

const ImageGallery = ({ images }) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3} loop={true} grabCursor={true}>
      {images &&
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt="" width={650} height={650} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ImageGallery;
