'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1, // 👈 1 slide on very small screens (mobile)
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 3, // 👈 3 slides on tablets and small laptops
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4, // 👈 4 slides on desktops
          spaceBetween: 20,
        },
      }}
      loop={true}
      grabCursor={true}
    >
      {images &&
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: 'relative', width: { sx: '100%', md: '100%' }, height: '280px', overflow: 'hidden', borderRadius: '8px' }}>
              <Image src={image} alt="" width={650} height={650} style={{ objectFit: 'cover', objectPosition: 'center', marginInline: 'auto' }} />
            </Box>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ImageGallery;
