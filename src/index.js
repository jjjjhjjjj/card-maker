import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Auth from "./service/auth";
import FileUploader from "./service/file_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";

const auth = new Auth();
const fileUploader = new FileUploader();

const FileInput = (props) => (
  <ImageFileInput {...props} fileUploader={fileUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
