import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Schedule.css';

const Schedule = () => {
  const navigate = useNavigate();

  const schedule = [
    { id: 1, time: '10:00 AM - 10:30 AM', available: true },
    { id: 2, time: '11:00 AM - 11:30 PM', available: false },
    { id: 3, time: '11:00 PM - 12:00 PM', available: true },
    { id: 4, time: '12:15 PM - 12:45 PM', available: true },
    { id: 5, time: '1:00 PM - 1:30 PM', available: false },
    { id: 6, time: '8:00 PM - 8:30 PM', available: true },
    { id: 7, time: '9:15 PM - 9:45 PM', available: true },
    { id: 8, time: '10:00 PM - 10:30 PM', available: false },
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelect = (slot) => {
    if (slot.available) {
      setSelectedSlot(slot.id);
    }
  };

  const handleBooking = (slot) => {
    navigate(`/BookingPage/`, { state: { slotTime: slot.time } });
  };

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Event Booking Schedule</h1>
      <div className="schedule-grid">
        {schedule.map((slot) => (
          <div
            key={slot.id}
            onClick={() => handleSlotSelect(slot)}
            className={`schedule-slot ${slot.available ? 'available' : 'booked'} ${
              selectedSlot === slot.id ? 'selected' : ''
            }`}
          >
            <span>{slot.time}</span>
            <span className="availability">
              {slot.available ? 'Available' : 'Booked'}
            </span>

            {slot.available && selectedSlot === slot.id && (
              <button
                className="book-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBooking(slot);
                }}
              >
                Book
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
