import "../styles/Table.css";
import Button from "./Button";

const Table = ({ data, imc, info, infoClass, reset }) => {
  return (
    <div className="container">
      <div className="results">
        <h1>
          Your BMI: <span className={infoClass}>{imc}</span>
        </h1>
      </div>
      <div className="results">
        <h2>
          Current Situation: <span className={infoClass}>{info}</span>
        </h2>
      </div>
      <h3 className="classification-title">Confira as classificações:</h3>
      <div className="imc-table">
        <div className="table-titles">
          <h3>BMI</h3>
          <h3>Classification</h3>
          <h3>Obesity</h3>
        </div>
        {data.map((item) => (
          <div className="imc-result-box" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <div className="button-box">
        <Button text={"Back"} action={reset} />
      </div>
    </div>
  );
};

export default Table;
