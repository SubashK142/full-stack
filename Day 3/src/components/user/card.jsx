// Card.js
import React from 'react';
import './user.css'; // Import your custom CSS file

const Card = ({Image,text,text2,text3}) => {
  return (
    <div className='cardbody'>
    <div className="standard-package-wrapper max-height-500">
      <div className="card-content">
      <img src={Image} class="pkg_img1" alt="image"/>
      <div style={{display:'flex',flexDirection:'row'}}>
      <div style={{width:'70%',height:'100px'}}>
        <p className="cardtext">{text}</p>
        <p style={{color: '#8d97bd',fontSize:'1rem'}}>{text2}</p>
         </div>

         <div style={{justifyContent:'end'}}>
         <p >Starting from</p>
         <p> {text3}</p>
         </div>
         </div>
      </div>
    </div>


    </div>
  );
};

export default Card;



