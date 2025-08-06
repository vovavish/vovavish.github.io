import { SectionTitle } from "@shared/ui/SectionTitle";
import { projectItems } from "@entities/projects";
import { ProjectItem } from "@entities/projects";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <div>
      <SectionTitle id="projects">Проекты</SectionTitle>
      <div className={styles.projects__content}>
        {projectItems.map((item, idx) => (
          <ProjectItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};