export type EducationItemType = {
  institution: string;
  degree: string;
  period: string;
  description?: string;
};

export const educationItems: EducationItemType[] = [
  {
    institution: "МГТУ Станкин",
    degree: "Программная инженерия",
    period: "2021–2025",
    description: "Бакалавриат, институт информационных технологий."
  },
]; 