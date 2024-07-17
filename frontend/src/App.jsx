import './App.css'

import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import {slides} from './data/carouselData.json'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home'
import { Login } from './components/pages/Login'
import JobDetail from './components/jobDetails'
import Jobs from './components/pages/Jobs'
import Swarozgar from './components/pages/Swarozgar'

import { Signup } from './components/pages/Signup'
import Courses from './components/pages/Courses'
// import Mentors from './components/Mentors'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/Login' element={<Login />}/>
      <Route exact path='/Signup' element={<Signup />}/>
      <Route exact path='/Jobs' element={<Jobs />}/>
      <Route exact path='/Swarozgar' element={<Swarozgar />}/>
      <Route exact path='/Courses' element={<Courses />}/>
      <Route path="/job/:id" element={<JobDetail />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App