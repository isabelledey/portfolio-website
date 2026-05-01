import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import SkillsMatrix from './components/SkillsMatrix';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark">
      <Navbar />
      <div className="lg:ml-80 bg-gradient-mesh min-h-screen">
        <Sidebar />
        <main>
          <Hero />
          <About />
          <ProjectsGrid />
          <SkillsMatrix />
          <Timeline />
          <Footer />
        </main>
      </div>
      <button className="md:hidden fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center glow-violet">
        <span className="material-symbols-outlined">mail</span>
      </button>
    </div>
  );
}

export default App;
