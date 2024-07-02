import { ContentWrapper } from '@/components/ContentWrapper';
import { businessCards } from '@/data/homepage';
import styles from './style.module.scss';
import { BusinessCard } from '@/components/BusinessCard';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const BusinessShowCase = ({ left = false }) => {
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
      <section className={styles.business}>
        <h3
          style={{ textAlign: left && windowWidth < 1440 ? 'center' : 'left' }}
          className={styles.business__title}
        >
          {t(businessCards.title)}
        </h3>

        <div className={styles.business__cards}>
          {businessCards.list.map((item, index) => (
            <BusinessCard card={item} key={index} />
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
};
