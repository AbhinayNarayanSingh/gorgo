import React, { useState } from "react";
import ImageFullScreenPopup from "../container/ImageFullScreenPopup";

/**
 * @description This component is for uploading files
 * @param value [{url: string, file: File}]
 * @param setValue method to update value
 */

const FileInput = ({ value, setValue, index, id }) => {
  const [fullImagePopup, setFullImagePopup] = useState(false);

  const handleChange = (e) => {
    let valueIns = [...value];
    let file = e.target.files[0];
    let base64Url = URL.createObjectURL(file);
    valueIns[index] = {
      file: file,
      url: base64Url,
    };
    console.log("file", file, "url", base64Url);
    setValue(valueIns);
  };

  const handleRemoveFn = (e) => {
    let valueIns = [...value];
    let file = null;
    let base64Url = null;
    valueIns[index] = {
      file: file,
      url: base64Url,
    };
    setValue(valueIns);
  };

  return (
    <div className="FileInput">
      {fullImagePopup && (
        <ImageFullScreenPopup
          url={value[index].url || "./img/blank-img.png"}
          setToggel={setFullImagePopup}
        />
      )}
      <div>
        <input onChange={handleChange} type="file" id={id} />
        <label htmlFor={id}>
          <img
            src={value[index].url || "./img/blank-img.png"}
            alt=""
            className="file_input_label_img"
          />
        </label>

        <div className="user-action">
          <i class="fa-solid fa-trash" onClick={() => handleRemoveFn()}></i>
          <i
            className="fa-solid fa-expand"
            onClick={() => setFullImagePopup(true)}
          ></i>
        </div>
      </div>
    </div>
  );
};
export default FileInput;

/**
 * className : file_input
 * id: file-input
 */
