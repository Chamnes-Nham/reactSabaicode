
import { useState } from 'react';
import "./Search.css";
import GooglChrome from './image/Google-Chrome.png'
import { CiSearch } from "react-icons/ci";

const Search = ({ onSearch, searchTerm }) => {
const [inputValue, setInputValue] = useState(searchTerm);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value); // Call the onSearch function with the current input value
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
              value={inputValue}
              onChange={handleChange}
            />
            </div>
        </nav>
    </nav>
  </div>
  );
};

export default Search;

