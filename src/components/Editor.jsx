import React, { useState, useRef } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};
export default function Editor() {
  const [value, setValue] = useState('');
  return (
    <div>
      <ReactQuill className="editbox" theme="snow" modules={modules} value={value} onChange={setValue} placeholder="Type to insert text" />
    </div>
  )
}