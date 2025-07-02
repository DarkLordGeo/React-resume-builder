import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home-component/Home';
import Theme from './themes/themes'
import Forms from './forms-component/forms'
import DownloadPage from './downloadPage/DownloadPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/themes' element={<Theme />}/>
        <Route path='/forms' element={<Forms />}/>
        <Route path='/download' element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

