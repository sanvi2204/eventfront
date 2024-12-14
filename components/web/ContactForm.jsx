import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venueLocation: '',
    estimatedHeadcount: '',
    residence: '',
    budget: '',
    referralSource: '',
    eventInspiration: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['name', 'email', 'phone', 'eventType', 'eventDate', 
                          'venueLocation', 'estimatedHeadcount', 'residence', 'budget'];
    
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission here
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6 text-black">FOR INQUIRIES</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Information */}
          <div>
            <label className="block text-sm font-medium text-black">NAME *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">EMAIL *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">PHONE *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Event Details */}
          <div>
            <label className="block text-sm font-medium text-black">EVENT TYPE *</label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.eventType ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">EVENT DATE *</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.eventDate ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">VENUE LOCATION *</label>
            <input
              type="text"
              name="venueLocation"
              value={formData.venueLocation}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.venueLocation ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.venueLocation && <p className="text-red-500 text-xs mt-1">{errors.venueLocation}</p>}
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-medium text-black">ESTIMATED HEADCOUNT *</label>
            <input
              type="number"
              name="estimatedHeadcount"
              value={formData.estimatedHeadcount}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.estimatedHeadcount ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.estimatedHeadcount && <p className="text-red-500 text-xs mt-1">{errors.estimatedHeadcount}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">WHERE DO YOU RESIDE? *</label>
            <input
              type="text"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.residence ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.residence && <p className="text-red-500 text-xs mt-1">{errors.residence}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">HAVE A BUDGET IN MIND? *</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`mt-1 block w-full border-b ${errors.budget ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none px-2 py-1 text-black`}
            />
            {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black">HOW DID YOU HEAR ABOUT US? *</label>
          <input
            type="text"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className="mt-1 block w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black">
            PLEASE SHARE ANY INFORMATION OR INSPIRATION YOU HAVE FOR YOUR DREAM EVENT!
          </label>
          <textarea
            name="eventInspiration"
            value={formData.eventInspiration}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:outline-none px-3 py-2 text-black"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
             <Link to='/ThankYouPage'>Submit Inquiry</Link> 
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
