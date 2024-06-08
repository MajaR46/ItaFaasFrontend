// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/addtickets">Add tickets</Link></li>
        {/* Add more links for other pages */}
      </ul>
    </nav>
  );
};

export default Navigation;
