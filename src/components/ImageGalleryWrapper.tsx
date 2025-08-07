'use client';

import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';

const DynamicImageGallery = dynamic(() => import('./ImageGallery'), {
  ssr: false,
  loading: () => <p>Loading gallery...</p>, // Optional: Add a loading state
});

const ImageGalleryWrapper = ({ images }: { images: StaticImageData[] }) => {
  return <DynamicImageGallery images={images} />;
};

export default ImageGalleryWrapper;
// This wrapper is used to dynamically import the ImageGallery component
// to ensure it only loads on the client side, preventing issues with SSR in Next.js.
