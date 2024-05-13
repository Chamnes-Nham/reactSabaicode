// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <DataContext.Provider
      value={{
        showForm,
        setShowForm,
        data,
        setData,
        editIndex,
        setEditIndex,
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
