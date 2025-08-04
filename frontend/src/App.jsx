import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import MixedProject from './pages/MixedProject.jsx';



function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/profile" element = {<Profile />} />
            <Route path = "/mixed-project" element = {<MixedProject project />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
