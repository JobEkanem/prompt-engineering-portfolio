export default function About() {
  const handleViewCredentials = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              I am a Prompt Engineer and AI Systems Engineer specializing in designing high-performance interactions between humans and large language models. I build, test, and optimize prompts that improve accuracy, reduce hallucinations, and align model outputs with real business and user objectives.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              My work spans LLM-powered applications, chatbot optimization, and AI-driven decision systems, where I focus on turning vague human intent into reliable, scalable AI behavior. I approach AI not as a black box, but as an interface that can be engineered, measured, and continuously improved.
            </p>
            <button
              onClick={handleViewCredentials}
              className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:gap-3 transition-all whitespace-nowrap cursor-pointer"
            >
              View Full Credentials<i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-5xl font-bold text-[#0066FF] mb-2">500+</div>
                <div className="text-sm text-gray-600">AI Models Optimized</div>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-5xl font-bold text-[#6B46C1] mb-2">98%</div>
                <div className="text-sm text-gray-600">Accuracy Improvement</div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20modern%20workspace%20setup%20with%20multiple%20monitors%20displaying%20AI%20code%20interfaces%2C%20neural%20network%20visualizations%2C%20data%20analytics%20dashboards%2C%20clean%20minimalist%20desk%20with%20laptop%2C%20ambient%20lighting%2C%20tech%20professional%20environment%2C%20high-end%20equipment%2C%20contemporary%20office%20design%2C%20warm%20professional%20atmosphere&width=800&height=600&seq=about-main-001&orientation=landscape"
                alt="Professional Workspace"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="relative -mt-12 ml-12">
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200 inline-block">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20certificate%20award%20ceremony%2C%20Vanderbilt%20University%20diploma%20presentation%2C%20academic%20achievement%20recognition%2C%20formal%20education%20setting%2C%20professional%20certification%20document%2C%20prestigious%20university%20branding%2C%20academic%20excellence%2C%20graduation%20moment&width=300&height=200&seq=about-cert-001&orientation=landscape"
                  alt="Certification"
                  className="w-64 h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
