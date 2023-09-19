import style from "../styles/Input.module.css";
import InputMask from "react-input-mask";

const Input = ({ name, title, placeholder, state, value, mask }) => {
  return (
    <div>
      <div>
        <label>
          <span className={style.label}>{title}:</span>
          <InputMask
            mask={mask}
            className={style.input}
            type="text"
            name={name}
            placeholder={placeholder}
            // Verifica o state do input
            onChange={(e) => state(e)}
            value={value}
          />
        </label>
      </div>
    </div>
  );
};

export default Input;
