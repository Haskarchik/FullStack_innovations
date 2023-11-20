import { ContentWrapper } from '@/components/ContentWrapper';
import styles from './style.module.scss';
import Image from 'next/image';
import { NavLinks } from '@/components/NavLinks';
import { navigation } from '@/data/navigation';
import { LocaleSwitch } from '@/components/LocaleSwitch';
import { CustomButton } from '@/components/CustomButton';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.navbar}>
      <ContentWrapper>
        <div className={styles['nav-wrapper']}>
          <div className={styles.logo}>
            <Image src="/img/logo.png" alt="logo" layout="fill" objectFit="cover"/>
          </div>
          <NavLinks links={navigation} />
          <LocaleSwitch />
          <CustomButton title={t('buttons.contactUs')} stylesClassName={styles.navbar__btn} />
        </div>
      </ContentWrapper>
    </header>
  );
};
