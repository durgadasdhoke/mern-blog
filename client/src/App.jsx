import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Header from './pages/Header';
import FooterComp from './components/FooterComp';
// import { Button } from "flowbite-react";

const App = () => {
  return (
  <>
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/projects' element ={<Projects/>}/>
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/signup' element ={<SignUp/>}/>
        <Route path='/signin' element ={<SignIn/>}/>
      </Routes>
      <FooterComp/>
    </BrowserRouter>
  </>  
  )
}

export default App