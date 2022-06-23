import React, { useState } from "react";
import ImageFullScreenPopup from "../container/ImageFullScreenPopup";

const FileInput = ({ id, value, setValue, error }) => {
  const [fullImagePopup, setFullImagePopup] = useState(false);
  return (
    <>
      {fullImagePopup && (
        <ImageFullScreenPopup
          url={URL.createObjectURL(value)}
          setToggel={setFullImagePopup}
        />
      )}

      <div className="FileInput">
        {value ? (
          <>
            <img src={URL.createObjectURL(value)} alt="" />

            <div className="user-action">
              <i
                className="fa-solid fa-trash-can"
                onClick={() => setValue()}
              ></i>
              <i
                className="fa-solid fa-expand"
                onClick={() => setFullImagePopup(true)}
              ></i>
            </div>
          </>
        ) : (
          <label htmlFor={id} className="col-6">
            <img src={"./img/blank-img.png"} alt="" className="img-preview" />
          </label>
        )}
        <input
          type="file"
          name=""
          id={id}
          onChange={(e) => setValue(e.target.files[0])}
          className={error ? "error" : ""}
        />
      </div>
    </>
  );
};

export default FileInput;
