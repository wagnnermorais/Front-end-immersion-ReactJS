import "../../styles/Home.css";
import Form from "../components/Form";
import Stepper from "../components/Stepper";
import Button from "../components/UI/Button";
import Satisfaction from "../components/Satisfaction";
import Send from "../components/Send";

// Hooks
import useComponents from "../hooks/useComponents";
import { useState } from "react";

// Data Component
const dataTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

const Home = () => {
  const [data, setData] = useState(dataTemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <Form data={data} updateFieldHandler={updateFieldHandler} />,
    <Satisfaction data={data} updateFieldHandler={updateFieldHandler} />,
    <Send data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep } =
    useComponents(formComponents);

  function sendForm() {
    return alert("Thank, u! <3");
  }

  return (
    <div className="home-section">
      <h1 className="home-main-title">Give us a feedback!</h1>
      <p className="home-subtitle">
        We are happy with your purchase! Use the form below to give us some
        feedback about the product.
      </p>
      <div className="container">
        <Stepper currentStep={currentStep} />
        <form
          className="main-form"
          onSubmit={(event) => changeStep(currentStep, event)}
        >
          <div className="ui-box">{currentComponent}</div>
          <div className="button-box">
            {!isFirstStep && (
              <Button
                text={"Back"}
                type={"button"}
                action={() => changeStep(currentStep - 1)}
              />
            )}
            {!isLastStep ? (
              <Button
                text={"Next"}
                type={"submit"}
                action={() => changeStep(currentStep + 1)}
              />
            ) : (
              <Button text={"Send"} type={"button"} action={() => sendForm()} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
