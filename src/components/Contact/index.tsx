import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import styles from "./index.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const serviceId =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "default_service_id";
const templateId =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "default_template_id";
const publicKey =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "default_public_key";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (e, data) => {
    // console.log(data);

    if (!form.current) {
      console.error("Form is not initialized.");
      return;
    }

    const formElement: HTMLFormElement = form.current;

    emailjs.sendForm(serviceId, templateId, formElement, publicKey).then(
      (result: EmailJSResponseStatus) => {
        // console.log(result.text);
        window.alert("Message sent.");
        reset();
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  };

  return (
    <div className={styles.container}>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.formElement}>
          <label className={styles.formLabel}>NAME</label>
          <input
            placeholder="name"
            className={styles.formInput}
            {...register("name", {
              required: "Please enter your name",
            })}
          />
          <p>{errors.name?.message}</p>
        </div>

        <div className={styles.formElement}>
          <label className={styles.formLabel}>EMAIL</label>
          <input
            placeholder="your@example.com"
            className={styles.formInput}
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  /([a-zA-Z0-9\+_\-]+)(\.[a-zA-Z0-9\+_\-]+)*@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,6}/,
                message: "Invalid email address",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className={styles.formElement}>
          <label className={styles.formLabel}>MESSAGE</label>
          <textarea
            className={`${styles.formInput} ${styles.textarea}`}
            {...register("message", {
              required: "Please enter your message",
            })}
          />
          <p>{errors.message?.message}</p>
        </div>

        <input type="submit" value="SEND" className={styles.submitButton} />
      </form>
    </div>
  );
};

export default Contact;
