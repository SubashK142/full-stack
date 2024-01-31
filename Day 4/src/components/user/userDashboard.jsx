import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Navbar from './navbar';
import Slideshow from './Slider';
import Slideshow1 from './Slider1';

const UserDashboard = () => {
  return (
    <div>
    <Navbar/> 
    <div style={{ display: 'flex', flexDirection: 'column'}} >
    <div>
    <p className="teext1" style={{fontWeight:700,fontSize:30,marginLeft:'100px'}}>Boat House - OOTY
    </p>
    
    <p className="teext2" style={{fontWeight:700,fontSize:15,marginLeft:'100px'}}>Ooty

    -
    North Lake Road, Ooty, Tamil Nadu 643001</p>
    </div>

    <div style={{ width: '90%', display: 'flex', flexDirection: 'row',marginLeft:'60px',marginTop:'10px'}}>
    
    <div style={{ width: '100%', borderRadius: 20, overflow: 'hidden'}} >
        <Slideshow/>
    </div>

   <div style={{ width: '33%', display: 'flex', flexDirection: 'column',marginLeft:'40px'}}>
    
    <div  className="cardhome" style={{ width: '100%',marginLeft:'5%',height:'200px'}}>
 <img style={{ width: '100%',height:'200px',borderRadius:10}}  src="https://www.ttdconline.com/_next/boat-house/ooty/3.jpg" />
 
    </div>
    <div  className="cardhome" style={{ width: '100%',marginLeft:'5%',height:'200px',marginTop:'30px'}}>

    <img style={{ width: '100%',height:'100%',borderRadius:10}}  src="https://www.ttdconline.com/_next/boat-house/ooty/4.jpg" />
    </div>

    </div>

    </div>



</div>

<div  style={{width:'60%',display:'flex',flexDirection:'column',marginTop:'2%',marginLeft:'2%'}}> 
<p className='aboutcard'>ABOUT BOAT HOUSE</p>

<p style={{color: '#8d97bd',fontsize:' 1rem',marginLeft:'7%',fontSize:15}}>
Boating on this man-made lake is an elegant way to enjoy the serene view and rich biodiversity; taking a slow pedal boat ride or a rowboat will make the aesthetic experience extra addictive. The restaurants will give an opportunity to relish the delicacies of Nilgiris.
</p>
</div>

<div  style={{width:'90%',height:'92vh',display:'flex',flexDirection:'row',marginTop:'2%',marginLeft:'4%'}}>

<div className='cardhome' style={{ width: '105%', height: '74vh', borderRadius: 20 }}>
  <div style={{ width: '100%', borderRadius: 20 , overflow: 'hidden'}}>
    <Slideshow1 />
  </div>
</div>

<div style={{width:'35%',marginLeft:'2%'}}>
<div className='cardhome22' style={{width:'100%',height:'42vh',marginLeft:'3%',marginTop:'4%'}}>
 <p className="texthome">Why Kodaikannal Boat House</p>
 <p style={{fontWeight:'100'}}>*  Verified </p>
 <p className='teext2'>Reviews
 250+ Pictures and Reviews on the platform.</p>

 <p style={{fontWeight:'100'}}>*  Verified </p>
 <p className='teext2'>Reviews
 250+ Pictures and Reviews on the platform.</p>

</div>
<div className='cardhome22' style={{width:'100%',height:'30vh',marginLeft:'3%',marginTop:'5%'}}>
 <p className="texthome">Why Kodaikannal Boat House</p>

 <p style={{fontWeight:'100'}}>*  Verified </p>
 <p className='teext2'>Reviews
 250+ Pictures and Reviews on the platform.</p>



</div>
</div>
    </div>

    <div className='cardhome22' style={{width:'10%',display:'flex',flexDirection:'row'}}>
<p>Amenities</p>

    </div>
    </div>
  );
};

export default UserDashboard;
