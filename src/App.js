import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <h2>enter your information</h2>
      <form>
        <input type="text" name="name" placeholder="input the name" />
        <select name="" id="">
          <option value="City">Choose the city</option>
          <option value="Kilis">Kilis</option>
          <option value="İstanbul">İstanbul</option>
          <option value="Edirne">Edirne</option>
        </select>
        <input type="date" name="date" />
        <input type="color" name="color" />
        <input
          type="textarea"
          cols="20"
          rows="5"
          name="adress"
          placeholder="please adress"
        />
        <button>SEND</button>
      </form>
    </div>
  );
}

export default App;
