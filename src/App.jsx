
import About from './Components/About/About'
import Banner from './Components/Bannar/Banner'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Project from './Components/Project/Project'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <div className='max-w-6xl mx-auto bg-gray-800'>
      <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
      </div>
    </>
  )
}

export default App
