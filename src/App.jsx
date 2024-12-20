import './App.css'
import Home from './home-component/Home'
import Themes from './themes/themes'
import Warning from './warning-component/Warning'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
