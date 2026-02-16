import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import SeniorProject from "@/components/SeniorProject";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth selection:bg-green-500 selection:text-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        {/* Education here provides context for your Senior Project later */}
        <Education /> 
        <Skills />
        <SeniorProject />
        <Projects />
        <Certificates />
        <Contact />
      </div>

      <footer className="py-10 text-center border-t border-green-900/20">
        <p className="text-green-900 font-mono text-[10px] uppercase tracking-[0.3em]">
          &copy; 2026 // JKP_SEC_PORTFOLIO // ALL_SYSTEMS_GO
        </p>
      </footer>
    </main>
  );
}