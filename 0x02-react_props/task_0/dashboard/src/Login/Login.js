import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
