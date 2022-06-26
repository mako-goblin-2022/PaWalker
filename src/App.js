import React from 'react';

import data from './components/server/db/Data';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Header from './components/client/Header'
// import Product from './components/Products'
// import Footer from './components/Footer'



function App() {
  const {productItems} = data;
  return (
    <div >
        <Router>
          <Header />
        </Router>
    </div>
  )
}

export default App;
