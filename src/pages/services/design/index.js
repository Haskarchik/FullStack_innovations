import { HeroBannerLight } from '@/features/sections/HeroBannerLight';
import { heroBanner, reviews } from '@/data/design';
import { ContactUs } from '@/features/sections/ContactUs';
import { SecurityList } from '@/features/sections/SecurityList';
import { Reviews } from '@/features/sections/Reviews';
import { SupportTypes } from '@/features/sections/SupportTypes';
import { supportTypes } from '@/data/design';
import { WeProvide } from '@/features/sections/WeProvide';
export default function Design() {
  return (
    <>
      <HeroBannerLight data={heroBanner} />
      <WeProvide />
      <SupportTypes data={supportTypes} alt cols={4} image={false} />
      <SecurityList />
      <Reviews data={reviews} />
      <ContactUs />
    </>
  );
}
