import "../../styles/Components/Satisfaction.css";
import Input from "./Input";
import {
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";

const Satisfaction = () => {
  return (
    <div>
      <form>
        <div className="satisfaction-box">
          <label>
            <input type="radio" name="" id="" />
            <BsEmojiFrown />
            <span>Insatisfeito</span>
          </label>
        </div>
        <div className="satisfaction-box">
          <label>
            <input type="radio" name="" id="" />
            <BsEmojiNeutral />
            <span>Poderia ser melhor</span>
          </label>
        </div>
        <div className="satisfaction-box">
          <label>
            <input type="radio" name="" id="" />
            <BsEmojiSmile />
            <span>Satisfeito</span>
          </label>
        </div>
        <div className="satisfaction-box">
          <label>
            <input type="radio" name="" id="" />
            <BsEmojiHeartEyes />
            <span>Muito satisfeito</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Satisfaction;
