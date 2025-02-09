import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Landingpage } from './components/landing';
import { NextPage } from './components/next';
import { Confetti } from './components/confetti';
import { Footer } from './components/git'; 

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/welcome" element={<NextPage />} />
          <Route path='/Congratulations' element={<Confetti/>}  />
        </Routes>
    </>
  )
}

export default App;