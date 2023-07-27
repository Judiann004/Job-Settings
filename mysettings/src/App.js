import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Job Setting</h1>

        <div className="sub-container">
          <h3>General Settings</h3>
          <FontAwesomeIcon icon={faCalendar} /> 
        </div>
      </div>
    </div>
  );
}

export default App;
