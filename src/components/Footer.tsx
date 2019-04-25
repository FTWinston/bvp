import React from 'react'
import { Link } from 'gatsby';

const Footer = ({ includeHomeLink }) => (
  <footer className="wrapper style1 align-center">
    <div className="inner">
      {includeHomeLink
        ? <Link to="/">Return to the main page</Link>
        : undefined
      }

      {/*
      <ul className="icons">
        <li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
        <li><a href="#" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
      </ul>
      */}
      <p>&copy; BVP Church of Scotland. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </div>
  </footer>
)

export default Footer
