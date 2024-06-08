import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom'; 


const Tickets = () => {
  const [tickets, setTickets] = useState([]); // Initialize as an empty arrayž
  const [loading, setLoading] = useState(true); // Loading state

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await api.get('/');
        console.log('API Response:', response.data); // Log the response data
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setError('Failed to fetch tickets');
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };
  
    fetchTickets();
  }, []);
  
  const handleDelete = async (ticketId) => {
    try {
      await api.delete(`/${ticketId}`);
      setTickets(tickets.filter(ticket => ticket.id !== ticketId));
    } catch (err) {
      console.error('Error deleting ticket:', err);
      setError(`Failed to delete ticket: ${err.message}`);
    }
  };
  

  return (
    <div className='tickets'>
     <h2> List of all tickets</h2>
        {tickets.map(ticket => (
            <div className="user-preview" key={ticket.id}>
                
                <p>Event Name: {ticket.event}</p>
                <p>Event Location: {ticket.location}</p>
                <p>Event Date: {ticket.date}</p>
                <button className="deleteButton" onClick={() => handleDelete(ticket.id)}>Delete</button>
                <Link to={`/updateTicket/${ticket.id}`}>
  <button className='updateButton'>Update</button>
</Link>               </div>
        ))}
    </div>
);
};

export default Tickets;
