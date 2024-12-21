import './App.css'

import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './home-component/Home'
import Themes from './themes/themes'
import ErrorPageComponent from './error-page/errorPageComponent'

// import ErrorPageComponent from './error-page/errorPageComponent'
// import notFoundComponent from './not-found-component/404'
// // import Themes from './themes/themes'
// // import Warning from './warning-component/Warning'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import WarningComponent from './warning-component/warning'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WarningComponent/>}>
            <Route path="/" element={<Home />} />
            <Route path="/themes" element={<Themes />} />
          </Route>
          {/* <Route path="/" element={<Home />} /> */}

          {/* <Route path="*" element={<ErrorPageComponent />} />  */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
