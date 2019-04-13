import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => {
        return <Card key={card.headline} card={card} />;
        //Used headline as key because its the only unique element and I didn't want to add IDs to the data set.
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  //cards are an array of objects
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default Cards;
