import { useRef } from "react";
import Header from "./components/Header";
import Naming from "./components/Naming";
import Projects from "./components/Projects";
import KnowYourDeveloper from "./components/KnowYourDeveloper";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import LetsConnect from "./components/LetsConnect";

const App = () => {
  const knowRef = useRef(null);
  const mailMeRef = useRef(null)

  const scrollToMail = () => {
      if (!knowRef.current) return;
    mailMeRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToKnow = () => {
    knowRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Video Background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/bgVideo.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen bg-black/60 sm:pt-20" style={{ paddingTop: "50px" }}>
        <CustomCursor />

        {/* Pass function to Header */}
        <Header onKnowClick={scrollToKnow} onMailMeClick={scrollToMail} />

        <Naming />
        <Projects />

        {/* Attach ref here */}
        <div ref={knowRef} className="scroll-mt-24">
          <KnowYourDeveloper />
        </div>

        <WhyWorkWithMe />
        <Experience />
        <Education />
        <div ref={mailMeRef} className="scroll-mt-24">
        <LetsConnect />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
