import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './home-component/Home';
import Theme from './themes/themes'
import Forms from './forms-component/forms'

import ErrorPageComponent from './error-page/errorPageComponent';


import AccessLimit from './accesslimit/acces';



function App() {

  // const [buttonClicked, setButtonClicked] = useState(false);


  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/themes' element={<Theme />}/>
        <Route path='/forms' element={<Forms />}/>
      </Routes>
    </BrowserRouter>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     {/* Public routes */}
    //     <Route path="/" element={<Home buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />} />

    //     {/* Protected route
    //     <Route 
    //       path="/themes" 
    //       // element={<Themes/>}
    //       element={buttonClicked ? <Themes /> : <AccessLimit/>} 
    //     />

    //     {/* Fallback route */}
    //     {/* <Route path="*" element={<ErrorPageComponent />} />  */}

    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

