import { AboutMeText } from "@entities/aboutMe/ui/AboutMeText"
import { SectionTitle } from "@shared/ui/SectionTitle"

import styles from "./AboutMe.module.scss"

export const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <SectionTitle id="aboutMe">Обо мне</SectionTitle>
      <AboutMeText />
    </div>
  )
}