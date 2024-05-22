import Holberton_Logo from "./Holberton_Logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" role="banner">
        <img src={Holberton_Logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body" role="main">
        <h2>Login to access the full dashboard :</h2>
        <div className="App-register_container">
          <div className="App-register_email">
            <label htmlFor="email">Email: </label>
            <input id="email" type="text"></input>
          </div>
          <div className="App-register_passsword">
            <label htmlFor="pass">Password: </label>
            <input id="pass" type="password"></input>
          </div>
          <button type="submit">OK</button>
        </div>
      </main>
      <footer className="App-footer" role="contentinfo">
        <p>
          {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
