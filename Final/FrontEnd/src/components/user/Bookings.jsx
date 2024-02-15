
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Bookings.css'; // Import the CSS file
import Navbar from './navbar';
import axios from "axios";

const ViewBooking = () => {
    const [bookings, setBookings] = useState([]);
    let token = localStorage.getItem('token');
    
    // Declare the fetchBookings function before using it in useEffect
    const fetchBookings = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/api/v1/book/details`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });
            
            setBookings(response.data.data);
           
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    useEffect(() => {
        // Fetch bookings data from backend API
        fetchBookings();
    }, []);

    return (
            <div>
                <Navbar />
                <div className="bookings-container" style={{ width: '120%' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Number of Persons</th>
                                <th>From Date</th>
                                <th>To Date</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(bookings) && bookings.length > 0 ? (
                                bookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.id}</td>
                                        <td>{booking.noOfPersons}</td>
                                        <td>{booking.fromDate}</td>
                                        <td>{booking.toDate}</td>
                                        <td>{booking.totalPrice}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No bookings available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
    

export default ViewBooking;
  
