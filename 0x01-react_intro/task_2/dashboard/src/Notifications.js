import close_icon from "./close_icon.png";
import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

const Notifications = () => {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="App-Notifications">
      <button
        style={{
          color: "#3a3a3a",
          background: "none",
          border: "none",
          fontSize: "15px",
          position: "absolute",
          right: "2px",
          top: "2px",
          cursor: "pointer",
          marginRight: "5px",
          marginTop: "5px",
        }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}
      >
        <img src={close_icon} alt="close" width="15px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul
        style={{
          listStyle: "none",
          color: "red",
          marginTop: "10px",
        }}
      >
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notifications;
