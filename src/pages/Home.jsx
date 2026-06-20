import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/Techstack";
import Workflow from "../components/Workflow";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Workflow />
      <WhyChooseUs />
    </>
  );
}