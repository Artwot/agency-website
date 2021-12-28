import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardLg}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" className={styles.link}>
            <span>WORK WITH US</span>
            <Image src="/img/link.png" alt="" width=  "40px" height="40px" />
          </a>
        </h1>
      </div>
      <div className={styles.cardSm}>
        <div className={styles.cardItem}>
          12 INSURGENTES STREET MX <br /> MEX
        </div>
        <div className={styles.cardItem}>
          contact@avocado.dev <br /> 000 000 0000
        </div>
      </div>
      <div className={styles.cardSm}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 LAMA INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
