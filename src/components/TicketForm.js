import React, { useState } from 'react';
import api from '../api/api';

const TicketForm = ({ fetchTickets, }) => {
  const [event, setEvent] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', { event, location, date });
      setEvent('');
      setLocation('');
      setDate('');
      window.location.href = '/tickets';
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  return (
    <div className='create'>
              <h2>Create Ticket</h2>

    <form onSubmit={handleSubmit}>
      <label>Event name: </label>
      <input
        type="text"
        required
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
            <label>Event location: </label>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
            <label>Event date: </label>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
    </div>
  );
};

export default TicketForm;
