import React from 'react';
import Logo from '../images/logo.png';


function Header() {
  return (
    <>
    <div className='text-black'>
    <img src={Logo} className="App-logo" alt="logo" />
    </div>
    </>
  );
}

export default Header;
