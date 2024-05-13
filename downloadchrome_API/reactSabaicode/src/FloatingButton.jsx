// FloatingButton.js
import React from 'react';
import { useDataContext } from './DataContext';
import "./App.css";

const FloatingButton = () => {
  const { setShowForm } = useDataContext();

  return (
    <div className="floating-button" onClick={() => setShowForm(true)}>
      <button>+</button>
    </div>
  );
};

export default FloatingButton;
