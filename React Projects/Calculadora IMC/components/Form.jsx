import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import style from "../styles/Form.module.css";

// eslint-disable-next-line react/prop-types
const Form = ({ calculate }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (event) => {
    event.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleValidateHeight = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleValidateWeight = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Calculadora de IMC</h1>
      <form>
        <Input
          name={"height"}
          title={"Height"}
          placeholder={"1.75"}
          state={handleValidateHeight}
          value={height}
        />
        <Input
          name={"weight"}
          title={"Weight"}
          placeholder={"60.5"}
          state={handleValidateWeight}
          value={weight}
        />
        <div className={style.buttonBox}>
          <Button
            text={"Calculate"}
            action={(e) => calculate(e, height, weight)}
          />
          <Button text={"Clear"} action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default Form;
