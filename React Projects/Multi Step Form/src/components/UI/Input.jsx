import "../../../styles/Components/Input.css";

const Input = ({ title, type, name, placeholder, state, value }) => {
  return (
    <div>
      <label>
        <span className="label">{title}</span>
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={(e) => state(e)}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
