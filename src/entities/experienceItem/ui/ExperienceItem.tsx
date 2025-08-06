import greenatomLogo from "@assets/greenatom_logo.svg";

import styles from "./ExperienceItem.module.scss";
import { ExperienceItemType } from "../model/ExperienceItems";
import { SectionSubTitle } from "@shared/ui/SectionSubTitle";

interface ExperienceItemProps {
  experienceItem: ExperienceItemType;
}

export const ExperienceItem = ({ experienceItem }: ExperienceItemProps) => {
  return (
    <div className={styles.experienceItem}>
      <img
        src={`src/assets/${experienceItem.logo}`}
        alt="logo"
        className={styles.experienceItem__logo}
      ></img>
      <div className={styles.experienceItem__content}>
        <div>
          <p className={styles.experienceItem__position}>
            {experienceItem.position}
          </p>
          <p>{experienceItem.company}</p>
          <p>{experienceItem.period}</p>
        </div>
        {experienceItem.description && <div>{experienceItem.description}</div>}
        <div>
          <SectionSubTitle>Решаемые задачи</SectionSubTitle>
          <ul className={styles.experienceItem__list}>
            {experienceItem.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionSubTitle>Стек технологий</SectionSubTitle>
          <ul className={styles.experienceItem__list}>
            {experienceItem.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
