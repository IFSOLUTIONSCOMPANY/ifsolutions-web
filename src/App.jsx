import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import Team from "./components/Team/Team"

function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Services />
      <About />
      <Team />
    </div>
  )
}

export default App
