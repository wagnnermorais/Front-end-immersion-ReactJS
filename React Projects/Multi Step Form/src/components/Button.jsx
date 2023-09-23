import "../../styles/Components/Button.css";

const Button = ({ text, action }) => {
  const handleAction = (event) => {
    action(event);
  };

  return (
    <div>
      <button className="button" onClick={handleAction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
