class FileUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "aehtvzgm");

    const url = "https://api.cloudinary.com/v1_1/dlcfslhsk/upload";

    const result = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await result.json();
  }
}

export default FileUploader;
