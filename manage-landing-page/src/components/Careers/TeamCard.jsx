import { useState } from "react";

const CareerCard = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className={`wrapper ${isHovered ? 'active' : ''}`}>
        <div className={`orange-top orange-border ${isHovered ? 'grow' : 'shrink'}`} />
        <div className={`orange-left orange-border ${isHovered ? 'grow' : 'shrink'}`} />
        <a
          className="white-card"
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="https://s3.amazonaws.com/levelup-assets/temp/design.png" alt="Design" />
          <p className="category">Design & Engineering</p>
          <span className={`CTA ${isHovered ? 'active' : ''}`}>View Team</span>
        </a>
      </div>
    );
  };
  
  export default CareerCard;