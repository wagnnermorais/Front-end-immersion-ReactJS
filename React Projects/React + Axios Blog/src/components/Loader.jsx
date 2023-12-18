import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loading">
      <div className="loader"></div>
      <p className="loading-message">Carregando...</p>
    </div>
  );
};

export default Loader;
