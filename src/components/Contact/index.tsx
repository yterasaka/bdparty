import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import styles from "./index.module.css";

const serviceId =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "default_service_id";
const templateId =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "default_template_id";
const publicKey =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "default_public_key";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form is not initialized.");
      return;
    }

    const formElement: HTMLFormElement = form.current;

    emailjs.sendForm(serviceId, templateId, formElement, publicKey).then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        window.alert("Message sent.");
        window.location.reload();
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  };

  return (
    <div className={styles.container}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formElement}>
          <label className={styles.formLabel}>NAME</label>
          <input
            type="text"
            name="user_name"
            placeholder="name"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formElement}>
          <label className={styles.formLabel}>EMAIL</label>
          <input
            type="email"
            name="user_email"
            placeholder="your@example.com"
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formElement}>
          <label className={styles.formLabel}>MESSAGE</label>
          <textarea
            name="message"
            className={`${styles.formInput} ${styles.textarea}`}
            required
          />
        </div>
        <div>
          <input type="submit" value="SEND" className={styles.submitButton} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
