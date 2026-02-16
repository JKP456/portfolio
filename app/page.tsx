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
    <main className="bg-black text-white scroll-smooth selection:bg-green-500 selection:text-black min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* - px-4 สำหรับมือถือ, sm:px-10 สำหรับแท็บเล็ต, lg:px-16 สำหรับจอใหญ่
         - gap-y-20 เพื่อให้แต่ละ Section มีพื้นที่หายใจบนมือถือ
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 flex flex-col gap-y-20 md:gap-y-32 py-20">
        
        <section id="hero" className="min-h-[80vh] flex items-center">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="senior-project">
          <SeniorProject />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Contact />
        </section>
        
      </div>

      <footer className="py-12 text-center border-t border-green-900/10 mt-20">
        <p className="text-green-900 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] px-6 leading-loose">
          &copy; 2026 // JKP_SEC_PORTFOLIO // ALL_SYSTEMS_GO <br className="md:hidden" />
          // STATUS: OPERATIONAL
        </p>
      </footer>
    </main>
  );
}