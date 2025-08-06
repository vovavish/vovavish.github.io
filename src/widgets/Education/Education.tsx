import { SectionTitle } from "@shared/ui/SectionTitle";
import { educationItems } from "@entities/education";
import { EducationItem } from "@entities/education";
import styles from "./Education.module.scss";

export const Education = () => {
  return (
    <div>
      <SectionTitle id="education">Образование</SectionTitle>
      <div className={styles.education__content}>
        {educationItems.map((item, idx) => (
          <EducationItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};