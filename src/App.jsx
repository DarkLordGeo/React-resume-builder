import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './home-component/Home';
import Theme from './themes/themes'
import Forms from './forms-component/forms'

// import ErrorPageComponent from './error-page/errorPageComponent';
// import AccessLimit from './accesslimit/acces';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/themes' element={<Theme />}/>
        <Route path='/forms' element={<Forms />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

