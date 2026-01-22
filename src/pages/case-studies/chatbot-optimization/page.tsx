import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function ChatbotOptimization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="font-medium">Back to Portfolio</span>
          </button>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Enterprise AI Solution
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Customer Support Chatbot Optimization
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Engineered advanced prompt strategies that reduced response errors by 47% and improved customer satisfaction scores by 35% for a Fortune 500 e-commerce platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="text-lg font-semibold text-gray-900">Fortune 500 E-commerce</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-lg font-semibold text-gray-900">6 months</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-lg font-semibold text-gray-900">GPT-4, Claude</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Impact</p>
              <p className="text-lg font-semibold text-purple-600">47% Error Reduction</p>
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
              The client's existing chatbot system was experiencing high error rates, frequent misunderstandings of customer intent, and inconsistent response quality. With over 50,000 daily customer interactions, these issues were significantly impacting customer satisfaction and increasing support costs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-red-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4">
                  <i className="ri-error-warning-line text-2xl text-red-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">High Error Rate</h3>
                <p className="text-gray-600 text-sm">23% of responses contained factual errors or irrelevant information</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                  <i className="ri-question-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intent Confusion</h3>
                <p className="text-gray-600 text-sm">Poor understanding of multi-intent queries and context switching</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg mb-4">
                  <i className="ri-thumb-down-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Low Satisfaction</h3>
                <p className="text-gray-600 text-sm">Customer satisfaction score of 3.2/5 for chatbot interactions</p>
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
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Multi-Stage Prompt Architecture</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Designed a sophisticated multi-stage prompt system that breaks down customer queries into discrete processing steps: intent classification, context extraction, knowledge retrieval, and response generation. This modular approach improved accuracy and made debugging significantly easier.
              </p>
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                    <i className="ri-code-box-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Example Prompt Structure</h4>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 overflow-x-auto">
{`Stage 1: Intent Classification
"Analyze this customer message and identify:
- Primary intent (return, tracking, product info, etc.)
- Urgency level (high/medium/low)
- Required information to fulfill request"

Stage 2: Context Gathering
"Given intent: [INTENT], extract:
- Order numbers or product IDs mentioned
- Timeline references
- Specific concerns or questions"

Stage 3: Response Generation
"Create response that:
- Directly addresses [INTENT]
- Uses context: [CONTEXT]
- Matches tone: professional, empathetic
- Includes next steps"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Dynamic Few-Shot Learning</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Implemented a dynamic few-shot learning system that retrieves the most relevant conversation examples based on the current query. This approach provided the model with contextually appropriate examples, improving response quality by 38%.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Before</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span>Static examples for all queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span>Generic response patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span>No adaptation to query type</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">After</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-500 mt-1"></i>
                      <span>Query-specific examples retrieved</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-500 mt-1"></i>
                      <span>Contextually relevant patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-check-line text-green-500 mt-1"></i>
                      <span>Adaptive learning from interactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Chain-of-Thought Reasoning</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Integrated chain-of-thought prompting for complex queries, enabling the model to break down multi-step problems and explain its reasoning. This dramatically improved accuracy for policy questions and troubleshooting scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">47%</div>
              <p className="text-gray-600 font-medium">Error Rate Reduction</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">35%</div>
              <p className="text-gray-600 font-medium">CSAT Score Increase</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$2.1M</div>
              <p className="text-gray-600 font-medium">Annual Cost Savings</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Multi-stage prompt architectures significantly outperform single-prompt approaches for complex conversational AI systems</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Dynamic few-shot learning provides better contextual understanding than static example sets</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Chain-of-thought reasoning is essential for handling multi-step customer service scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Continuous monitoring and prompt iteration based on real-world performance data is crucial for long-term success</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
