import "../../styles/Components/Stepper.css";
import { AiOutlineUser, AiOutlineStar, AiOutlineSend } from "react-icons/ai";

const Stepper = ({ currentStep }) => {
  return (
    <div className="stepper-container">
      <div className="stepper-box active">
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`stepper-box ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Review</p>
      </div>
      <div className={`stepper-box ${currentStep >= 2 ? "active" : ""}`}>
        <AiOutlineSend />
        <p>Submit</p>
      </div>
    </div>
  );
};

export default Stepper;
