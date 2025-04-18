import { ExperienceItem } from "@entities/experienceItem"
import { SectionTitle } from "@shared/ui/SectionTitle"

import { experienceItems } from "@entities/experienceItem/model/ExperienceItems"

import styles from "./Experience.module.scss";

export const Experience = () => {
  return (
    <div className={styles.experience__content}>
      <SectionTitle id="experience">Опыт работы</SectionTitle>
      {experienceItems.map((item, index) => (
        <ExperienceItem key={index} experienceItem={item} />
      ))}
    </div>
  )
}