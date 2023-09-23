import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import PortraitFavorites from "./components/PortraitFavorites/PortraitFavorites";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <PortraitFavorites />
      <HowItWorks />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
