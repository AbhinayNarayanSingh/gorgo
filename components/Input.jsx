const Input = ({ type = "text", label, placeholder, value, setValue, id }) => {
  return (
    <div className="form-input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
