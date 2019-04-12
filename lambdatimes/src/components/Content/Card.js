import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img /* image source goes here */} alt="card image" />
        </div>
        <span>By {props.author}</span>
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
