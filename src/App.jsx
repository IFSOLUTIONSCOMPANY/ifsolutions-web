import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="bg-[#2A2B47] sticky top-0 z-40">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>

      <div className="container mx-auto relative">
        <Banner />

        <div id="services" className="h-16"></div>
        <Services />

        <div id="about" className=""></div>
        <About />

        <div id="team" className="h-10"></div>
        <Team />

        <div id="contact" className="h-10"></div>
        <Contact />
      </div>
      <div className="bg-[#2A2B47]">
        <div className="container mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
