import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { securityList } from '@/data/support';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
export const SecurityList = () => {
  const {t}=useTranslation();
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
      <div className={styles.security}>
        <div className={styles.security__content}>
          <div className={styles.security__title}>{t(securityList.title)}</div>
          <div className={styles.security__desc}>{t(securityList.desc)}</div>
          <div className={styles.security__list}>
            {securityList.list.map((item, i) => (
              <div className={styles.security__item} key={`security-item-${i}`}>
                <div className={styles.security__item__order}>0{i + 1}</div>
                <div className={styles.security__item__title}>{windowWidth > 1440?t(item.title):t(item.title_mob)}</div>
                <div className={styles.security__item__desc}>{windowWidth > 1440?t(item.desc):t(item.desc_mob)}</div>
                <div className={styles.security__item__icon}>
                  <Image src={item.icon} alt="" height={32} width={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.security__image}>
          <Image src={securityList.image} alt="" fill="true" />
        </div>
      </div>
    </ContentWrapper>
  );
};
