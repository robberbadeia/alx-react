import { getFullYear, getFooterCopy } from "../utils";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <footer className="App-footer" role="contentinfo">
      <p>
        {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
};

export default Footer;
