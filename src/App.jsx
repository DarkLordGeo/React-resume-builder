import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './home-component/Home';
import Themes from './themes/themes';
// import Forms from './forms-component/forms';
// import WarningComponent from './warning-component/warning';
import ErrorPageComponent from './error-page/errorPageComponent';


import AccessLimit from './accesslimit/acces';

// import { useNavigate } from 'react-router-dom';

function App() {
  // const [themeSelected, setThemeSelected] = useState(false);
  // const [hasAccessToThemes, setHasAccessToThemes] = useState(false);
  
  // const [buttonClicked, setButtonClicked] = useState(false);
  // // const navigate = useNavigate()  
  // const handleButtonClick = () => {
  //   setButtonClicked(true);
  //   navigate("/themes"); // Navigate to themes page after button is clicked
  // };


  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route element={<WarningComponent />}>
  //         <Route path="/" element={<Home buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />} />
  //         {buttonClicked ? (
  //           <Route path="/themes" element ={<Themes/>} />
  //         ):(
  //           <Route path="*" element={<ErrorPageComponent />} />
  //         )
  //         }
  //           {/* <Route path="/themes" element={buttonClicked ? <Themes /> : <ErrorPageComponent />} /> */}

  //         <Route path="/themes" element ={<Themes/>}/>
  //         <Route path="/themes/forms" element={<Forms/>}/>
  //       </Route>
  //       <Route path="*" element={<ErrorPageComponent />} />
  //     </Routes>
  //   </BrowserRouter>
    
  // );


  // ?
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} />} />

        {/* Protected route */}
        <Route 
          path="/themes" 
          element={buttonClicked ? <Themes /> : <AccessLimit/>} 
        />

        {/* Fallback route */}
        <Route path="*" element={<ErrorPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

