import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter className='text-3xl text-red-700'>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/Sign-in' element={<SignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
