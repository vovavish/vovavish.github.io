import { Education } from "@widgets/Education";
import { Experience } from "@widgets/Experience";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header"
import { Projects } from "@widgets/Projects";
import { TechonologyStack } from "@widgets/TechnologyStack";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Experience />
      <Education />
      <TechonologyStack />
      <Projects />
      <Footer />
    </>
  );
};