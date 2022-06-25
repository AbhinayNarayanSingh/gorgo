import React, { useState } from "react";
import ImageFullScreenPopup from "../container/ImageFullScreenPopup";

const FileInput = ({ value, setValue, index }) => {
  const [fullImagePopup, setFullImagePopup] = useState(false);

  const setValueFn = (value, id, e) => {
    let tempArr = [];

    value.map((item) => {
      if (item["id"] === id) {
        return tempArr.push({ id: id, url: null, file: e.target.files[0] });
      } else {
        return tempArr.push(item);
      }
    });

    return tempArr;
  };

  const removeValueFn = (value, id) => {
    let tempArr = [];

    value.map((item) => {
      if (item["id"] === id) {
        return tempArr.push({ id: id, url: null, file: null });
      } else {
        return tempArr.push(item);
      }
    });

    return tempArr;
  };

  return (
    <>
      {fullImagePopup && (
        <ImageFullScreenPopup
          url={value && URL.createObjectURL(value)}
          setToggel={setFullImagePopup}
        />
      )}

      <div className="FileInput">
        {value ? (
          <>
            <img src={value && URL.createObjectURL(value)} alt="" />

            <div className="user-action">
              <i
                className="fa-solid fa-trash-can"
                onClick={() => setValue((value) => removeValueFn(value, index))}
              ></i>
              <i
                className="fa-solid fa-expand"
                onClick={() => setFullImagePopup(true)}
              ></i>
            </div>
          </>
        ) : (
          <label htmlFor={index} className="col-6">
            <img src={"./img/blank-img.png"} alt="" className="img-preview" />
          </label>
        )}

        <input
          type="file"
          name=""
          id={index}
          onChange={(e) => setValue((value) => setValueFn(value, index, e))}
        />
      </div>
    </>
  );
};

export default FileInput;
