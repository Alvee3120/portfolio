import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      
    </div>
  );
}
