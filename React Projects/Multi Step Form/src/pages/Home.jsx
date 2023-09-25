import "../../styles/Home.css";
import Form from "../components/Form";
import Stepper from "../components/Stepper";
import Button from "../components/UI/Button";
import Satisfaction from "../components/Satisfaction";
import Send from "../components/Send";

// Hooks
import useComponents from "../hooks/useComponents";

const Home = () => {
  const formComponents = [<Form />, <Satisfaction />, <Send />];
  // prettier-ignore
  const { 
    currentStep, 
    currentComponent, 
    changeStep, 
    isFirstStep, 
    isLastStep 
  } = useComponents(formComponents);

  function sendForm() {
    return alert("Thank, u! <3");
  }
  return (
    <div>
      <h1>Deixe sua avaliação</h1>
      <p>
        Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar
        o produto
      </p>
      <div className="container">
        <Stepper currentStep={currentStep} />
        <form onSubmit={(event) => changeStep(currentStep, event)}>
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
