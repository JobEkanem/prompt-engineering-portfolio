import { useState } from 'react';

export default function CaseStudies() {
 

  const caseStudies = [
    {
      title: 'Customer Support Chatbot Optimization',
      client: 'Fortune 500 E-commerce',
      challenge: 'Reduced response errors by 47% and improved customer satisfaction scores by 35%',
      tags: ['GPT-4', 'Claude', 'Few-Shot Learning'],
      color: 'from-purple-500 to-indigo-600',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600',
      route: '/case-studies/chatbot-optimization'
    },
    {
      title: 'AI-Powered Content Generation',
      client: 'Global SaaS Company',
      challenge: 'Increased marketing team productivity by 280% while maintaining brand consistency',
      tags: ['Content Strategy', 'Brand Voice', 'Multi-Model'],
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-600',
      route: '/case-studies/content-generation'
    },
    {
      title: 'Enterprise Code Documentation',
      client: 'Tech Enterprise',
      challenge: 'Reduced documentation time by 73% and improved code quality scores by 41%',
      tags: ['Code Analysis', 'Technical Writing', 'Automation'],
      color: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600',
      route: '/case-studies/code-assistant'
    },
    {
      title: 'Medical Documentation Assistant',
      client: 'Regional Hospital Network',
      challenge: 'Streamlined clinical documentation, saving physicians 68% of paperwork time',
      tags: ['Healthcare', 'HIPAA Compliant', 'Specialized Domain'],
      color: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-600',
      route: '/case-studies/medical-assistant'
    }
  ];

  const handleReadMore = (route: string) => {
    window.REACT_APP_NAVIGATE(route);
  };

  return (
    <section id="case-studies" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of how strategic prompt engineering delivers measurable business impact
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
              
              <div className="p-8">
                {/* Client Badge */}
                <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                  {study.client}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all">
                  {study.title}
                </h3>

                {/* Challenge */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {study.challenge}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(study.route)}
                  className={`mt-6 px-6 py-3 border-2 rounded-lg font-medium transition-all hover:shadow-lg whitespace-nowrap ${study.borderColor} ${study.textColor}`}
                >
                  Read Full Case Study →
                </button>
              </div>

              {/* Hover Effect Icon */}
              <div
                className={`absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <i className="ri-arrow-right-line text-2xl text-white"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
