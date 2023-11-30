interface StarProps {
    filled: boolean;
    onClick: () => void; // Assuming no arguments are passed to the onClick handler
  }

const Star : React.FC<StarProps>= ({ filled, onClick }) => {
    return (
      <span
        className={`fa fa-star cursor-pointer ${filled ? 'text-yellow-500' : 'text-white'}`}
        onClick={onClick}
      ></span>
    );
  };

  import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (starNumber :number) => {
    setRating(starNumber);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <Star
          key={starNumber}
          filled={starNumber <= rating}
          onClick={() => handleClick(starNumber)}
        />
      ))}
    </div>
  );
};

export default StarRating;
