import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProductivitySection from "./components/ProductivitySection";
import TestimonialSection from "./components/TestimonialSection";
import CTAsection from "./components/CTAsection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <ProductivitySection />
        <TestimonialSection />
        <CTAsection />
      </main>
      <Footer />
    </>
  );
}

export default App;
