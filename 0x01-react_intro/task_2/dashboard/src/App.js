import Holberton_Logo from "./Holberton_Logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Holberton_Logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <h2>Login to access the full dashboard :</h2>
        <div className="App-register_container">
          <div className="App-register_email">
            <label for="email">Email: </label>
            <input id="email" type="text"></input>
          </div>
          <div className="App-register_passsword">
            <label for="pass">Password: </label>
            <input id="pass" type="password"></input>
          </div>
          <button type="submit">OK</button>
        </div>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
