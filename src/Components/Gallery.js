// src/components/Gallery.js
import React, { useState } from 'react';
import './gallery.css';  // Import the gallery styles

const imageSrc = 'https://ruparel.in/images/blog-banner.png';  // Replace with the actual image path

const Gallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: imageSrc },
    { id: 2, src: imageSrc },
    { id: 3, src: imageSrc }
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add image function to add a new image to the gallery
  const addImage = () => {
    setImages([...images, { id: images.length + 1, src: imageSrc }]);
  };

  // Move to the next set of images
  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Move to the previous set of images
  const handlePrevious = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="gallery-container shadow-lg">
      {/* Header with the gallery button, add image button, and arrows */}
      <div className="gallery-header">
        <button className="gallery-title button-style">Gallery</button>
        <div className="gallery-controls">
          <button className="add-image-button button-style" onClick={addImage}>+ ADD IMAGE</button>
          <button className="navigation-button button-style" onClick={handlePrevious} disabled={currentIndex === 0}>←</button>
          <button className="navigation-button button-style" onClick={handleNext} disabled={currentIndex + 3 >= images.length}>→</button>
        </div>
      </div>

      {/* Grid to display images */}
      <div className="gallery-grid">
        {images.slice(currentIndex, currentIndex + 3).map(image => (
          <div key={image.id} className="gallery-image-container">
            <img className="gallery-image" src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>

      <div className="gallery-footer-line"></div> {/* Bottom line for the box */}
    </div>
  );
};

export default Gallery;
