import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="components">
          <MyComponent />
        </section>
      </header>
    </div>
  );
}

export default App;
