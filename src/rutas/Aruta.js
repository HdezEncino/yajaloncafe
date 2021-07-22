import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/barra/navbar";
import React from "react";
import Form from "../pages/Form";
import Formulario from "../pages/Formulario";



function Aruta() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/formul" exact component={Formulario} />
       
          
        </Switch>
      </Router>
    </div>
  );
}

export default Aruta;
