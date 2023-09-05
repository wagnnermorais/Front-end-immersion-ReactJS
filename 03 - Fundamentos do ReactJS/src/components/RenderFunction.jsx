const RenderFunction = (x) => {
  if (x) {
    return <p>Renderizando o X.</p>;
  } else {
    return <p>Renderizando sem o X.</p>;
  }
};

export default RenderFunction;
