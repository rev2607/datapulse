import React, { useState } from "react";
import axios from "axios";

function Upload({ setResults }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://localhost:8000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setResults(res.data);
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input"
      />
      <button
        onClick={handleUpload}
        className="upload-button"
      >
        Upload
      </button>
    </div>
  );
}

export default Upload;
