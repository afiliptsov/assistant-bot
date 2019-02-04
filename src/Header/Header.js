import React from "react";
import ReactSVG from "react-svg";
import brain from "../assets/svg/Brain.svg";

export default function Header() {
  return (
    <header className="App-header">
      <ReactSVG src={brain} style={{ marginRight: "2rem" }} />
      <nav>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
