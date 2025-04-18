import { NavLink } from '@shared/ui/NavLink';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list__item}>
          <NavLink href="#aboutMe">Обо мне</NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink href="#experience">Опыт работы</NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink href="#education">Образование</NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink href="#technologyStack">Стек технологий</NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink href="#projects">Проекты</NavLink>
        </li>
      </ul>
    </nav>
  );
};
