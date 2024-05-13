// App.js

import  { useState } from 'react';
import FloatingButton from './FloatingButton';
import Form from './Form';
import DisplayData from './DisplayData';
import Search from './Search'; // Import the Search component

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [searchResults, setSearchResults] = useState([]); // State for search results

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditIndex(null);
  };

  const handleSubmit = (formData) => {
    if (editIndex !== null) {
      const newData = [...data];
      newData[editIndex] = formData;
      setData(newData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
    toggleForm();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  // Function to filter data based on search term
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.createrName.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <div>
      <div className="App">
      <Search onSearch={handleSearch} searchTerm={searchTerm} /> 
        <FloatingButton onClick={toggleForm} />
        {showForm && <Form onSubmit={handleSubmit} editData={editIndex !== null ? data[editIndex] : null} />}
        <DisplayData
          data={searchTerm ? searchResults : data} // Render filtered results if search term exists, otherwise render all data
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
