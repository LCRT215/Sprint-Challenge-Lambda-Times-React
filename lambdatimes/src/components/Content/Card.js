import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      {/* Remember, Card is being evoked in the map in cards.js. That map uses card as the placeholder so card needs to be referred to*/}
      <div className="author">
        <div className="img-container">
          <img
            src={props.card.img /* image source goes here */}
            alt="card image"
          />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    //use PropTypes.shape to specify what each datatype should be in this object.
    tab: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
};

export default Card;
