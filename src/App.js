import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './Components/Navigator';
import './App.css';
import Home from './Components/Home';
import Plants from './Components/Plants';
import Sysinfo from './Components/Sysinfo';


export default function App() {
  
  return (
    <Router>
      <div>
        <Navigator />
          <Switch>
          <Route path="/system" component={Sysinfo}/>
          <Route path="/plants" component={Plants}/>
          <Route exact path="/" component={Home}/>
          <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
    </Router>
    
  );
}