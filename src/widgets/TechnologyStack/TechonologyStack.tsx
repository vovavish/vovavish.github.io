import { SectionTitle } from "@shared/ui/SectionTitle";
import { technologyItems } from "@entities/technology";
import { TechnologyItem } from "@entities/technology";
import styles from "./TechnologyStack.module.scss";

export const TechonologyStack = () => {
  return (
    <div>
      <SectionTitle id="technologyStack">Технологии</SectionTitle>
      <ul className={styles.technology__content}>
        {technologyItems.map((item, idx) => (
          <TechnologyItem item={item} key={idx} />
        ))}
      </ul>
    </div>
  );
};