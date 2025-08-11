'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import { useRef } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Box } from '@mui/material';
import type { Swiper as SwiperClass } from 'swiper';

const ImageGallery = ({ images }: { images: StaticImageData[] }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        onClick={() => swiperRef.current?.slidePrev()}
        className="carousel_btn_left carousel-btn-override"
        sx={{ position: 'absolute', display: { xs: 'none', md: 'block' }, left: '-40px', top: '50%', transform: 'translateY(-50%)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="css-1bb65jv">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
        </svg>
      </Box>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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

      <Box
        onClick={() => swiperRef.current?.slideNext()}
        className="carousel_btn_right carousel-btn-override"
        sx={{ position: 'absolute', display: { xs: 'none', md: 'block' }, right: '-40px', top: '50%', transform: 'translateY(-50%)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="css-1bb65jv">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
      </Box>
    </Box>
  );
};

export default ImageGallery;
