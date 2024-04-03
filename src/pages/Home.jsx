import Vegetarian from "../components/Vegetarian";
import Popular from "../components/Popular";
import Header from "../components/Header";
import Category from "../components/Category";

import React from 'react'

function Home() {
  return (
    <div>
        <Popular/>
        <Vegetarian/>
    </div>
  )
}

export default Home