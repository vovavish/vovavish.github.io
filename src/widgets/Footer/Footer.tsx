import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <a
          href="https://github.com/vovavish"
          className={styles.footer__link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://t.me/Vladimi_rr"
          className={styles.footer__link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
};