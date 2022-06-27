import React from 'react';

import data from '../data';

// import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from '../../../server/routers/Routes'

// import '../../index.css';

import Header from './Header'
// import Product from './components/Products'
// import Footer from './components/Footer'



function Home() {
  const {productItems} = data;
  return (
    <div >
      <Header />
    </div>
  )
}

export default Home;