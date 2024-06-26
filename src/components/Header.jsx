import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to={'/'}>
        <div className='flex flex-row items-center justify-center border-b-2 border-gray-200 shadow-lg p-5'>
            <img src="logo.jpg" alt='logo' className='w-8 mr-5'/>
            <h2 className='text-2xl text-center font-extralight'>Kitchen Compass</h2>
        </div>
    </Link>
  );
}

export default Header;
