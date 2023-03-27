import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      setSearchTerm('');
  
      const destinationUrl = `/${encodedSearchTerm}`;
  
      window.location.href = destinationUrl;
  
      setTimeout(() => {
        if (location.pathname === '/search') {
          window.location.reload();
        }
      }, 100);
    };
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center relative flex-grow">
    <input
      type="search"
      name="search"
      placeholder="Search here.."
      className="py-0.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent w-full"
      value={searchTerm}
      onChange={handleSearchChange}
    />
    <button type="submit" className="absolute right-2 h-full">
      <AiOutlineSearch />
    </button>
  </form>
  )
}

export default Searchbar