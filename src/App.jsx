
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'

import CreatePaste from './pages/CreatePaste'
import ViewPaste from './pages/ViewPaste'
import HowItWorks from './pages/HowItWorks'

function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/create' element={<CreatePaste /> }  />
        <Route path='/how-it-works' element={<HowItWorks /> }  />

        <Route path='/p/:id' element={<ViewPaste /> }  />


      </Routes>
      </BrowserRouter>
  )
}

export default App
