import "../../styles/Components/Satisfaction.css";
import {
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";

const Satisfaction = ({ data, updateFieldHandler }) => {
  return (
    <div className="satisfaction-container">
      <div className="satisfaction-test">
        <div className="satisfaction-box">
          <label className="radio-box">
            <input
              type="radio"
              name="review"
              value="unsatisfied"
              checked={data.review === "unsatisfied"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
              required
            />
            <BsEmojiFrownFill />
            <span>Insatisfeito</span>
          </label>
        </div>
        <div className="satisfaction-box">
          <label className="radio-box">
            <input
              type="radio"
              name="review"
              value="neutral"
              checked={data.review === "neutral"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsEmojiNeutralFill />
            <span>Poderia ser melhor</span>
          </label>
        </div>
        <div className="satisfaction-box">
          <label className="radio-box">
            <input
              type="radio"
              name="review"
              value="satisfied"
              checked={data.review === "satisfied"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsEmojiSmileFill />
            <span>Satisfeito</span>
          </label>
        </div>
        <div className="satisfaction-box">
          <label className="radio-box">
            <input
              type="radio"
              name="review"
              value="delighted"
              checked={data.review === "delighted"}
              onChange={(e) => updateFieldHandler("review", e.target.value)}
            />
            <BsEmojiHeartEyesFill />
            <span>Muito satisfeito</span>
          </label>
        </div>
      </div>
      <div className="text-area-box">
        <label htmlFor="comment" className="comment">
          Comentário:
        </label>
        <textarea
          name="comment"
          placeholder="Conte como foi sua experiência com o produto"
          rows="5"
          value={data.comment}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
          required
        ></textarea>
      </div>
    </div>
  );
};

export default Satisfaction;
