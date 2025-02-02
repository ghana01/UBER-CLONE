import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import { UserDataContext } from './Context/UserContext'
function App() {
 const ans = useContext(UserDataContext)
  console.log(ans);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Userlogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<Captainlogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
      </Routes>
    </div>
  )
}

export default App
