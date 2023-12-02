import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import "./index.css";
import axios from "axios";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import FormImageUpload from "./components/ImageTransaction/FormImageUpload";

// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
     <Router>
      <Navbar/>
      <Switch>
      
      <Route exact path="/" component={Home}>
      </Route>

      <Route exact path="/service" component={Service}>
      </Route>

      <Route exact path="/about" component={About}>
      </Route>

      <Route exact path="/try-it-out"> 
      <FormImageUpload/>
      </Route>

      </Switch>
      {/* <Footer/> */}
    </Router>
   );
};

export default App;
