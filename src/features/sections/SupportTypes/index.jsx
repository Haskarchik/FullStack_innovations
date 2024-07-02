import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import { useTranslation } from 'react-i18next';

export const SupportTypes = ({ data, alt, cols = 3, startsWith = '00', landing=false, image=true }) => {
  const {t}=useTranslation();
  
  return (
    <ContentWrapper>
      <div className={styles.support_types}>
        <div className={styles.support_types__title}>{t(data.title)}</div>
        <div
          className={styles.support_types__list}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {data.list.map((item, i) => (
            <div
              className={`${styles.support_types__item}  ${alt ? styles.alt : ''} ${landing ? styles.landing : ''}`}
              key={`item-${i}`}
            >
              <div className={`${styles.support_types__item__order} ${alt ? styles.alt : ''} ${landing ? styles.landing : ''}`}>
                {startsWith}
                {i + 1}
              </div>
              <div className={`${styles.support_types__item__title} ${alt ? styles.alt : ''}`}>
                {t(item.title)}
              </div>
              <div className={`${styles.support_types__item__desc} ${alt ? styles.alt : ''}`}>
                {t(item.desc)}
              </div>
            </div>
          ))}
        </div>
        {data?.image && image &&(
          <div
            className={styles.support_types__image}
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>
        )}
      </div>
    </ContentWrapper>
  );
};
