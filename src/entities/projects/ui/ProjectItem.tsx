import { ProjectItemType } from "../model/ProjectItems";
import styles from "@widgets/Projects/Projects.module.scss";

export const ProjectItem = ({ item }: { item: ProjectItemType }) => (
  <div className={styles.project__item}>
    {item.image && (
      <img src={item.image} alt={item.title} className={styles.project__image} />
    )}
    <h4 className={styles.project__title}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.title}
      </a>
    </h4>
    <div className={styles.project__description}>{item.description}</div>
  </div>
); 