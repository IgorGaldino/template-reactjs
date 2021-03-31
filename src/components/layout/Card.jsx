import React from "react";

import "../../styles/layout/Card.css";

const Cards = (props) => {
  const { titulo, children, color } = props;
  const cardStyle = {
    backgroundColor: color || "F00",
    borderColor: color || "F00",
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{titulo}</div>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Cards;
