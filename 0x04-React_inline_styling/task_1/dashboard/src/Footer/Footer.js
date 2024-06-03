import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  footer: {
    fontSize: "1rem",
    padding: "1.2rem",
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "3px solid #e0354b",
  },
});
function Footer() {
  return (
    <>
      <div className={css(styles.footer)}>
        Copyright {getFullYear()} - {getFooterCopy()}
      </div>
    </>
  );
}

export default Footer;
