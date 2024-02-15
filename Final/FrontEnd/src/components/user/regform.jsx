

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './formdetail.css';
import { useNavigate } from 'react-router-dom';

const Formdetail = () => {
  // Initialize the 'booking' state
  const navigate=useNavigate();
  const [booking, setBooking] = useState({
    id: '200',
    noOfPersons: '',
    fromDate: '',
    toDate: '',
    totalPrice: '',
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    const totalPrice = name === 'noOfPersons' ? parseInt(value, 10) * 2600 : booking.totalPrice;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
      totalPrice: totalPrice.toString(),

    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Use 'data' instead of 'response.data.data' if the response contains the data directly
      const response = await axios.post(
        'http://localhost:8181/api/v1/book/post',
        booking, // Send the 'booking' object as the request body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
     alert("Slot Booked successfully");
     navigate('/user');
      console.log('Booking response:', response.data);
      // Handle the booking response as needed
    } catch (error) {
      console.error('Error posting booking:', error);
    }
  };

  return (
    <div className="booking-form-container">
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="noOfPersons">Number of Persons:</label>
          <input
            type="number"
            id="noOfPersons"
            name="noOfPersons"
            value={booking.noOfPersons}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fromDate">From Date:</label>
          <input
            type="date"
            id="fromDate"
            name="fromDate"
            value={booking.fromDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="toDate">To Date:</label>
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={booking.toDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Total Price:</label>
          <label htmlFor="totalPrice">Total Price:</label>
  <input
    type="number"
    id="totalPrice"
    name="totalPrice"
    value={booking.noOfPersons ? booking.noOfPersons * 2600 : ''}
    onChange={handleChange}
    required
  />
        </div>
        <button type="submit" className="book-button">
          <FontAwesomeIcon icon={faShoppingCart} /> Book
        </button>
      </form>
    </div>
  );
};

export default Formdetail;
