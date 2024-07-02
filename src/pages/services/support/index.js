import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner, reviews, supportTypes_mob } from '@/data/support';
import { ContactUs } from '@/features/sections/ContactUs';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { SupportTypesImage } from '@/features/sections/SupportTypesImage';
import { supportTypes } from '@/data/support';
import { supportPackages } from '@/data/support';
import { SecurityList } from '@/features/sections/SecurityList';
import { Reviews } from '@/features/sections/Reviews';
import { useEffect, useState } from 'react';

export default function Support() {
  const [windowWidth, setwindowWidth] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setwindowWidth(window.innerWidth);

      const updateWidth = () => setwindowWidth(window.innerWidth);
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <SupportTypesImage data={windowWidth > 1440 ? supportTypes : supportTypes_mob} />
      <SupportTypes data={supportPackages} />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
