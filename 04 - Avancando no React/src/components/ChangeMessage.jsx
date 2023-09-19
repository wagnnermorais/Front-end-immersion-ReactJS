// eslint-disable-next-line react/prop-types
const ChangeMessage = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Tudo bem?"];
  return (
    <div>
      {/* <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button> */}
      {messages.map((message, index) => (
        <button onClick={() => handleMessage(messages[index])} key={index}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default ChangeMessage;
