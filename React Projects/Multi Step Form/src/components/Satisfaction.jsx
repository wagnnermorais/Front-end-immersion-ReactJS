import "../../styles/Components/Satisfaction.css";
import Input from "./UI/Input";
import {
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";

const Satisfaction = () => {
  return (
    <div className="satisfaction-container">
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
        <div className="text-area-box">
          <label>
            <span>Comentário:</span>
          </label>
        </div>
        <textarea
          name="txtArea"
          id="txtArea"
          placeholder="Conte como foi sua experiência com o produto"
          rows="5"
        ></textarea>
      </form>
    </div>
  );
};

export default Satisfaction;
