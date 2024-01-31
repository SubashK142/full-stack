import React from 'react'
import Navbar from './navbar'
import UserCard from './card'

export default function Packages() {
  return (
    
    <>
<Navbar/>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'flex' , flexDirection:'row',width:'85%',}}>
    <UserCard Image="https://www.ttdconline.com/_next/package/ooty-tour/2.jpg" text="3- Days Mudaliarkuppam - Auroville - Pitchavaram Tour" 
    text2="Pichavaram consists of a number of islands interspersing a vast expanse of water covered with mangrove forest. It is one of the largest mangrove forests in India ...."
    text3=" 13,600"/>
    <UserCard Image="https://www.ttdconline.com/_next/package/pondicherry-tour/2.jpg" text="2- Days Kanchipuram - Thiruvannamalai - Vellore Tour (2 Times Meal)"
    text2="Divinity is the first feel you experience at Thiruvannamalai. Throughout the course of your stay, you will find yourself delving deep in to the spiritual soul of this destination...."
    text3=" 9,600"/>
    
    </div>


    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'flex' , flexDirection:'row',width:'85%',}}>
    <UserCard Image="https://www.ttdconline.com/_next/kolli.png" text="2- Days Trichy- Puliansolai - Kollihills Tour (3 Times Meal)"
    text2="Unique in landscape and attractions, it has a scenic beauty and has plenty to offer for the exploring travellers."
    text3=" 6,600"/>
    <UserCard Image="https://www.ttdconline.com/_next/kky.png" text="2- Days Trichy- Puliansolai - Kollihills Tour (3 Times Meal)"
    text2="Unique in landscape and attractions, it has a scenic beauty and has plenty to offer for the exploring travellers."
    text3=" 6,600"/>
    
    </div>

    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{display:'flex' , flexDirection:'row',width:'85%',}}>
    <UserCard Image="https://www.ttdconline.com/_next/package/mudaliyar-kuppam-tour/2.jpg" text="4- Days Madurai-Rameshwaram-Kanniyakumari Tour (3 Times Meal)"
    text2="Dreaming of a delightful vacation by a splendid seaside where you can watch sunrise and sunset in all its glory? Or simply walk around the place, mesmerised by the....."
    text3=" 17,700"/>
    <UserCard Image="https://www.ttdconline.com/_next/package/tamil-nadu-tour/3.jpg" text="4 - Days Vinayagar Padaiveedu Tour"
    text2="Touring the six abodes of Lord Vinayagar is a wonderful way to experience the rich spiritual and cultural heritage associated with this revered Hindu deity. These sacred sites, like the Pillaiyarpatti KarpagaVinayagar Temple."
    text3=" 9450"/>
    
    </div>


    </div>
    
    </>
    
  )
}
