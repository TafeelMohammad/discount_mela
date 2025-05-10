import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import './HeroCarousel.css';

import hero1 from '../assets/images/img1.jpg';
import hero2 from '../assets/images/img2.jpg';
import hero3 from '../assets/images/img3.jpg';
import hero4 from '../assets/images/img4.jpg';
import hero5 from '../assets/images/img5.jpg';
import hero6 from '../assets/images/img6.jpg';
import hero7 from '../assets/images/img7.jpg';
import hero8 from '../assets/images/img8.jpg';
import logo from '../assets/images/logo.png';

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= 8 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-carousel">
      <div className="hero-header">
        <div className="logo"></div>
        <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
      </div>

      <img
        src={images[currentIndex - 1]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
        style={{
            width: '100%', 
            // height: '100%', 
            objectFit: 'contain'
        }}
      />

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index + 1 === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

const top100Films = [
    { title: 'Electronics', year: 1994 },
    { title: 'Groceries', year: 1972 },
    { title: 'Home Appliances', year: 1974 },
    { title: 'Mens Fashion', year: 2008 },
    { title: 'Womens Fashion', year: 1957 }
  ];


export default HeroCarousel;
