import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './containers/MapContainer'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './containers/Home'
import Auth from './containers/Auth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/auth"} component={Auth} />
        <Route exact path={"/events"} component={MapContainer} />
      </Switch>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
