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
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d2663.3599736180336!2d7.4726105771375835!3d48.122581002204164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d48.120407799999995!2d7.4764032!4m5!1s0x4791699b7583f77d%3A0x2d191e5eba3cfb1f!2sRue%20de%20Riedwihr%2C%2068320%20Jebsheim%2C%20Frankreich!3m2!1d48.122648999999996!2d7.472792999999999!5e0!3m2!1sde!2sde!4v1682405089470!5m2!1sde!2sde"
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
