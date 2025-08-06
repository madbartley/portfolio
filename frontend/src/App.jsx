import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';



function App() {

  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path = "https://madelinebartley.onrender.com/" element = {<Home />} />
            <Route path = "https://madelinebartley.onrender.com/projects" element = {<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
