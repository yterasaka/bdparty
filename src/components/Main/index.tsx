import Image from "next/image";
import styles from "./index.module.css";
import main from "../../../public/Images/main.jpg";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={main}
          width={700}
          height={700}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          alt="image"
        />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Rendez-vous</h4>
        <p className={styles.text}>
          Journée Tartes Flambées autour du Tilleul.
        </p>
        <p className={styles.text}>Une dernière fête avant les au-revoir</p>
        <p className={styles.text}>à notre chère maison.</p>
        <p className={styles.text}>Musique, joie, larmes, danse,</p>
        <p className={styles.text}>karaoké, ambiance de ouf.</p>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default Main;
