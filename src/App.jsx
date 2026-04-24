import { Routes, Route } from "react-router-dom";

import { Navbar } from "@/layout/Navbar";
import { Footer } from "./layout/Footer";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";



// Home page (full landing)
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Routes>
          {/* Main landing */}
          {/* <Route path="/" element={<Home />} /> */}

          {/* Individual pages */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional: 404 fallback */}
          <Route path="*" element={<h1 className="text-center mt-20">404 - Page Not Found</h1>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;