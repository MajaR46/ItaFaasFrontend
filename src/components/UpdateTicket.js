import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

const Update = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await api.get(`/${id}`);
        const data = response.data;
        setEventName(data.event);
        setEventDate(data.date);
        setEventLocation(data.location);
      } catch (err) {
        console.error('Error fetching ticket:', err);
        setError(`Failed to fetch ticket: ${err.message}`);
      }
    };

    fetchTicket();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticket = { event: eventName, date: eventDate, location: eventLocation };

    try {
      await api.put(`/${id}`, ticket);
      console.log('Ticket updated');
      navigate('/tickets');
    } catch (err) {
      console.error('Error updating ticket:', err);
      setError(`Failed to update ticket: ${err.message}`);
    }
  };

  return (
    <div className="create">
      <h2>Update Ticket</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Event name:</label>
        <input type="text" required value={eventName} onChange={(e) => setEventName(e.target.value)} />
        <label>Event location:</label>
        <input type="text" required value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
        <label>Event date:</label>
        <input type="date" required value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default Update;
