import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    slot: '',
  });
  const [message, setMessage] = useState('');
  const [showContactPrompt, setShowContactPrompt] = useState(false);

  const availableSlots = [
    '10:00 AM - 10:30 AM',
    '11:00 AM - 11:30 AM',
    '12:15 PM - 12:45 PM',
    '1:00 PM - 1:30 PM',
    '8:00 PM - 8:30 PM',
    '9:15 PM - 9:45 PM',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.slot) {
      setMessage(`Thank you, ${formData.name}. Your booking for ${formData.slot} is confirmed!`);
      setShowContactPrompt(true);
      setFormData({ name: '', email: '', phone: '', slot: '' });
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  const handleCancel = () => {
    navigate('/ReviewPage');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Book Your Event</h1>
      
      {!showContactPrompt ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>

          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>

          <label style={styles.label}>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>

          <label style={styles.label}>
            Select Slot:
            <select
              name="slot"
              value={formData.slot}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Choose a slot</option>
              {availableSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" style={styles.bookButton}>
            Book Event
          </button>
        </form>
      ) : (
        <div style={styles.contactPrompt}>
          <p>{message}</p>
          <p>Contact us for more details.</p>
          <button onClick={handleContact} style={styles.contactButton}>
            Contact
          </button>
        </div>
      )}

      {message && !showContactPrompt && <p style={styles.message}>{message}</p>}

      {!showContactPrompt && (
        <button onClick={handleCancel} style={styles.cancelButton}>
          Cancel Booking
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: 'black',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: 'black',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    color: 'black',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: 'black',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '5px',
    marginBottom: '15px',
    width: '100%',
    color: 'black',
  },
  bookButton: {
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#00796b',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  cancelButton: {
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#d9534f',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  message: {
    marginTop: '20px',
    fontSize: '1rem',
    color: 'black',
  },
  contactPrompt: {
    textAlign: 'center',
    fontSize: '1rem',
    color: 'black',
  },
  contactButton: {
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#00796b',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
  },
};

export default BookingPage;
