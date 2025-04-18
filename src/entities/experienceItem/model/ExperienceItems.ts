export type ExperienceItemType = {
  position: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
};

export const experienceItems: ExperienceItemType[] = [
  {
    position: "Frontend-разработчик",
    company: "АО \"Гринатом\"",
    period: "сентябрь 2024 - декабрь 2024",
    description: "Проходил программу предстажировки CaseLab JS. В рамках предстажировки разрабатывалась система документооборота. Работа велась в команде из 6 человек фронтендеров с взаимодействием с командой бэкендеров.",
    responsibilities: [
      "Разработка пользовательского интерфейса на React",
      "Использование MobX для управления состоянием приложения",
      "Верстка с использованием TailwindCSS и Shadcn/ui",
      "Работа с отправками и состояниями документов",
      "Рефакторинг существующего кода"
    ],
    techStack: [
      "React",
      "TypeScript",
      "MobX",
      "TailwindCSS",
      "Shadcn/ui"
    ]
  }
];
