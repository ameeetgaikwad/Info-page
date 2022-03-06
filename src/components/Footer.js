import React from "react";
import twitter from "../imgs/Twitter_Icon.png";
import github from "../imgs/GitHub_Icon.png";
import instagram from "../imgs/Instagram_Icon.png";
import facebook from "../imgs/Facebook_Icon.png";

export default function Footer() {
  return (
    <footer className="icons-section">
      <img src={twitter} className="icon" />
      <img src={facebook} className="icon" />
      <img src={instagram} className="icon" />
      <img src={github} className="icon" />
    </footer>
  );
}
