// App.jsx
import React, { useState, useEffect } from 'react';
// import '../Styles/styles.css'; // Import external stylesheet for animations
import Imgeone from '../../images/img1.png';
import Imgetwo from '../../images/img2.jpg';
import ImgeThree from '../../images/img3.jpg'; 

const images = [Imgeone, Imgetwo, ImgeThree]; 

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '100%',
        margin: 'auto',
        overflow: 'hidden', // Hide overflow to create sliding effect
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease', // Apply transition for sliding effect
          transform: `translateX(-${currentSlide * 100}%)`, // Translate based on current slide
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 100%', // Set width of slide to be 100%
              height: 500,
              backgroundSize: 'contain',
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
