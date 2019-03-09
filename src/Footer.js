import React from "react";

const style = {
  footer: {
    height: "80px",
    width: "100vw",
    background: "#333",
    color: "white",
    textAlign: "center",
    paddingTop: "20px"
  }
};

function Footer() {
  return <div style={style.footer}>Powered by &copy; Marvel API</div>;
}

export default Footer;
