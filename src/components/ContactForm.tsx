"use client";

import { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification, { Status } from "./Notification";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const els = event.currentTarget.elements;
    const email = (els.namedItem("email") as HTMLInputElement).value.trim();
    const name = (els.namedItem("name") as HTMLInputElement).value.trim();
    const message = (
      els.namedItem("message") as HTMLTextAreaElement
    ).value.trim();
    const values = { email, name, message };

    setStatus("pending");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response.json().then((data) => {
          return Promise.reject(
            new Error(data.message || "Something went wrong!")
          );
        });
      })
      .then((data) => {
        setStatus("success");
        console.log(data);
      })
      .catch((e) => {
        setStatus("error");
        console.error(e);
      });
  };

  const notif =
    status === "pending"
      ? {
          title: "Just a sec...",
          message: "Submitting the form...",
        }
      : status === "success"
      ? {
          title: "Done",
          message: "Message submitted!",
        }
      : { title: "Ooops...", message: "Shit happens, failed ((" };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              defaultValue="bas@gmail.com"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              defaultValue="Bas"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            defaultValue="Hello my dear friend"
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send message</button>
        </div>
      </form>
      {status && (
        <Notification
          title={notif.title}
          message={notif.message}
          status={status}
          onClick={() => setStatus(null)}
        />
      )}
    </section>
  );
};

export default ContactForm;
