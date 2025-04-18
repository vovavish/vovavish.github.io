import { ReactNode } from "react";

import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  id: string;
  children: ReactNode;
}

export const SectionTitle = ({ id, children }: SectionTitleProps) => {
  return <h2 className={styles.section__title} id={id}>{children}</h2>;
};