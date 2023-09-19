import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import style from "../styles/Form.module.css";

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
      <h1 className={style.title}>BMI Calculator</h1>
      <form>
        <Input
          name={"height"}
          title={"Height"}
          placeholder={"1.75m"}
          state={handleValidateHeight}
          value={height}
          mask={"9.99"}
        />
        <Input
          name={"weight"}
          title={"Weight"}
          placeholder={"60.5kg"}
          state={handleValidateWeight}
          value={weight}
          mask={"99.9"}
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
