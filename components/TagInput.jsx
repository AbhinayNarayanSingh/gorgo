import { useState } from "react";

const TagInput = ({
  type = "text",
  label,
  placeholder,
  value,
  setValue,
  id,
}) => {
  const [tags, setTags] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    setValue((value) => {
      return [...value, tags];
    });
    setTags("");
  };
  return (
    <form className="form-input tag-input" onSubmit={submithandler}>
      {label && (
        <span>
          <label htmlFor={id}>{label}</label>
          {value &&
            value.map((n, index) => {
              return (
                <span key={index} className="tags">
                  {n} <i className="fa-solid fa-xmark"></i>
                </span>
              );
            })}
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
    </form>
  );
};

export default TagInput;
