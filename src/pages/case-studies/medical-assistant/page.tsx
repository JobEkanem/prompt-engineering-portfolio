import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function MedicalAssistant() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="font-medium">Back to Portfolio</span>
          </button>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              Healthcare Technology
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Medical Documentation Assistant
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Developed a HIPAA-compliant AI system that streamlined clinical documentation, reducing physician paperwork time by 68% while improving documentation accuracy and completeness scores by 52%.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="text-lg font-semibold text-gray-900">Regional Hospital Network</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-lg font-semibold text-gray-900">10 months</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-lg font-semibold text-gray-900">GPT-4, Custom Models</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Impact</p>
              <p className="text-lg font-semibold text-orange-600">68% Time Saved</p>
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
              Physicians at a regional hospital network were spending 3-4 hours daily on documentation, leading to burnout, reduced patient face time, and incomplete medical records. The challenge was to create an AI system that could assist with documentation while maintaining strict HIPAA compliance and medical accuracy standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-red-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4">
                  <i className="ri-time-line text-2xl text-red-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentation Burden</h3>
                <p className="text-gray-600 text-sm">Physicians spent 40-50% of their workday on paperwork and documentation</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                  <i className="ri-file-damage-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Incomplete Records</h3>
                <p className="text-gray-600 text-sm">32% of patient encounters had incomplete or delayed documentation</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg mb-4">
                  <i className="ri-shield-cross-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compliance Risks</h3>
                <p className="text-gray-600 text-sm">Manual processes increased risk of HIPAA violations and coding errors</p>
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
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. HIPAA-Compliant Architecture</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Designed a secure, HIPAA-compliant system architecture with end-to-end encryption, de-identification protocols, and strict access controls. All AI processing happens within the hospital's secure infrastructure with no data leaving the protected environment.
              </p>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Security Layers</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-orange-100 rounded-lg flex-shrink-0">
                        <i className="ri-lock-line text-orange-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Data Encryption</h5>
                        <p className="text-xs text-gray-600">AES-256 encryption at rest and in transit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-lg flex-shrink-0">
                        <i className="ri-shield-check-line text-red-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Access Control</h5>
                        <p className="text-xs text-gray-600">Role-based access with MFA</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-amber-100 rounded-lg flex-shrink-0">
                        <i className="ri-user-unfollow-line text-amber-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">De-identification</h5>
                        <p className="text-xs text-gray-600">Automatic PHI removal and tokenization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-lg flex-shrink-0">
                        <i className="ri-history-line text-yellow-600"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-1">Audit Logging</h5>
                        <p className="text-xs text-gray-600">Complete audit trail for compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Medical-Specific Prompt Engineering</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Developed specialized prompts trained on medical terminology, clinical workflows, and documentation standards. The system understands SOAP notes, ICD-10 codes, CPT codes, and specialty-specific documentation requirements.
              </p>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Documentation Types Supported</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">SOAP Notes</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Subjective findings</li>
                      <li>• Objective data</li>
                      <li>• Assessment</li>
                      <li>• Plan of care</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Procedure Notes</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Pre-procedure assessment</li>
                      <li>• Procedure details</li>
                      <li>• Post-procedure status</li>
                      <li>• Complications</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">Discharge Summaries</h5>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Hospital course</li>
                      <li>• Diagnoses</li>
                      <li>• Treatment summary</li>
                      <li>• Follow-up plans</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Voice-to-Text Integration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Integrated advanced speech recognition with medical vocabulary training, allowing physicians to dictate notes naturally. The system understands medical terminology, corrects common dictation errors, and formats output according to documentation standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Dictation Features</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-mic-line text-orange-600 mt-0.5"></i>
                      <span>Medical terminology recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-mic-line text-orange-600 mt-0.5"></i>
                      <span>Auto-punctuation and formatting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-mic-line text-orange-600 mt-0.5"></i>
                      <span>Context-aware corrections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-mic-line text-orange-600 mt-0.5"></i>
                      <span>Real-time transcription</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Smart Processing</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-brain-line text-red-600 mt-0.5"></i>
                      <span>Automatic section detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-brain-line text-red-600 mt-0.5"></i>
                      <span>Code suggestion (ICD-10/CPT)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-brain-line text-red-600 mt-0.5"></i>
                      <span>Drug name verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-brain-line text-red-600 mt-0.5"></i>
                      <span>Dosage validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Quality Assurance & Validation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built a multi-layer validation system that checks generated documentation for medical accuracy, completeness, and compliance with billing requirements. The system flags potential errors, missing information, and suggests improvements before finalization.
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
              <div className="text-5xl font-bold text-orange-600 mb-2">68%</div>
              <p className="text-gray-600 font-medium">Time Reduction</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">52%</div>
              <p className="text-gray-600 font-medium">Accuracy Improvement</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">89%</div>
              <p className="text-gray-600 font-medium">Physician Satisfaction</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-rose-600 mb-2">$3.8M</div>
              <p className="text-gray-600 font-medium">Annual Savings</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>HIPAA compliance and data security must be foundational architecture decisions, not afterthoughts, in healthcare AI systems</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Medical-specific prompt engineering requires deep understanding of clinical workflows, terminology, and documentation standards</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Voice-to-text integration dramatically improves physician adoption and reduces documentation friction in clinical settings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Multi-layer validation is essential for maintaining medical accuracy and meeting regulatory compliance requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
