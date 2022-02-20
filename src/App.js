import React from 'react';
import './App.css';
import Calculator from './Calculator';
import Checklist from './Checklist';
import SignIn from './SignIn'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/checklist'>
              <Checklist />
            </Route>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/'>
              <Calculator />
            </Route>
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
