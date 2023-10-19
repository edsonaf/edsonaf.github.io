import React from "react";
import "./Footer.scss";
import footerShape from "../assets/shape-bg.png";
// import footerShapeDark from "../assets/shape-bg2.png";
import { useState } from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={footerShape} alt="no" />
      </div>
    </div>
  );
}
