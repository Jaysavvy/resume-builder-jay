import './index.css'
import './App.css'
import './Components/Navbar'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Aboutsection from './Components/Aboutsection'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

const App = () => {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Aboutsection/>
    <Projects/>
    <Footer/>
  </>
  )
  }

export default App
