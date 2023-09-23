import "../../styles/Components/Stepper.css";

const Stepper = () => {
  return (
    <div className="stepper-container">
      <div className="stepper-box">
        <img src="/user.png" alt="" />
        <p>Identificação</p>
      </div>
      <div className="border"></div>
      <div className="stepper-box">
        <img src="/star.png" alt="" />
        <p>Avaliação</p>
      </div>
      <div className="border"></div>
      <div className="stepper-box">
        <img src="/send.png" alt="" />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Stepper;
