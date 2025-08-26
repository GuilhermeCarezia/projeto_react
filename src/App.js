import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { MinhaNavBar } from "./componentes/NavBar";
import { RouteApp } from "./route";


function App() {
  return (
    <div className="App">
     
      <RouteApp/>
    </div>
  );
}

export default App;
