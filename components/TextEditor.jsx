import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
      ></ReactQuill>
    </div>
  );
};

export default TextEditor;
