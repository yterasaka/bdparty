import Image from "next/image";
import styles from "./index.module.css";
import camera from "../../../public/Images/camera.jpg";

const Photo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={camera} width={100} height={100} alt="Icon" />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Cheeeeeeeese</h4>
        <p className={styles.text}>Soon, galerie photo de la jebtzparty.</p>
      </div>
    </div>
  );
};

export default Photo;
