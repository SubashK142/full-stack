import React, { useState } from 'react';
import './BoatCard.css'; // Import a separate CSS file for styling
import { useNavigate } from 'react-router-dom';

import { Form, Button, Input, Modal, SelectPicker } from 'rsuite'; // Added missing components
import 'rsuite/dist/rsuite.min.css';
 // Added missing styles




const BoatCard = ({ image, name, price }) => {
  const [isHovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });

  const navigate = useNavigate();
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
          <Modal.Title>Register to Continue..</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginTop:'-10px'}}>
          <Form fluid onChange={setFormValue} formValue={formValue}>
            <Form.Group controlId="name-9">
              <Form.ControlLabel>Username</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email-9">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password-9">
              <Form.ControlLabel>Password</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        
          <Button onClick={handleClose}  appearance="primary">
            Confirm
          </Button>
          
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BoatCard;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button, Modal } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';

// const BoatCard = ({ image, name, price }) => {
//   const [isHovered, setHovered] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [formValue, setFormValue] = useState({
//     name: '',
//     email: '',
//     password: '',
//     textarea: ''
//   });

//   const navigate = useNavigate(); // Move useNavigate outside the event handler

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/pay'); // Use useNavigate directly inside the component body
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
//           <Modal.Title>Register to Continue..</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ marginTop: '-10px' }}>
//           <Form fluid onChange={setFormValue} formValue={formValue}>
//             <Form.Group controlId="name-9">
//               <Form.ControlLabel>Username</Form.ControlLabel>
//               <Form.Control name="name" />
//               <Form.HelpText>Required</Form.HelpText>
//             </Form.Group>
//             <Form.Group controlId="email-9">
//               <Form.ControlLabel>Email</Form.ControlLabel>
//               <Form.Control name="email" type="email" />
//               <Form.HelpText>Required</Form.HelpText>
//             </Form.Group>
//             <Form.Group controlId="password-9">
//               <Form.ControlLabel>Password</Form.ControlLabel>
//               <Form.Control name="password" type="password" autoComplete="off" />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose} appearance="primary">
//             Confirm
//           </Button>

//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default BoatCard;
