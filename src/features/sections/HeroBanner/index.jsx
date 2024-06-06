import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { statsCards } from '@/data/homepage';
import { StatsCard } from '@/components/StatsCard';
import { InfiniteSlider } from '@/components/InfiniteSlider';
import { partners } from '@/data/homepage';
import { useTranslation } from 'react-i18next';

export const HeroBanner = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <ContentWrapper>
        <div className={styles.wrapper}>
          <div className={styles.hero__header}>
            <h1 className={styles.hero__title}>Fullstack <span>innovations</span></h1>
            <h2 className={styles.hero__desc}>
            {t(`hero-baner.subTitle`)} 
            </h2>
          </div>
          <div className={styles.hero__stats_list}>
            {statsCards.map((card, index) => (
              <StatsCard card={card} id={index} key={index} />
            ))}
          </div>
          <InfiniteSlider list={partners} opacityCount={0.9} />
        </div>
      </ContentWrapper>
    </section>
  );
};
