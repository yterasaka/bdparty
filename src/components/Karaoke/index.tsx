import styles from "./index.module.css";
import karaoke from "../../../public/Images/karaoke.jpg";
import mail from "../../../public/Images/mail.jpg";
import Image from "next/image";
import Contact from "../Contact";
import { TbArrowNarrowDown } from "react-icons/tb";

const Karaoke = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={karaoke} width={100} height={100} alt="Icon" />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Allumer le feu</h4>
        <p className={styles.text}>Merci de m’envoyer ton souhait</p>
        <p className={styles.text}>&gt; TITRE et NOM de l’artiste/groupe</p>
      </div>
      <div className={styles.mail}>
        <TbArrowNarrowDown className={styles.icon} />
        <Image src={mail} width={75} height={75} alt="Icon" />
      </div>
      <Contact />
    </div>
  );
};

export default Karaoke;
