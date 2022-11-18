import React from 'react';
import Logo from './petr.png'
import "./index.css"

function FormItem(props) {
  return <div className="item-form">
    <label for={props.name}> {props.placeholder} </label>
    <input
      className="form-field" id="{props.name}" type="{props.type}"
      placeholder="{props.placeholder}" name="{props.name}" required />
  </div>
}
function App() {
  return (
    <div className="app">
      <div className="leftContainer">
        <form className="form">
          <h1> HACK UCI Application</h1>
          <div className="item-form">
            <label for="name"> Name </label>
            <input
              className="form-field" id="name" type="text"
              placeholder="Name" name="name" required />
          </div>

          <div class="item-form">
            <label for="email">Email</label>
            <input
              className="form-field" id="email" type="email"
              placeholder="Email" name="email" required />
          </div>

          <div class="item-form">
            <label for="funFact">Fun Fact</label>
            <input
              className="form-field" id="funFact" type="funFact"
              placeholder="Fun Fact" name="funFact" required />
          </div>

          <button
            class="form-field" type="submit">Submit
          </button>

        </form>
      </div>
      <div className="rightContainer">
        <img id="petr" src={Logo} alt="Petr Logo" />
      </div>

    </div>
  );
}

export default App;
