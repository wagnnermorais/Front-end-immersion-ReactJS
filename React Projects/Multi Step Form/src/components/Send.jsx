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
      <h2 className="send-title">Falta pouco...</h2>
      <div className="send-info">
        <p className="info">
          A sua opinião é muito importante, em breve você receberá um cupom de
          10% de desconto para a sua próxima compra.
        </p>
        <p className="info">
          Para concluir sua avalição, clique no botão de <strong>enviar</strong>
          abaixo.
        </p>
      </div>
      <h3 className="send-subtitle">
        Aqui está o resumo de sua avaliação, {data.name}:
      </h3>
      <div className="review">
        <div className="review-box">
          <p className="product-review">Satisfação com o produto:</p>
          <span>{emojiData[data.review]}</span>
        </div>
        <div className="review-box">
          <p className="product-review">Comentário:</p>
          <span>{data.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default Send;
