import React from 'react';
import "./App.css";

const FloatingButton = ({ onClick }) => {
  return (
    <div className="floating-button" onClick={onClick}>
      <button>+</button>
    </div>
  );
};

export default FloatingButton;
