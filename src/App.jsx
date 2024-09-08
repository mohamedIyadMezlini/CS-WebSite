import NavBar from './components/navBar/navBar.jsx'
import './App.css'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Stastic from './components/stastics/stastic.jsx'
import Event from './components/event/event.jsx'
import Contact from './components/team/team.jsx'
import Footer from './components/footer/footer.jsx'
import Up from './assets/icons8-arrow-20.png'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <img src={Up} className='up' onClick={ ()=> document.getElementById('home').scrollIntoView()}/>
      <About/>
      <Stastic/>
      <Event/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
