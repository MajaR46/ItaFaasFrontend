import { Link } from "react-router-dom";
import React from 'react';



const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tickets API</h1>
      <div className="links">
        <Link to="/tickets">Home</Link>
        <Link to="/addTicket" style={{ 
          color: 'white', 
          backgroundColor: '#AAFF00',
          borderRadius: '8px' 
        }}>New ticket</Link>

      </div>
    </nav>
  );
}
 
export default Navbar;