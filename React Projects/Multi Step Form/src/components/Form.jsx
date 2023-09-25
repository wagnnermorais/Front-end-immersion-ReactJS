import Input from "./UI/Input";

const Form = () => {
  return (
    <div>
      <Input
        title={"Nome:"}
        type={"text"}
        name={"name"}
        placeholder={"Digite o seu nome"}
        state={"state"}
      />
      <Input
        title={"Email:"}
        type={"email"}
        name={"email"}
        placeholder={"Digite o seu e-mail"}
        state={"state"}
      />
    </div>
  );
};

export default Form;
