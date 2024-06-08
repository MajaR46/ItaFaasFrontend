import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Tickets from './components/Tickets';
import AuthRoute from './components/AuthRoute';
import './styles.css';
import TicketForm from './components/TicketForm';
import Navbar from './Navbar';
import Update from './components/UpdateTicket';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tickets"
            element={
              <AuthRoute>
                <Tickets />
              </AuthRoute>
            }
          />
           <Route
            path="/addTicket"
            element={
              <AuthRoute>
                <TicketForm />
              </AuthRoute>
            }
          />
           <Route
            path="/updateTicket/:id"
            element={
              <AuthRoute>
                <Update />
              </AuthRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
