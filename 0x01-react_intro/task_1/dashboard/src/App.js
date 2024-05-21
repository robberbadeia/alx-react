import Holberton_Logo from "./Holberton_Logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Holberton_Logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>
          {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
