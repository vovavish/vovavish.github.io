import { ReactNode } from "react"

import styles from "./SectionSubTitle.module.scss";

interface SectionSubTitleProps {
  children: ReactNode;
}

export const SectionSubTitle = ({ children }: SectionSubTitleProps) => {
  return (
    <h3 className={styles.sectionSubTitle}>{children}</h3>
  )
}