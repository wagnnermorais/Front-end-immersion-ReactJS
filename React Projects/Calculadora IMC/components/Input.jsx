import style from "../styles/Input.module.css";

// eslint-disable-next-line react/prop-types
const Input = ({ name, title, placeholder, state, value }) => {
  return (
    <div>
      <div>
        <label>
          <span className={style.label}>{title}:</span>
          <input
            className={style.input}
            type="text"
            name={name}
            placeholder={placeholder}
            // Verifica o state do input
            onChange={(e) => state(e)}
            value={value}
            maxLength={4}
          />
        </label>
      </div>
    </div>
  );
};

export default Input;
