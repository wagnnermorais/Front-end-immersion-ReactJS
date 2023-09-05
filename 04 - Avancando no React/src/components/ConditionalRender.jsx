const ConditionalRender = () => {
  const x = true;
  const name = "Wagner";
  return (
    <div>
      <h3>Isso será exibido?</h3>
      {/* if */}
      {x && <p>Se x for true, sim!</p>}

      {/* else */}
      <h3>Render Ternário</h3>
      {name === "João" ? (
        <div>
          <p>Olá, João!</p>
        </div>
      ) : (
        <div>Nome não encontrado!</div>
      )}
    </div>
  );
};

export default ConditionalRender;
