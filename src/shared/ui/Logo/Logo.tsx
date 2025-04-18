import { ReactNode } from 'react';

import styles from './Logo.module.scss';

interface LogoProps {
  children: ReactNode;
}

export const Logo = ({ children }: LogoProps) => {
  return <div className={styles.logo}>{children}</div>;
};
