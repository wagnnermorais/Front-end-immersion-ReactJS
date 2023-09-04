function TemplateExpression() {
  const name = "Wagner";
  const data = {
    age: 31,
    job: "Front-end developer",
  };
  return (
    <div>
      <h3>
        Bem vindo, {name}! Sua idade é {data.age} anos e sua profissão é:{" "}
        {data.job}, confirma?
      </h3>
      {/* <p>A soma com template expresion é: {2 + 2}</p> */}
    </div>
  );
}

export default TemplateExpression;
