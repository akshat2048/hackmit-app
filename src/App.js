import React from 'react';
import './App.css';
import Calculator from './Calculator';
import Checklist from './Checklist';
import SignIn from './SignIn'
import ImageUpload from './ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageUpload></ImageUpload>
      </header>
    </div>
  );
}

export default App;
