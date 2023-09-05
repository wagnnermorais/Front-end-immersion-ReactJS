const ClickEvent = () => {
  // Criando função para adicionar a eventos, uma prática mais indicada do que criar a função no evento em si.

  const handleClick = () => {
    console.log("Clicou!");
  };

  return (
    <div>
      <div className="button-box">
        <button onClick={() => console.log("Clicou!")}>Clique aqui!</button>
        <button onClick={handleClick}>Aqui também</button>
      </div>
    </div>
  );
};

export default ClickEvent;
