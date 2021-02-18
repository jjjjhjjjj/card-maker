import React from "react";
import EditorAddForm from "../editor_add_form/editor_add_form";
import EditorInput from "../editor_input/editor_input";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <EditorInput key={card.id} card={card} />
    ))}
    <EditorAddForm onAdd={addCard} />
  </section>
);

export default Editor;
