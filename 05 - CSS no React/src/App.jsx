import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  // Dynamic Inline Css.
  const n = 15;

  // Dynamic class.
  const dynamicTitle = true;

  return (
    <>
      {/* CSS Global */}
      <h1>CSS no React</h1>

      {/* CSS de componente */}
      <MyComponent />

      {/* Inline style */}
      <p
        style={{
          margin: "1rem 0",
          padding: "2.5rem",
          background: "#1b1b1b",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Estilo de CSS inline
      </p>

      {/* Dynamic inline style */}
      <h2 style={n > 10 ? { color: "green" } : { color: "red" }}>
        CSS Dinâmico
      </h2>

      {/* Dynamic Class */}
      <h2 className={dynamicTitle ? "dynamic-title" : "title"}>
        Título com classe dinâmica
      </h2>

      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
