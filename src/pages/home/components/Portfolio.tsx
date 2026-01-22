import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const projects = [
    {
      title: 'Enterprise NLP Optimization',
      description: 'Designed and implemented advanced prompt engineering strategies for companies, improving AI response accuracy by 45% and reducing processing time by 30%.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20enterprise%20dashboard%20interface%20showing%20natural%20language%20processing%20analytics%2C%20AI%20performance%20metrics%2C%20data%20visualization%20charts%2C%20neural%20network%20graphs%2C%20professional%20business%20software%20design%2C%20clean%20UI%20with%20blue%20and%20purple%20accents%2C%20high-tech%20corporate%20aesthetic&width=800&height=500&seq=portfolio-001&orientation=landscape',
      tags: ['NLP', 'Optimization', 'Enterprise'],
      category: 'NLP'
    },
    {
      title: 'Automated Prompt Testing Framework',
      description: 'Built a comprehensive Python-based testing framework for evaluating prompt performance across multiple LLM platforms with automated metrics tracking.',
      image: 'https://readdy.ai/api/search-image?query=Software%20testing%20automation%20interface%20with%20code%20editor%2C%20terminal%20windows%20showing%20test%20results%2C%20performance%20graphs%2C%20automated%20testing%20dashboard%2C%20Python%20code%20snippets%2C%20developer%20tools%2C%20modern%20IDE%20interface%2C%20technical%20software%20development%20environment&width=600&height=500&seq=portfolio-002&orientation=portrait',
      tags: ['Python', 'Automation', 'Testing'],
      category: 'Automation'
    },
    {
      title: 'Context-Aware Chatbot System',
      description: 'Developed sophisticated prompt templates for a customer service chatbot that maintains context across conversations, achieving 92% customer satisfaction.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20chatbot%20interface%20with%20conversation%20bubbles%2C%20AI%20assistant%20avatar%2C%20clean%20messaging%20UI%2C%20customer%20service%20chat%20window%2C%20friendly%20bot%20design%2C%20professional%20customer%20support%20interface%2C%20blue%20and%20white%20color%20scheme%2C%20contemporary%20app%20design&width=600&height=500&seq=portfolio-003&orientation=portrait',
      tags: ['Chatbot', 'NLP', 'Customer Service'],
      category: 'NLP'
    },
    {
      title: 'Multi-Model Prompt Library',
      description: 'Created an extensive library of reusable prompt templates optimized for different AI models, reducing development time by 60% for cross-platform projects.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20library%20interface%20with%20organized%20folders%2C%20code%20snippets%2C%20template%20cards%2C%20documentation%20pages%2C%20developer%20resource%20hub%2C%20modern%20software%20library%20UI%2C%20organized%20content%20management%20system%2C%20professional%20tech%20documentation%20design&width=800&height=500&seq=portfolio-004&orientation=landscape',
      tags: ['Templates', 'Optimization', 'Documentation'],
      category: 'Optimization'
    }
  ];

  const filters = ['All Projects', 'NLP', 'Automation', 'Optimization'];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#7C9A3D] font-semibold mb-4">
              SELECTED WORK
            </div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Prompt Engineering<br />Case Studies
            </h2>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                index === 0 || index === 3 ? 'md:col-span-1' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#6B46C1]/10 text-[#0066FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-2 text-[#0066FF] font-medium hover:gap-3 transition-all"
                >
                  View Case Study
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
