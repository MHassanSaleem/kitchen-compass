import React from 'react'
import { FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";


function Category() {
  return (
    <div className='flex justify-center'>
      <div to={'/Italian'}>
          <FaPizzaSlice />
          <span>Pizza</span>
      </div>
      <div to={'/Italian'}>
        <FaHamburger />
        <span>Hamburger</span>
      </div>
      <div to={'/Italian'}>
        <GiNoodles />
        <span>Noodles</span>
      </div>
      <div to={'/Italian'}>
        <GiChopsticks />
        <span>Chopsticks</span>
      </div>
    </div>
  );
}

export default Category;