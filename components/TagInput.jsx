import { useEffect, useState } from "react";

const TagInput = ({
  type = "text",
  label,
  placeholder,
  value,
  setValue,
  id,
  error,
}) => {
  const [tags, setTags] = useState("");
  const [internalError, setInternalError] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
    if (tags !== "") {
      setValue((value) => {
        return [...value, tags];
      });
      setTags("");
    } else {
      setInternalError(true);
    }
  };

  const deleteHandler = (e) => {
    console.log(e);
    setValue(value.filter((name) => name !== e));
  };

  useEffect(() => {
    setInternalError(false);
  }, [tags]);
  return (
    <form className="form-input tag-input" onSubmit={submithandler}>
      {label && (
        <span>
          <label htmlFor={id}>{label}</label>
          {value &&
            value.map((n, index) => {
              return (
                <span key={index} className="tags">
                  {n}{" "}
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => deleteHandler(n)}
                  ></i>
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
        className={error || internalError ? "error" : ""}
      />
    </form>
  );
};

export default TagInput;
