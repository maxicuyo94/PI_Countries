import React from 'react';
import Logo from '../../img/logo.png'
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <div class="topnav">
      <Link className="Link"  to='/home'  > <img id="logo" src={Logo} width="17px" height="17px" alt="Logo " /> Home</Link>
      <Link className="Link" to='/about' >About</Link>
      <input type="text" placeholder="Search.." />
    </div>
    // <div class="topnav">
    //   <Link to='/'>
    //     <span className="navbar">
    //       <img id="logo" src={Logo} width="30" height="30" alt="" />
    //       Henry - Countries App
    //     </span>
    //   </Link>
    //   <Link to='/about'>
    //     <span>About</span>
    //   </Link>
    //   <SearchBar className="SearchBar" onSearch={onSearch}/>
    // </div>
  );
};
