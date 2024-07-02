import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { banner } from '@/data/services';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const Banner = () => {
  const { t } = useTranslation();
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
    <ContentWrapper>
      <div className={styles.banner}>
        <div className={styles.banner__content}>
          <div className={styles.banner__title}>
            {windowWidth > 1440 ? t(banner.title) : t(banner.title_mob)}
          </div>
          <div className={styles.banner__desc}>{t(banner.desc)}</div>
        </div>
        <div className={styles.banner__image}>
          <Image src={banner.image} fill="true" alt="" placeholder="empty" />
        </div>
      </div>
    </ContentWrapper>
  );
};
