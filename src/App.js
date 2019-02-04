import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import ReactSVG from "react-svg";
import DevTools from "mobx-react-devtools";

import { observable } from "mobx";
import { observer } from "mobx-react";

import umbrella from "../src/assets/svg/Umbrella.svg";
import chat from "../src/assets/svg/Chat_Message.svg";
import email from "../src/assets/svg/Email.svg";
import heart from "../src/assets/svg/Heart.svg";
import planet from "../src/assets/svg/Planet.svg";
import search from "../src/assets/svg/Search.svg";
import settings from "../src/assets/svg/Settings.svg";
import pizza from "../src/assets/svg/Pizza.svg";

class App extends Component {
  constructor(props) {
    super(props);

    const state = observable({
      secondsElapsed: 0
    });
  }

  render() {
    var appState = observable({
      timer: 0
    });

    return (
      <div className="App">
        <Header />
        <DevTools />
        <div>Counte: {this.count}</div>
        <div className="css-grid-base">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    );
  }
}

export default App;
