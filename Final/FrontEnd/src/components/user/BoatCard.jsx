

// import React, { useState, useEffect } from 'react';
// import './BoatCard.css';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Modal } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';
// import axios from "axios";

// const BoatCard = ({ image, name, price }) => {
//   const [isHovered, setHovered] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [boatData, setBoatData] = useState({});
//   const navigate = useNavigate();

//   let token = localStorage.getItem('token');
//   console.log(token);

//   const fetchBookings = async () => {
//       try {
//           const response = await axios.get(`http://localhost:8181/api/v1/boat/details`, {
//               headers: {
//                   "Authorization": `Bearer ${localStorage.getItem('token')}`,
//                   'Content-Type': 'application/json'
//               },
//           });
          
//           setBoatData(response.data.data);
//          console.log(response.data.data[0])
//       } catch (error) {
//           console.error('Error fetching bookings:', error);
//       }
//   };

//   useEffect(() => {
//       fetchBookings();
//   }, []);



//   const handleClose = () => {
//     setOpen(false);
//     navigate('/pay');
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div
//       className={`card ${isHovered ? 'hovered' : ''}`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img className="boatcardcss" src={image} alt={name} />
//       {isHovered && (
//         <button onClick={handleOpen}>{price}</button>
//       )}

//       <Modal open={open} onClose={handleClose} size="xs">
//         <Modal.Header>
//           <Modal.Title>Boat Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Boat Name: {boatData.boatname}</p>
//           <p>Boat Image: {boatData.boatimage}</p>
//           <p>Boat Availability: {boatData.boatavailability}</p>
//           <p>Boat Location: {boatData.boatlocation}</p>
//           <p>Boat Price: {boatData.price}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose} appearance="primary">
//             Confirm
//           </Button>
//           <Button onClick={() => setOpen(false)} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default BoatCard;


import React, { useState, useEffect } from 'react';
import './BoatCard.css';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import axios from "axios";

const BoatCard = ({ image, name, price }) => {
  const [isHovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [boatData, setBoatData] = useState({});
  const navigate = useNavigate();

  const fetchBoatDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8181/api/v1/boat/details", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      });

      if (response.data.data.length > 0) {
        setBoatData(response.data.data[0]);
      } else {
        console.error('No boat details found');
      }
    } catch (error) {
      console.error('Error fetching boat details:', error);
    }
  };

  useEffect(() => {
    fetchBoatDetails();
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate('/pay');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="boatcardcss" src={image} alt={name} />
      {isHovered && (
        <button onClick={handleOpen}>{price}</button>
      )}

      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Boat Details</Modal.Title>
          <img  style={{width:'100%',marginTop:'5%',borderRadius:10}} src="https://media.istockphoto.com/id/497685805/photo/houseboat.jpg?s=612x612&w=0&k=20&c=G9Bt3es6DG7rGBJXRiB6A_NdPAt99-mubL2q0hCtFs4="/>
        </Modal.Header>
        <Modal.Body style={{marginTop:'20px',color:'black',fontWeight:'bolder',fontSize:20}}>
          <p>Boat Name: {boatData.boatname}</p>
          <p>Boat Availability: {boatData.boatavailable}</p>
          <p>Boat Location: {boatData.boatlocation}</p>
          <p>Boat Price: {boatData.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={() => setOpen(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BoatCard;
