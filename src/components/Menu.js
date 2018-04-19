import React from "react";
import Link from "gatsby-link";
// import { Button } from 'reactstrap';


const Menu = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ position: 'fixed', top: `0`, right: '0', maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`,textDecoration: 'none'}}>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <Menu to="/">Home</Menu>
        <Menu to="/about/">About</Menu>
        <Menu to="/unity/">Unity</Menu>
        <Menu to="/projects/">Projects</Menu>
        <Menu to="/contact/">Contact</Menu>
      </ul>
    </header>
  </div>