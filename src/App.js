import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
function App() {
  return (

    <HashRouter>
      <Navigation />
      {/* path means address of web pages */}
      {/* exact means The only thing what i render */}
      <Route path="/" exact={true } component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
