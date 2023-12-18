import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
