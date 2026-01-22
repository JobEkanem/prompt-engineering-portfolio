

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20futuristic%20digital%20technology%20background%20with%20neural%20network%20patterns%2C%20AI%20circuit%20boards%2C%20flowing%20data%20streams%2C%20holographic%20elements%2C%20deep%20blue%20and%20purple%20gradient%20colors%2C%20modern%20minimalist%20design%2C%20high-tech%20atmosphere%2C%20soft%20glowing%20lights%2C%20professional%20tech%20aesthetic%2C%20clean%20composition%20perfect%20for%20hero%20section&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
              <span className="text-white text-sm font-medium">AI & Prompt Engineering Specialist</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Crafting Intelligence<br />
              Through<br />
              Precision Prompts
            </h1>

            <p className="text-xl text-gray-200 font-light">
              Vanderbilt-Certified Prompt Engineer | 5+ Years AI/NLP Experience
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-[#0066FF] to-[#6B46C1] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                View Portfolio
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <i className="ri-openai-fill text-3xl text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <i className="ri-robot-2-fill text-3xl text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <i className="ri-brain-fill text-3xl text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <i className="ri-code-s-slash-fill text-3xl text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <i className="ri-database-2-fill text-3xl text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <i className="ri-terminal-box-fill text-3xl text-white"></i>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs text-gray-300 mb-2">Prompt Example</div>
                <div className="font-mono text-sm text-white">
                  <span className="text-[#0066FF]">system:</span> You are an expert AI assistant...<br />
                  <span className="text-[#6B46C1]">user:</span> Analyze the following data...
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/20">
                <div className="text-xs text-gray-300 mb-3">Performance Metrics</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Accuracy</span>
                    <span className="text-lg font-bold text-[#0066FF]">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white">Response Time</span>
                    <span className="text-lg font-bold text-[#6B46C1]">0.3s</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs text-gray-300 mb-2">AI Conversation</div>
                <div className="space-y-2">
                  <div className="bg-[#0066FF]/20 rounded-lg p-3 text-sm text-white">
                    Optimize this prompt for better results
                  </div>
                  <div className="bg-[#6B46C1]/20 rounded-lg p-3 text-sm text-white">
                    Here's an improved version with context...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
