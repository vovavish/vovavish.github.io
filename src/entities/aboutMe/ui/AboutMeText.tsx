import { Sparkles } from 'lucide-react';

import styles from './AboutMeText.module.scss';

export const AboutMeText = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMe__item}>
        <Sparkles className={styles.aboutMe__icon}/>
        <p className={styles.aboutMe__text}>
          Я занимаюсь фронтенд-разработкой, потому что мне нравится создавать удобные, понятные и
          визуально приятные интерфейсы. Особенно люблю работать с React и Next.js, уделяю внимание
          деталям и делаю код чистым и поддерживаемым.
        </p>
      </div>
      <div className={styles.aboutMe__item}>
        <Sparkles className={styles.aboutMe__icon}/>
        <p className={styles.aboutMe__text}>
          Интерес к веб-разработке появился у меня в университете — сначала пробовал HTML и CSS, потом
          начал изучать JavaScript. После создания первых проектов, стало понятно, что хочу
          развиваться в этом направлении. С тех пор постоянно учусь и пробую новые подходы.
        </p>
      </div>
    </div>
  );
};
