import React, { Component } from 'react';
import { Route, NavLink,Link, HashRouter } from "react-router-dom";
import Navbar from './../Navbar'
import API from "../../utils/API";
import { LinkContainer } from "react-router-bootstrap";

class Board extends Component {
  render() {
    return (
      <Navbar/>
    )
  }
}
export default Board;
