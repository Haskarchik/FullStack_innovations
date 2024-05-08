import { useEffect } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

export const DetailsModal = ({ isOpen, handleClose, modalContent }) => {
  useEffect(() => {
    !isOpen
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden');
  }, [isOpen]);
  return (
    <div className={styles.modal} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles.modal__background}>
        <div className={styles.modal__content}>
          <div role="button" className={styles.modal__closeBtn} onClick={handleClose}>
            <Image src={'/img/icons/close-btn.svg'} width={25} height={25} alt="closeIcon" />
          </div>
          <div className={styles.modal__heading}>
            <div className={styles.modal__heading__text}>
              <div className={styles.modal__heading__title}>{modalContent.title}</div>
              <div className={styles.modal__heading__desc}>{modalContent.desc}</div>
            </div>
            <div className={styles.modal__type}>{modalContent.type}</div>
          </div>
          <div className={styles.modal__grid}>
            {modalContent.grid.map((item, i) => (
              <div className={styles.modal__grid__card} key={item.title}>
                <div className={styles.modal__grid__card__order}>00{i + 1}</div>
                <div className={styles.modal__grid__card_content}>
                  <div className={styles.modal__grid__card__title}>{item.title}</div>
                  <div className={styles.modal__grid__card__desc}>{item.desc}</div>
                </div>
              </div>
            ))}
            {modalContent.images.map((item) => (
              <div className={styles.modal__grid__img} key={item.src}>
                <Image src={item.src} fill={true} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
