const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  setValue,
  id,
  error,
  errorMsg,
}) => {
  return (
    <div className="form-input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "error" : ""}
      />
      {errorMsg && error && <p className="errorMsg">*{errorMsg}</p>}
    </div>
  );
};

export default Input;
