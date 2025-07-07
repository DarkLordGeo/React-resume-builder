import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home-component/Home';
import Theme from './themes/themes'
import Forms from './forms-component/forms'
import DownloadPage from './downloadPage/DownloadPage';
import { useState } from 'react';
import { FormData } from './forms-component/formContext';
function App() {

  const [inputProps, setInputProps] = useState({})

  return (
    <>
      <FormData.Provider value={{ inputProps, setInputProps }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/themes' element={<Theme />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='/download' element={<DownloadPage />} />
          </Routes>
        </BrowserRouter>
      </FormData.Provider>
    </>
  );
}

export default App;

