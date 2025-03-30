// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => setRating(value);
  const handleMouseEnter = (value) => setHoveredRating(value);
  const handleMouseLeave = () => setHoveredRating(0);

  return (
    <div>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={
              value <= (hoveredRating || rating) ? 'filled-star' : 'empty-star'
            }
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={() => rating > 0 && onRatingSubmit(productId, rating)}>
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;