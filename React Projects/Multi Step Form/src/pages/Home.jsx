import "../../styles/Home.css";
import Stepper from "../components/Stepper";
import Input from "../components/Input";
import Button from "../components/Button";
import Satisfaction from "../components/Satisfaction";

const Home = () => {
  return (
    <div>
      <h1>Deixe sua avaliação</h1>
      <p>
        Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar
        o produto
      </p>
      <div className="container">
        <Stepper />
        {/* <form>
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
          <div className="button-box">
            <Button text={"Voltar"} />
            <Button text={"Avançar"} />
          </div>
        </form> */}
        <Satisfaction />
      </div>
    </div>
  );
};

export default Home;
