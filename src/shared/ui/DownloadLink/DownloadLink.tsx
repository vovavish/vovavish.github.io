import { ReactNode } from "react";

import styles from './DownloadLink.module.scss';

interface DownloadLinkProps {
  href: string;
  children: ReactNode;
}

export const DownloadLink = ({ href, children }: DownloadLinkProps) => {
  return (
    <a download href={href} className={styles.download__link}>
      {children}
    </a>
  );
};
