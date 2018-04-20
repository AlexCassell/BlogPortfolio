import React from "react";
import Link from "gatsby-link";

import homeIcon from './images/houseIcon.png'
import alexIcon from './images/alexIcon.png'
import robotIcon from './images/robotIcon.png'
import webDevIcon from './images/webDevIcon.png'
import contactIcon from './images/contactsIcon.png'
import videoGameIcon  from './images/videoGameIcon.png'

import { rhythm } from '../utils/typography'

const Menu = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ position: 'fixed', top: `0`, right: '0', maxWidth: 650, padding: `1.25rem 1rem`}}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`,textDecoration: 'none'}}>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, textDecoration: 'none'}}>
        <Menu to="/" style={{textDecoration: 'none'}}>
        <img
          src={homeIcon}
          alt={`Home`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        </Menu>
        <Menu to="/about/">
        <img
          src={alexIcon}
          alt={`About Me`}
          style={{
            textDecoration: 'none',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        </Menu>
        <Menu to="/unity/">
        <img
          src={videoGameIcon}
          alt={`Video Game`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        </Menu>
        <Menu to="/robotics/">
        <img
          src={robotIcon}
          alt={`Robotics`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        </Menu>
        <Menu to="/web-development/">
        <img
          src={webDevIcon}
          alt={`Web Development`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        </Menu>
        <Menu to="/contact/">
        <img
          src={contactIcon}
          alt={`Contact`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        </Menu>
      </ul>
    </header>
  </div> 