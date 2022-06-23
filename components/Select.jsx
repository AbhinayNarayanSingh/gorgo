const Select = ({ label, id, option, setValue }) => {
  return (
    <div className="Select">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} onChange={(e) => setValue(e.target.value)}>
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
