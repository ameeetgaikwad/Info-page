import React from "react";
import image from "../imgs/img.png";

export default function Header() {
  return (
    <header>
      <img src={image} className="img" width="317px" />
    </header>
  );
}
