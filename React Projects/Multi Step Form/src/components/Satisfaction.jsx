import "../../styles/Components/Satisfaction.css";
import {
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";

const Satisfaction = ({ data, updateFieldHandler }) => {
  return (
    <div className="satisfaction-section">
      <div className="satisfaction-container">
        <div className="satisfaction-box">
          <div className="column-box">
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
              <span>Unsatisfied</span>
            </label>
          </div>
          <div className="column-box">
            <label className="radio-box">
              <input
                type="radio"
                name="review"
                value="neutral"
                checked={data.review === "neutral"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
              />
              <BsEmojiNeutralFill />
              <span>Neutral</span>
            </label>
          </div>
        </div>
        <div className="satisfaction-box">
          <div className="column-box">
            <label className="radio-box">
              <input
                type="radio"
                name="review"
                value="satisfied"
                checked={data.review === "satisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
              />
              <BsEmojiSmileFill />
              <span>Satisfied</span>
            </label>
          </div>
          <div className="column-box">
            <label className="radio-box">
              <input
                type="radio"
                name="review"
                value="delighted"
                checked={data.review === "delighted"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
              />
              <BsEmojiHeartEyesFill />
              <span>Delighted</span>
            </label>
          </div>
        </div>
        <div className="satisfaction-box"></div>
      </div>
      <div className="text-area-box">
        <label htmlFor="comment" className="comment">
          Comment:
        </label>
        <textarea
          name="comment"
          placeholder="Tell us about your experience with the product."
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
