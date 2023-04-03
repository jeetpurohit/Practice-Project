import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import './index.css';
import AboutUs from './routes/AboutUs';
import Accessories from './routes/Accessories';
import Brand from './routes/Brand';
import ContactUs from './routes/ContactUs';
import Home from './routes/Home';
import News from './routes/News';
import Pages from './routes/Pages';
import Store from './routes/Store';

function App() {
  return (
    <Routes>
      <Route path='/' element={(<Home/>)} />
      <Route path='/Store' element={(<Store/>)} />
      <Route path='/Accessories' element={(<Accessories/>)} />
      <Route path='/Brand' element={(<Brand/>)} />
      <Route path='/Pages' element={(<Pages/>)} />
      <Route path='/AboutUs' element={(<AboutUs/>)} />
      <Route path='/News' element={(<News/>)} />
      <Route path='/ContactUs' element={(<ContactUs/>)} />
  
      
    </Routes>
  );
}

export default App;
