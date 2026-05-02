import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsGrid from "./components/ProjectsGrid";
import SkillsMatrix from "./components/SkillsMatrix";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { siteContent } from "./data/siteContent";

function App() {
  return (
    <div className="dark">
      <Navbar />
      <div className="bg-gradient-mesh min-h-screen">
      {/* add lg:ml-80 to main when sidebar is added back in */}
        {/* <Sidebar /> */}
        <main>
          <Hero />
          <About />
          <ProjectsGrid />
          <SkillsMatrix />
          <Timeline />
          <Footer />
        </main>
      </div>
      <a
        href={`mailto:${siteContent.email}`}
        aria-label="Email Isabelle"
        className="md:hidden fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center glow-violet hover:scale-105 hover:bg-primary-container transition-all"
      >
        <span className="material-symbols-outlined">mail</span>
      </a>
    </div>
  );
}

export default App;
