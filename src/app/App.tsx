import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Ownership } from './components/Ownership';
import { WhyHireMe } from './components/WhyHireMe';
import { MyStory } from './components/MyStory';
import { FunCard } from './components/FunCard';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50">
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Ownership />
        <WhyHireMe />
        <FunCard />
        <MyStory />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p>© 2024 Shivani Awasthi. Built with Next.js, Tailwind CSS & Motion.</p>
        </div>
      </footer>
    </div>
  );
}