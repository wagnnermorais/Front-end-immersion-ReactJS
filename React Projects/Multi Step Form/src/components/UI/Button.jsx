import "../../../styles/Components/Button.css";

const Button = ({ text, action, type }) => {
  const handleAction = (event) => {
    action(event);
  };

  return (
    <div>
      <button className="button" onClick={handleAction} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
