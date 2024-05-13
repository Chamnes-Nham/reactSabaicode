// App.js
import React from 'react';
import { DataProvider } from './DataContext';
import FloatingButton from './FloatingButton';
import Form from './Form';
import DisplayData from './DisplayData';
import Search from './Search';

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Search />
        <FloatingButton />
        <Form />
        <DisplayData />
      </div>
    </DataProvider>
  );
};

export default App;
