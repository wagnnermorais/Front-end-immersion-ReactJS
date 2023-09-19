import style from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ text, action }) => {
  const handleAction = (event) => {
    action(event);
  };
  return (
    <div>
      <button className={style.button} onClick={handleAction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
