import Hero from "../Components/Hero";
import About from "../Components/About";
import Choose from "../Components/Choose";
import Stats from "../Components/Stats";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Events from "../Components/Events";
import Chef from "../Components/Chef";
import Gallery from "../Components/Gallery";
import Booking from "../Components/Booktable";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Choose />
      <Stats />
      <Menu />
      <Testimonials />
      <Events />
      <Chef />
      <Gallery />
      <Booking />
      <Contact />
    </>
  );
}

export default Home;