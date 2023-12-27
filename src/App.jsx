import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Team from "./components/Team/Team"
import Contact from "./components/Contact/Contact"

function App() {

  return (
    <div className="container mx-auto relative">
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Team />
      <Contact />
    </div>
  )
}

export default App
