// DisplayData.js
import React from 'react';
import { useDataContext } from './DataContext';
import "./DisplayData.css";
import { MdEdit,  MdDelete } from "react-icons/md";

const DisplayData = () => {
  const { data, searchResults, searchTerm, onEdit, onDelete } = useDataContext();
  const displayData = searchTerm ? searchResults : data;

  const handleDeleteConfirmation = (index) => {
    // Implement your delete confirmation logic here
  };

  const handleDeleteCancel = () => {
    // Implement your delete cancel logic here
  };

  const handleDeleteConfirm = () => {
    // Implement your delete confirm logic here
  };

  return (
    <div style={{marginTop:"150px", position:"relative"}}>
      <ul>
        {displayData.map((item, index) => (
          <li key={index} className='list-none' >
            {/* Your list item JSX here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
