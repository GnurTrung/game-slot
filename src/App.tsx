import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWebApp } from "./hooks";

function App() {
  const { WebApp } = useWebApp();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{WebApp?.initDataUnsafe?.user?.username}</code> and save to
          reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
