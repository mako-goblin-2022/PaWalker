import React from 'react';

import data from '../server/db/Data';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../server/routers/Routes'

// import '../../index.css';

import Header from '../client/Header'
// import Product from './components/Products'
// import Footer from './components/Footer'



function Home() {
  const {productItems} = data;
  return (
    <div >
        <Router>
          <Header />
          <Routes productItems={productItems}/>
        </Router>
    </div>
  )
}

export default Home;