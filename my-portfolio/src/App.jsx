import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import SelectedWork from './components/home/SelectedWork';
import AboutPreview from './components/home/AboutPreview';
import TechStack from './components/home/TechStack';
import ContactCTA from './components/home/ContactCTA';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#111827] dark:text-[#F5F5F5] selection:bg-[#A3E635]/30 selection:text-[#1F2937] dark:selection:bg-[#A3E635]/20 dark:selection:text-[#BEF264] flex flex-col relative transition-colors duration-300">
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-20" />
      
      {/* Subtle Top Ambient Radial Vignette */}
      <div className="fixed inset-0 radial-vignette pointer-events-none -z-10" />

      {/* Sticky Refined Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <SelectedWork />
        <AboutPreview />
        <TechStack />
        <ContactCTA />
      </main>

      {/* Restrained Editorial Footer */}
      <Footer />
    </div>
  );
}
