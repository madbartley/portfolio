import './styles/App.css'
import Title from './components/Title.jsx'
import LeftMenu from './components/LeftMenu.jsx'
import Homepage from './components/Homepage.jsx'

function App() {

  return (
    <>
      <div>
        <Homepage />
        <Title name={"Madeline"}/>
        {/*<LeftMenu />*/}
      </div>
    </>
  )
}

export default App
