import React from "react";
import styles from "./editor_input.module.css";
import Button from "../button/button";

const EditorInput = ({ FileInput, card, deleteCard, updateCard }) => {
  const { id, name, company, title, email, message, theme, fileName } = card;

  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(id);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) return;
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onChangeFile = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onChangeFile={onChangeFile} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default EditorInput;
