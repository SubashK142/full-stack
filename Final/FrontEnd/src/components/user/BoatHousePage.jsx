// BoatHousePage.js
import React from 'react';
// import BoatCard from './BoatCard';  // Import BoatCard component
import './BoatHousePage.css';  // Import CSS for styling

import BoatCard from './BoatCard';
import Navbar from './navbar';

const boatsData = [
  // Sample data for 10 boats
  { id: 1, name: 'Boat 1', type: 'Sailboat', capacity: 4, image: 'boat1.jpg' },
  { id: 2, name: 'Boat 2', type: 'Speedboat', capacity: 6, image: 'boat2.jpg' },
  // Add more boats as needed
];

const BoatHousePage = () => {
  return (
    <>
    <Navbar/>
    <div className="boat-house-page" style={{marginLeft:'7%',width:'90%',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
      
     <div style={{display:'flex',flexDirection:'row'}}>
     <BoatCard image="https://media.istockphoto.com/id/1219185069/photo/traditional-house-boats-in-the-backwaters-in-alleppey-kerala.jpg?s=612x612&w=0&k=20&c=44K0Td06Z9FgYQjSS4NKkBvsvNRkQsm-rIJUTlGbWLQ=" name="sf" price="Starts at Rs.10999"/>
     <BoatCard image="https://media.istockphoto.com/id/497685805/photo/houseboat.jpg?s=612x612&w=0&k=20&c=G9Bt3es6DG7rGBJXRiB6A_NdPAt99-mubL2q0hCtFs4=" name="sf" price="Starts at Rs.9999"/>
     <BoatCard image="https://media.istockphoto.com/id/1210318427/photo/line-up-of-ferries-waiting-to-take-tourists-to-elephata-caves-and-islands-near-the-gateway-of.jpg?s=612x612&w=0&k=20&c=G66qeZq-l4k-OV4BId2Y_j_eSqF7vv5e7AgbQO9GBbU="  name="sf" price="Starts at RS.8999"/>
     </div>
     <div style={{display:'flex',flexDirection:'row',marginTop:'3%'}}>
     <BoatCard image="https://media.istockphoto.com/id/680220948/photo/laos-luang-prabang-mekong-river.jpg?s=612x612&w=0&k=20&c=-10kD5y2ruBktVMTxETrS86963qnPU4vnpbwougqtn4=" name="sf" price="Starts at Rs.5000"/>
     <BoatCard image="https://media.istockphoto.com/id/1219185187/photo/traditional-house-boats-in-the-backwaters-in-alleppey-kerala.jpg?s=612x612&w=0&k=20&c=4kg9jB6FP4C8USXxxLWy4tcPnbaNF5zz_HPh--Z_K1c=" name="sf" price="Starts at Rs.6999"/>
     <BoatCard image="https://media.istockphoto.com/id/1172808900/photo/houseboat-on-kerala-backwaters-in-alleppey-india.jpg?s=612x612&w=0&k=20&c=M-VoZeEte3sA5I0JbqLrXOcfjcvh51rfcUAla6Zf2NY=" name="sf" price="Starts at Rs.51000"/>
     </div>
     <div style={{display:'flex',flexDirection:'row',marginTop:'3%'}}>
     <BoatCard image="https://media.istockphoto.com/id/481978972/photo/irrawaddy-river-myanmar.jpg?s=612x612&w=0&k=20&c=7IQFeJFGdpsR450-gYRQ6a-em_5xN2hLZqIotq_WwPw=" name="sf" price="Starts at Rs.5000"/>
     <BoatCard image="https://media.istockphoto.com/id/1256243651/photo/the-venetian-lagoon.jpg?s=612x612&w=0&k=20&c=oYo2qRjMbuKx_rwHG-2r3onCkK-RbLRwnrEQrT1APz0=" name="sf" price="Starts at Rs.6000"/>
     <BoatCard image="https://media.istockphoto.com/id/497685805/photo/houseboat.jpg?s=612x612&w=0&k=20&c=G9Bt3es6DG7rGBJXRiB6A_NdPAt99-mubL2q0hCtFs4=" name="sf" price="Starts at Rs.6000"/>
     </div>

  
     
    </div>
    </>
  );
};

export default BoatHousePage;
