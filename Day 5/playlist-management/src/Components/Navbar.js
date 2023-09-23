import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navigation = () => {
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
        <Link to='/home'>
          <li className='LandList1'>HOME</li>
        </Link>
        <Link to='/genre'>
          <li className='LandList'>GENRE</li>
        </Link>
        <Link to='/artists'>
          <li className='LandList'>ARTISTS</li>
        </Link>
        {/* <Link to='/Dashboard'>
          <li className='LandList'>DASHBOARD</li>
        </Link> */}
        <Link to='/albums'>
          <li className='LandList'>ALBUMS</li>
        </Link>
      </ul>
      {/* Search Bar */}
      <div className='searchContainer'>
        <input
          type='text'
          placeholder='Search...'
          className='searchInput'
        />
        <button className='searchbutton' type="search">Search</button>
      </div>
    </nav>
  );
}

export default Navigation;
