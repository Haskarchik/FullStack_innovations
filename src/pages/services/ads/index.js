import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { adsExplanation, adsExplanation_mob, checks, heroBanner, ppc } from '@/data/ads';
import { ContactUs } from '@/features/sections/ContactUs';
import { InfoCards } from '@/features/sections/InfoCards';
import { PriceList } from '@/features/sections/PriceList';
import { pricelist } from '@/data/ads';
import { Explanation } from '@/features/sections/Explanation';
import { CheckList } from '@/features/sections/CheckList';
import { Reviews } from '@/features/sections/Reviews';
import { reviews } from '@/data/ads';
import { useEffect, useState } from 'react';

export default function Ads() {
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
      <Explanation data={windowWidth > 1440 ? adsExplanation : adsExplanation_mob} />
      <CheckList data={checks} />
      <PriceList data={pricelist} />
      <InfoCards data={ppc} />
      {/*    <InfoCards data={adsDetails} /> */}
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
