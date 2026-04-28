// import Navbar from "@/components/sections/Navbar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import JourneySection from "./components/JourneySection";
import ExecutivesSection from "./components/ExecutivesSection";
import Footer from "./components/Footer";
import EventsTicker from "./components/events";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhoWeAreSection />
      <JourneySection />
      <ExecutivesSection />
      <EventsTicker />
      <Footer />
    </main>
  );
}
