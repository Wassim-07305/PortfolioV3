
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Other from './components/Other';
import Footer from './components/Footer';
import { portfolioData } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero data={portfolioData} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Education data={portfolioData.education} />
        <Other data={portfolioData.otherProjects} />
      </main>
      <Footer data={{ name: portfolioData.name, email: portfolioData.contactEmail }} />
    </div>
  );
}