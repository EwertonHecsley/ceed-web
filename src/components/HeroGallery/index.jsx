import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../../assets/images/image01.jpg';
import img2 from '../../assets/images/image02.jpg';
import img3 from '../../assets/images/image03.jpg';
import img4 from '../../assets/images/image04.jpg';

const images = [img1, img2, img3, img4];

const HeroGallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <AnimatePresence mode='wait'>
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Student gallery ${index + 1}`}
        />
      </AnimatePresence>
      
      {/* Subtle Vignette for smoother integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'bg-accent-yellow w-10' : 'bg-white/40 w-4'
            }`}
          />
        ))}
      </div>
    </div>

  );
};

export default HeroGallery;
