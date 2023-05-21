import Image from "next/image";
import styles from "./index.module.css";
import camera from "../../../public/Images/camera.jpg";
import merci from "../../../public/Images/merci.jpg";

const Photo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={camera} width={100} height={100} alt="Icon" />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Cheeeeeeeese</h4>
        <Image
          src={merci}
          width={450}
          height={600}
          alt="Merci"
          className={styles.image}
        />
        <p className={styles.text}>
          Merci à toutes et à tous pour cette journée, voici le{" "}
          <a
            href="https://photos.app.goo.gl/x5TmYJntEN9YexTu5"
            target="_blank"
            rel="noopener noreferrer"
          >
            lien
          </a>{" "}
          des photos !
        </p>
      </div>
    </div>
  );
};

export default Photo;
