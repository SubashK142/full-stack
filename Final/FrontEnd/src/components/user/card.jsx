// Card.js
import React from 'react';
import './user.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';

const Card = ({Image,text,text2,text3}) => {
  
 
  return (
    <div className='cardbody'>
    <div className="standard-package-wrapper max-height-500">
      <div className="card-content">
      <img src={Image} class="pkg_img1" alt="image"/>
      <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{marginLeft:'1%',width:'70%',height:'150px'}}>
        <p className="cardtext">{text}</p>
        <p style={{color: '#8d97bd',fontSize:'1rem'}}>{text2}</p>
         </div>

         <div style={{justifyContent:'end'}}>
         
         <p style={{color: '#8d97bd',marginTop:'10%',marginLeft:'18%',fontSize:'1rem'}}>Starting from</p>
         <p style={{fontSize:'2rem',marginLeft:'20%'}}> {text3}</p>

         <p className='explore'> <Link to='/book'>Explore</Link></p>
         </div>
         </div>
      </div>
    </div>


    </div>
  );
};

export default Card;



