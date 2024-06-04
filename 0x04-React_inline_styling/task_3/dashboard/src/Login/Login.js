import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  App_body: {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
    },
  },
  input: {
    margin: "10px",
    "@media (max-width: 900px)": {
      height: "30px",
      border: "0",
    },
  },
  button: {
    marginBottom: "10px",
    marginTop: "10px",
    width: "50px",
    "@media (max-width: 900px)": {
      width: "50px",
    },
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.App_body)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className={css(styles.input)}
              type="email"
              name="email"
              id="email"
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className={css(styles.input)}
              type="password"
              name="password"
              id="password"
            ></input>
          </div>
          <button className={css(styles.button)}>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
