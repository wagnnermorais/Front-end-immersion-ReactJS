import Form from "../components/Form";
import Table from "../components/Table";
import { data } from "../data/data";
import { useState } from "react";

const Home = () => {
  const calculate = (event, height, weight) => {
    event.preventDefault();

    if (!height || !weight) return;

    const heightValue = +height.replace(",", ".");
    const weightValue = +weight.replace(",", ".");

    const imc = weightValue / (heightValue * heightValue).toFixed(1);

    setImc(imc);
    console.log(imc);
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return <div>{!imc ? <Form calculate={calculate} /> : <Table />}</div>;
};

export default Home;
