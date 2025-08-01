import './styles/App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Title from './components/Title.jsx'
import Homepage from './pages/Homepage.jsx'
import Profile from './pages/Profile.jsx'
import MixedProject from './pages/MixedProject.jsx';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Homepage />} />
            <Route path = "/profile" element = {<Profile />} />
            <Route path = "/mixed-project" element = {<MixedProject />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
