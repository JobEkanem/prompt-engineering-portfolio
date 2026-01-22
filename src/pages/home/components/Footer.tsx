export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-gray-400">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-10 gap-12 mb-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-white">Job Ekanem</span>
            </div>
            <p className="text-base leading-relaxed mb-4">
              Precision prompting for<br />
              intelligent AI systems<br />
              Built with expertise
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Prompt Engineer Portfolio. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
              QUICK LINKS
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-4">
              CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-700 rounded-lg p-3 flex items-center justify-center h-20 hover:border-gray-600 transition-colors">
                <i className="ri-graduation-cap-fill text-3xl text-gray-600"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-3 flex items-center justify-center h-20 hover:border-gray-600 transition-colors">
                <i className="ri-meta-fill text-3xl text-gray-600"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-3 flex items-center justify-center h-20 hover:border-gray-600 transition-colors">
                <i className="ri-google-fill text-3xl text-gray-600"></i>
              </div>
              <div className="border border-gray-700 rounded-lg p-3 flex items-center justify-center h-20 hover:border-gray-600 transition-colors">
                <i className="ri-robot-fill text-3xl text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Prompt Engineer Portfolio
            </p>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
