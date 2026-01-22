import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 
              className={`text-2xl font-bold cursor-pointer transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => scrollToSection('home')}
            >
              Job Ekanem
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/jobekanem"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-[#0066FF] ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
