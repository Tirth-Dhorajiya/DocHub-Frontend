import React, { useState } from "react";
import api from "../axiosInterceptor";

const UploadImage = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await api.post("/upload", formData);
      onUpload(res.data.url);
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
