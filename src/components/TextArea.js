import React, { useState } from "react";
import { TextareaAutosize } from "@mui/core";

const TextArea = ({ id, placeholder, setValue }) => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
    setValue(data);
  };
  return (
    <TextareaAutosize
      id={id}
      aria-label="minimum height"
      minRows={3}
      placeholder={placeholder}
      style={{ width: 200 }}
      onChange={handleChange}
    />
  );
};

export default TextArea;
