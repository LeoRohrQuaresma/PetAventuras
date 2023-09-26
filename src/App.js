import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import PortraitFavorites from "./components/PortraitFavorites/PortraitFavorites";
import Reviews from "./components/Reviews/Reviews";
import HeroMobile from './components/HeroMobile/HeroMobile'

function App() {
  const isMobile = window.innerWidth <= 450;

  return (
    <>
      <Header />
      {isMobile ? <HeroMobile /> : <Hero />}
      <Reviews />
      <HowItWorks />

      <Footer />
    </>
  );
}

export default App;
