
// import './App.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './home-component/Home';
// import Themes from './themes/themes';
// import Forms from  './forms-component/forms'
// // import inputs from './inputs-componenet/inputs'
// import ErrorPageComponent from './error-page/errorPageComponent';
// import WarningComponent from './warning-component/warning';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<WarningComponent />}>
//           <Route path="/" element={<Home />}>
//             <Route path="/themes" element={<Themes />}>
//                 <Route path="/themes/forms" element={<Forms />}/>
//             </Route>
//           </Route>
//         </Route>
//       </Routes>
//       <Route path="*" element={<ErrorPageComponent />} />
//     </BrowserRouter>
//   );
// }

// export default App; 

// import './App.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Home from './home-component/Home';
// import Themes from './themes/themes';
// import Forms from './forms-component/forms';
// import ErrorPageComponent from './error-page/errorPageComponent';
// import WarningComponent from './warning-component/warning';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Warning Component Wrapper */}
//         <Route element={<WarningComponent />}>
//           <Route path="/" element={<Home />} />

//           <Route path="/themes" element={<Themes />}>
//             <Route path="forms" element={<Forms />} />
//           </Route>
//         </Route>

//         {/* Catch-All Route for Errors */}
//         <Route path="*" element={<ErrorPageComponent />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Home from './home-component/Home';
import Themes from './themes/themes';
import Forms from './forms-component/forms';
import WarningComponent from './warning-component/warning';
import ErrorPageComponent from './error-page/errorPageComponent';

function App() {
  const [themeSelected, setThemeSelected] = useState(false);
  const [hasAccessToThemes, setHasAccessToThemes] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WarningComponent />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/themes"
            element={<Themes setThemeSelected={setThemeSelected} 
            />}
          />
          <Route
            path="/forms"
            element={
              themeSelected ? <Forms /> : <Navigate to="/themes" replace />
            }
          />
        </Route>
        <Route path="*" element={<ErrorPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react';

// import Home from './home-component/Home';
// import Themes from './themes/themes';
// import Forms from './forms-component/forms';
// import WarningComponent from './warning-component/warning';
// import ErrorPageComponent from './error-page/errorPageComponent';

// function App() {
//   const [hasAccessToThemes, setHasAccessToThemes] = useState(false);
//   const [themeSelected, setThemeSelected] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home setHasAccessToThemes={setHasAccessToThemes} />} />
//         <Route
//           path="/themes"
//           element={
//             hasAccessToThemes ? <Themes setThemeSelected={setThemeSelected} /> : <Navigate to="*" />
//           }
//         />
//         <Route
//           path="/forms"
//           element={
//             themeSelected ? <Forms /> : <Navigate to="/themes" replace />
//           }
//         />
//         <Route path="*" element={<ErrorPageComponent />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



