import "../../styles/Components/Form.css";

const Form = ({ data, updateFieldHandler }) => {
  return (
    <div className="form-container">
      <label>
        <span className="label">First Name:</span>
        <input
          className="input"
          type="text"
          placeholder="John"
          name="name"
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          value={data.name || ""}
        />
      </label>
      <label>
        <span className="label">E-mail:</span>
        <input
          className="input"
          type="text"
          placeholder="johndoe@email.com"
          name="email"
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          value={data.email || ""}
        />
      </label>
    </div>
  );
};

export default Form;
