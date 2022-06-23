import React from "react";

const Textarea = ({ label, value, setValue, row = 2 }) => {
  return (
    <div className="Textarea">
      {label && <label htmlFor="">Title</label>}
      <textarea
        rows={row}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Textarea;
