import React from 'react';
import './App.css';
import Calculator from './Calculator';
import Checklist from './Checklist';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Navbar from './Navbar';
import UploadAndDisplayImage from './ImageUpload';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/checklist">
          <Checklist />
        </Route>
        <Route path ="/ImageUpload">
          <UploadAndDisplayImage />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
