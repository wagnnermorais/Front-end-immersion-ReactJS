import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import MyComponent from "./components/MyComponent";
import ClickEvent from "./components/ClickEvent";
import RenderFunction from "./components/RenderFunction";

function App() {
  return (
    <div className="App">
      {/* Comentário em JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <ClickEvent />
      {RenderFunction(true)}
      {RenderFunction(false)}
    </div>
  );
}

export default App;
