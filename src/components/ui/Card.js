import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-2xl shadow-lg p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
