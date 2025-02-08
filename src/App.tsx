import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landingpage } from './components/landing';
import { NextPage } from './components/next';

// Lazy load the Welcome component


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/welcome" element={<NextPage />} />
        </Routes>
    </>
  )
}

export default App;