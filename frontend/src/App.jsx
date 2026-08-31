import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black/95 light:bg-slate-100 light:text-slate-900 min-h-screen text-white/95">
        <div className="sm:mx-50">
          <Home />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
