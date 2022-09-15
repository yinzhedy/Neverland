import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
             <nav>
        <ul>
        <li><a href="./pages/homepage">Home</a></li>
          <li><a href="./pages/kingdom-schedule">Kingdom Schedule</a></li>
          <li><a href="./pages/kingdom-tracker">Kingdom Tracker</a></li>
          <li><a href="./pages/member-tracker">Member Tracker</a></li>
        </ul>
      </nav>
    )
};

export default Nav;