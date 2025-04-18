import { ReactNode } from 'react';
import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a href={href} className={styles.navLink}>
      {children}
    </a>
  );
};
