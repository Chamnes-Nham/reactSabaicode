// Form.js
import React from 'react';
import { useDataContext } from './DataContext';
import "./Form.css"

const Form = () => {
  const { showForm, setShowForm, data, setData, editIndex, setEditIndex } = useDataContext();
  // Rest of your Form component
};

export default Form;
