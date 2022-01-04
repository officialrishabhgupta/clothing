import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage';
import ShopPage from '../pages/shop/shop';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
