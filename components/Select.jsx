const Select = ({ label, id, option, setValue, error }) => {
  return (
    <div className="Select">
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        onChange={(e) => setValue(e.target.value)}
        className={error ? "error" : ""}
      >
        <option value={""}>---------</option>;
        {option &&
          option.map((n, index) => {
            return (
              <option value={n} key={index}>
                {n}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Select;
