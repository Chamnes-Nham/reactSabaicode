// EditForm.js
import React from 'react';
import { useDataContext } from './DataContext';
import Form from './Form';

const EditForm = () => {
  const { onSubmit, editData } = useDataContext();

  return <Form onSubmit={onSubmit} editData={editData} />;
};

export default EditForm;
