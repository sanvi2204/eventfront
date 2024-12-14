import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const Consult = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to schedule page after form submission
    navigate('/schedule');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header Section */}
      <div className="border-b pb-4 mb-6">
        <button className="text-blue-500 mb-4 flex items-center gap-2">
          <ArrowLeft size={24} />
        </button>

        <div className="text-black">
          <h1 className="text-2xl font-bold">Consultation</h1>
          <div className="flex items-center gap-2 text-black">
            <Clock size={20} />
            <span>30 min</span>
          </div>
          <div className="flex items-center gap-2 text-black mt-2">
            <Calendar size={20} />
            <span>8:00pm - 8:30pm</span>
          </div>
          <div className="text-black mt-2">
            India Standard Time
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div>
        <h2 className="text-black">Enter Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-black">
              Name <span className="text-black">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-black">
              Email <span className="text-blue-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
            />
          </div>

          {/* Add Guests Button */}
          <button type="button" className="text-blue-500 font-medium">
            Add Guests
          </button>

          {/* Event Date */}
          <div>
            <label className="block text-black">
              Event Date <span className="text-blue-500">*</span>
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-black">
              Event Type <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
            />
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-black">
              Please share anything that will help prepare for our meeting. <span className="text-blue-500">*</span>
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
            />
          </div>

          {/* Terms */}
          <div className="text-sm text-black">
            By proceeding, you confirm that you have read and agree to{' '}
            <a href="#" className="text-blue-500">Calendly's Terms of Use</a> and{' '}
            <a href="#" className="text-blue-500">Privacy Notice</a>.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Schedule Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consult;
