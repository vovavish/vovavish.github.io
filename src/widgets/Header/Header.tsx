import { Navigation } from '@entities/navigation';
import { DownloadLink } from '@shared/ui/DownloadLink';
import { Logo } from '@shared/ui/Logo';

import headerIllustration from '@assets/undraw_designer_efwz.svg';

import styles from './Header.module.scss';


export const Header = () => {
  return (
    <header>
      <div className={styles.header__navigation}>
        <Logo>Владимир Вишняков</Logo>
        <Navigation />
        <DownloadLink href="/resume.pdf">Скачать резюме</DownloadLink>
      </div>
      <div className={styles.header__hero}>
        <div className={styles.header__hero_text}>
          <h1>Привет, я Владимир - Frontend разработчик</h1>
        </div>
        <div className={styles.header__hero_image_wrapper}>
          <img src={headerIllustration} alt="header illustration" className={styles.header__hero_image}/>
        </div>
      </div>
    </header>
  );
};
