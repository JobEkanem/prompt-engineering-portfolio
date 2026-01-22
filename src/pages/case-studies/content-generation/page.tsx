import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function ContentGeneration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="font-medium">Back to Portfolio</span>
          </button>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Marketing Technology
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Content Generation Platform
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Built an intelligent content generation system that increased marketing team productivity by 280% while maintaining brand consistency across 15+ content types and 8 languages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="text-lg font-semibold text-gray-900">Global SaaS Company</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-lg font-semibold text-gray-900">8 months</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-lg font-semibold text-gray-900">GPT-4, Claude, Gemini</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Impact</p>
              <p className="text-lg font-semibold text-emerald-600">280% Productivity Boost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The marketing team at a rapidly growing SaaS company was struggling to keep up with content demands across multiple channels, regions, and languages. Content quality was inconsistent, brand voice varied between writers, and the manual review process created bottlenecks that delayed campaigns.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-red-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4">
                  <i className="ri-time-line text-2xl text-red-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Slow Production</h3>
                <p className="text-gray-600 text-sm">Average 4-6 hours per blog post, 2-3 hours for social content batches</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                  <i className="ri-contrast-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Inconsistent Voice</h3>
                <p className="text-gray-600 text-sm">Brand voice varied significantly across 12 content creators and 8 languages</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg mb-4">
                  <i className="ri-money-dollar-circle-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">High Costs</h3>
                <p className="text-gray-600 text-sm">$45K/month spent on freelance writers and translation services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Brand Voice DNA System</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Created a comprehensive "Brand Voice DNA" framework that captures the company's unique tone, style, and messaging principles. This framework is embedded in every prompt to ensure consistent brand representation across all generated content.
              </p>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Brand Voice Components</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Tone Attributes</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Professional yet approachable</li>
                      <li>• Data-driven but human</li>
                      <li>• Confident without arrogance</li>
                      <li>• Educational and empowering</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Language Patterns</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Active voice preferred</li>
                      <li>• Sentence length: 15-20 words avg</li>
                      <li>• Industry terms with explanations</li>
                      <li>• Customer-centric language</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Content Type Templates</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Developed specialized prompt templates for 15+ content types, each optimized for its specific purpose and channel. Templates include blog posts, social media, email campaigns, case studies, white papers, and more.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 rounded-lg mb-3">
                    <i className="ri-article-line text-xl text-emerald-600"></i>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Blog Posts</h5>
                  <p className="text-sm text-gray-600">SEO-optimized articles with structured sections and engaging hooks</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg mb-3">
                    <i className="ri-chat-3-line text-xl text-teal-600"></i>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Social Media</h5>
                  <p className="text-sm text-gray-600">Platform-specific content with optimal length and hashtag strategy</p>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-lg mb-3">
                    <i className="ri-mail-line text-xl text-cyan-600"></i>
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Email Campaigns</h5>
                  <p className="text-sm text-gray-600">Conversion-focused emails with personalization and clear CTAs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Multi-Model Orchestration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Implemented a multi-model approach that leverages the unique strengths of different AI models: GPT-4 for creative content, Claude for long-form analytical pieces, and Gemini for multilingual content. An intelligent routing system selects the optimal model based on content type and requirements.
              </p>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Model Selection Strategy</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-purple-600 w-24">GPT-4</div>
                    <div className="text-sm text-gray-700">Creative content, social media, catchy headlines, marketing copy</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-amber-600 w-24">Claude</div>
                    <div className="text-sm text-gray-700">Long-form articles, technical documentation, detailed analysis</div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-blue-600 w-24">Gemini</div>
                    <div className="text-sm text-gray-700">Multilingual content, global campaigns, translation-heavy projects</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Quality Assurance Pipeline</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built a multi-stage QA system that automatically checks generated content for brand compliance, SEO optimization, factual accuracy, and readability. Content is scored across multiple dimensions before human review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">280%</div>
              <p className="text-gray-600 font-medium">Productivity Increase</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-teal-600 mb-2">65%</div>
              <p className="text-gray-600 font-medium">Cost Reduction</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">8</div>
              <p className="text-gray-600 font-medium">Languages Supported</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-gray-600 font-medium">First-Draft Approval</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Brand voice consistency is achievable at scale with properly engineered prompt frameworks that capture nuanced communication styles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Different AI models excel at different content types; intelligent model selection significantly improves output quality</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Automated quality assurance reduces human review time while maintaining high standards for published content</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Content-specific prompt templates are more effective than generic generation approaches for professional marketing use cases</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
