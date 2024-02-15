
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import '../user/Bookings.css'; // Import the CSS file
import Navbar from '../user/navbar';
import axios from "axios";
import CustomSideNav from './sidenav';
import NavbarAD from './navbarad';

const UserGroup = () => {
    const [bookings, setBookings] = useState([]);
    let token = localStorage.getItem('token');
    console.log(token);
    // Declare the fetchBookings function before using it in useEffect
    const fetchBookings = async () => {
        try {
            const response = await axios.get(`http://localhost:8181/api/v1/user/list`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });
            
            setBookings(response.data.data);
           console.log(response.data.data[0])
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
            <NavbarAD/>
           <CustomSideNav/>
                <div className="bookings-container" style={{ width: '100%',marginTop:'-400px' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>USER ID</th>
                                <th>NAME</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(bookings) && bookings.length > 0 ? (
                                bookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.id}</td>
                                        <td>{booking.name}</td>
                                        <td>{booking.email}</td>
                                        <td>{booking.password}</td>
                                        <td>{booking.role}</td>
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
    

export default UserGroup;
  
