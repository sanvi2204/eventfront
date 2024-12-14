import React, { useState } from 'react';

const ReviewPage = () => {
  const [feedback, setFeedback] = useState({
    rating: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.rating && feedback.comments) {
      setSubmitted(true);
      // Add code to send feedback to backend here
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>We Value Your Feedback!</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Rating Selection */}
          <label style={styles.label}>
            Rate Your Experience:
            <select
              name="rating"
              value={feedback.rating}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select a rating</option>
              <option value="5">Excellent</option>
              <option value="4">Very Good</option>
              <option value="3">Good</option>
              <option value="2">Fair</option>
              <option value="1">Poor</option>
            </select>
          </label>

          {/* Comments Section */}
          <label style={styles.label}>
            Comments:
            <textarea
              name="comments"
              value={feedback.comments}
              onChange={handleChange}
              style={styles.textArea}
              rows="4"
              placeholder="Tell us more about your experience"
              required
            />
          </label>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton}>
            Submit Feedback
          </button>
        </form>
      ) : (
        <p style={styles.thankYouMessage}>
          Thank you for your feedback! We appreciate your input and will use it to improve our services.
        </p>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1rem',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '5px',
    marginBottom: '15px',
    width: '100%',
  },
  textArea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '5px',
    marginBottom: '15px',
    width: '100%',
  },
  submitButton: {
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
  thankYouMessage: {
    fontSize: '1.2rem',
    color: '#00796b',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default ReviewPage;
