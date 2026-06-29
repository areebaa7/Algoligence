import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/Techstack";
import Workflow from "../components/Workflow";
import WhyChooseUs from "../components/WhyChooseUs";
import Protfolio from "../components/Protfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Workflow />
      <Protfolio />
      <WhyChooseUs />
      <Testimonials/>
       <Footer/>
    </>
  );
}