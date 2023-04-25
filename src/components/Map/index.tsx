import React from "react";
import styles from "./index.module.css";
import car from "../../../public/Images/car.jpg";
import Image from "next/image";

const Map = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={car} width={100} height={100} alt="Icon" />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Garer sa Merco</h4>
        <p className={styles.text}>A Jebsheim, au 15 rue de Riedwihr.</p>
        <p className={styles.text}>
          Stationnement sur la place des Tilleuls only.
        </p>
      </div>
      <div className={styles.googleMapWrapper}>
        <iframe
          className={styles.googleMapIframe}
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1331.721450023588!2d7.474399639089827!3d48.12098159281043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d48.120416299999995!2d7.476376999999999!4m5!1s0x4791699b42b9eeb3%3A0x8806cc7a62bc3fb6!2s15%20Rue%20de%20Riedwihr%2C%2068320%20Jebsheim%2C%20Frankreich!3m2!1d48.1216983!2d7.475259899999999!5e0!3m2!1sde!2sde!4v1682456267242!5m2!1sde!2sde"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
