import "../../styles/Components/Send.css";
import {
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";

const Send = ({ data }) => {
  const emojiData = {
    unsatisfied: <BsEmojiFrownFill />,
    neutral: <BsEmojiNeutralFill />,
    satisfied: <BsEmojiSmileFill />,
    delighted: <BsEmojiHeartEyesFill />,
  };
  return (
    <div className="send-container">
      <h2 className="send-title">Almost there...</h2>
      <div className="send-info">
        <p className="info">
          Your feedback is essencial to us. To make up for your time, you'll
          receive a 10% discount coupon for your next purchase.
        </p>
        <p className="info">
          To complete your review, click in the <strong>Send</strong> button
          below.
        </p>
      </div>
      <h3 className="send-subtitle">
        Here's your feedback. Check it out, {data.name}!
      </h3>
      <div className="review">
        <div className="review-box">
          <p className="product-review">Product Satisfaction:</p>
          <span>{emojiData[data.review]}</span>
        </div>
        <div className="review-box">
          <p className="product-review">Comment:</p>
        </div>
        <span>{data.comment}</span>
      </div>
    </div>
  );
};

export default Send;
