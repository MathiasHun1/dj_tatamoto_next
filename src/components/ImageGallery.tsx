import { Swiper, SwiperSlide } from 'swiper/react';
// import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3} loop={true} grabCursor={true}>
      {images &&
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: 'relative', width: '370px', height: '280px', overflow: 'hidden' }}>
              <Image src={image} alt="" width={650} height={650} style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </Box>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ImageGallery;
