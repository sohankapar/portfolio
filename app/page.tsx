import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { MouseGradient } from "@/components/ui/MouseGradient";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <MouseGradient />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
