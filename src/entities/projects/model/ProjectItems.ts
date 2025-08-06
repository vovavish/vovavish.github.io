export type ProjectItemType = {
  title: string;
  description: string;
  link: string;
  image?: string;
};

export const projectItems: ProjectItemType[] = [
  {
    title: "Площадка по аренде бумажной литературы",
    description: "Веб-приложение для аренды и поиска бумажных книг.",
    link: "https://github.com/vovavish/rent_book",
    image: "/rent_book.png"
  },
  {
    title: "Конструктор сайтов",
    description: "Инструмент для создания и публикации сайтов без программирования.",
    link: "https://github.com/vovavish/stBuilder",
    image: "/stbuilder.png"
  },
  {
    title: "Галерея",
    description: "Сайт галерея, на главной странице нас встречают альбомы, на каждый из альбомов можно перейти и увидеть галерею изображений в альбоме.",
    link: "https://github.com/vovavish/OurGallery",
    image: "/gallery.png"
  },
  {
    title: "IP address tracker",
    description: "Сайт для отслеживания IP-адреса, на котором можно узнать страну, город, время и ISP.",
    link: "https://github.com/vovavish/IpAddressTracker",
    image: "/id_address_tracker.jpg"
  }
]; 