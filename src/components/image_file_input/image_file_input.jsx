import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ fileUploader, onChangeFile, name }) => {
  const [loading, setLoading] = useState(false);
  const fileInput = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await fileUploader.upload(e.target.files[0]);
    setLoading(false);
    onChangeFile({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        className={styles.input}
        ref={fileInput}
        name="file"
        accept="image/*"
        onChange={onChange}
      />
      {!loading && (
        <button
          type="button"
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || "No File"}
        </button>
      )}
      {loading && <div className={styles.spinner}></div>}
    </div>
  );
};

export default ImageFileInput;
