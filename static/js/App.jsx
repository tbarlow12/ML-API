import React from "react";
import Home from "./components/home/home.jsx";
import Header from "./components/home/header.jsx";



export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Home name="" />
      </div>
    );
  }
}