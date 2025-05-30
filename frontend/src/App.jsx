import './styles/App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from './components/Title.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import Homepage from './pages/Homepage.jsx'
import Profile from './pages/Profile.jsx'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Homepage />} />
            <Route path = "/profile" element = {<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
