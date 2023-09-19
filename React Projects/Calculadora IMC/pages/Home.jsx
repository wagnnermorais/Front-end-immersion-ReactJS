import Form from "../components/Form";
import Table from "../components/Table";
import { data } from "../data/data";
import { useState } from "react";

const Home = () => {
  const calculate = (event, height, weight) => {
    event.preventDefault();

    if (!height || !weight) return;

    const imcResult = (weight / 10 / ((height / 100) * (height / 100))).toFixed(
      1
    );

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const reset = (event) => {
    event.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div>
      {!imc ? (
        <Form calculate={calculate} />
      ) : (
        <Table
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          reset={reset}
        />
      )}
    </div>
  );
};

export default Home;
