import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div className='flex justify-center space-x-4 mt-4'>
      <NavLink
        to={'/cuisine/Italian'}
        className={`flex items-center border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors duration-300`}>
        <FaPizzaSlice className='mr-2' />
        <span>Italian</span>
      </NavLink>
      <NavLink
        to={'/cuisine/Indian'}
        className={`flex items-center border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors duration-300`}>
        <FaHamburger className='mr-2' />
        <span>Indian</span>
      </NavLink>
      <NavLink
        to={'/cuisine/Chinese'}
        className={`flex items-center border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors duration-300`}>
        <GiNoodles className='mr-2' />
        <span>Chinese</span>
      </NavLink>
      <NavLink
        to={'/cuisine/German'}
        className={`flex items-center border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-900 hover:text-white transition-colors duration-300`}>
        <GiChopsticks className='mr-2' />
        <span>German</span>
      </NavLink>
    </div>
  );
}

export default Category;
