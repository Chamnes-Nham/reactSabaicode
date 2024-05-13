// Search.js
import React from 'react';
import { useDataContext } from './DataContext';
import "./Search.css";
import GooglChrome from './image/Google-Chrome.png'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { onSearch, searchTerm } = useDataContext();

  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <nav className='navbar'>
            <div className='logo'><img className='logo' src={GooglChrome} alt="logo" /></div>
            <div className="name">Downloads</div>
            <div className='search'>
            <span className="material-symbols-outlined">
                   <CiSearch />
                   </span>
            <input
              className='search-input'
              type="text"
              placeholder="Search by Name or CreaterName..."
              value={searchTerm}
              onChange={handleChange}
            />
            </div>
        </nav>
    </nav>
  </div>
  );
};

export default Search;
