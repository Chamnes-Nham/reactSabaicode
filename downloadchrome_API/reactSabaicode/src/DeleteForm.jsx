// DeleteButton.js
import React from 'react';
import { useDataContext } from './DataContext';

const DeleteButton = ({ index }) => {
  const { onDelete } = useDataContext();

  const handleClick = () => {
    onDelete(index);
  };

  return (
    <button onClick={handleClick}>Delete</button>
  );
};

export default DeleteButton;
