import { EducationItemType } from "../model/EducationItems";
import styles from "@widgets/Education/Education.module.scss";

export const EducationItem = ({ item }: { item: EducationItemType }) => (
  <div className={styles.education__item}>
    <div className={styles.education__institution}>{item.institution}</div>
    <div className={styles.education__degree}>{item.degree}</div>
    <div className={styles.education__period}>{item.period}</div>
    {item.description && <div>{item.description}</div>}
  </div>
); 