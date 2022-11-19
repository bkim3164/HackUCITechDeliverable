import React from 'react';
import Logo from './petr.png'
import "./index.css"
import { Form } from './Form'
import MediaQuery from 'react-responsive'

const App = () => {

  return (
    <div className="app">
      <div className="leftContainer">
        <Form className="Hack UCI Application" />
      </div>
      <div className="rightContainer">
        <img id="petr" src={Logo} alt="Petr Logo" />
      </div>
    </div>

  );
}

export default App;
