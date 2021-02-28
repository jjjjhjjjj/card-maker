import React from "react";
import EditorAddForm from "../editor_add_form/editor_add_form";
import EditorInput from "../editor_input/editor_input";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, deleteCard, updateCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>

    {cards &&
      Object.keys(cards).map((key) => (
        <EditorInput
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
    <EditorAddForm FileInput={FileInput} onAdd={addCard} />
  </section>
);

export default Editor;
