import React from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Products from '../../client/Products';
import Home from '../../client/Home';

function Rout({productItems}) {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/home' element={<Home/>}>
              <Products productItems={productItems}/>
            </Route>
          </Routes>
        </Router>
    </div>
  )
}

export default Rout;