import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo1.png' alt='' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/search'>Search</Link> {/* Corrected Search Link */}
              </li>
              <li>
                <Link to='/movie'>Movies</Link>
              </li>
              <li>
                <Link to='/series'>Series</Link>
              </li>
              <li>
                <Link to='/tvshow'>TV Shows</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
          <Link to='/search'> <i className='fa fa-search'></i></Link>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
