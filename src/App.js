import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar> </Navbar>
        <div className="App-title">
          <h1>Mir-Allen Organic Foods</h1>
        </div>
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={About}></Route>
          </Switch>
        </div>
        <Footer> </Footer>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
