'use client';

import { StaticImageData } from 'next/image';
import { useRef } from 'react';

import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import Image from 'next/image';
import styles from '../styles/ImageCarousel.module.scss';

import closeSvg from '../../public/images/icons/xmark-solid.svg';
import nextBtn from '../../public/images/icons/chevron-right-solid.svg';
import prevBtn from '../../public/images/icons/chevron-left-solid.svg';

const ImageCarousel = ({
  imagesArray,
  activeIndex,
  setCarouselOpen,
}: {
  imagesArray: StaticImageData[];
  activeIndex: number | null;
  setCarouselOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.card_outer_wrap}>
        <button className={styles.stepper_right} onClick={() => swiperRef.current!.slideNext()}>
          <Image src={nextBtn} alt="galéria léptetése jobbra" width={50} height={50} />
        </button>
        <button className={styles.stepper_left} onClick={() => swiperRef.current!.slidePrev()}>
          <Image src={prevBtn} alt="galéria léptetése balra" width={50} height={50} />
        </button>
        <button className={styles.close_btn} onClick={() => setCarouselOpen(false)}>
          <Image src={closeSvg} alt="" width={50} height={50} />
        </button>
        <div className={styles.modal_card}>
          <Swiper
            modules={[Virtual, Navigation]}
            initialSlide={activeIndex!}
            spaceBetween={50}
            slidesPerView={1}
            virtual
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {imagesArray.map((slideContent, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <Image src={slideContent} alt="" width={650} height={650} className={styles.picture} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
