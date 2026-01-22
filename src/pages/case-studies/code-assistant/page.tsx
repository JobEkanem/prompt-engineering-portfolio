import { useEffect } from 'react';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function CodeAssistant() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => window.REACT_APP_NAVIGATE('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="font-medium">Back to Portfolio</span>
          </button>
          
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Developer Tools
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise Code Documentation Assistant
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Engineered an intelligent code documentation system that reduced documentation time by 73% while improving code quality scores by 41% across a 500+ developer organization.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="text-lg font-semibold text-gray-900">Tech Enterprise</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-lg font-semibold text-gray-900">5 months</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Platform</p>
              <p className="text-lg font-semibold text-gray-900">Claude, GPT-4</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Impact</p>
              <p className="text-lg font-semibold text-blue-600">73% Time Saved</p>
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
              A large technology company with 500+ developers across multiple teams struggled with inconsistent code documentation, making onboarding difficult and reducing code maintainability. Documentation was often outdated, incomplete, or missing entirely, leading to significant productivity losses and technical debt.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-red-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mb-4">
                  <i className="ri-file-damage-line text-2xl text-red-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Poor Documentation</h3>
                <p className="text-gray-600 text-sm">68% of code modules had incomplete or missing documentation</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mb-4">
                  <i className="ri-team-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Slow Onboarding</h3>
                <p className="text-gray-600 text-sm">New developers took 6-8 weeks to become productive in the codebase</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-xl">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-lg mb-4">
                  <i className="ri-time-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Time Waste</h3>
                <p className="text-gray-600 text-sm">Developers spent 15-20 hours/week understanding undocumented code</p>
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Context-Aware Documentation Generator</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built a sophisticated documentation system that analyzes code context, dependencies, and usage patterns to generate comprehensive, accurate documentation. The system understands not just what code does, but why it exists and how it fits into the larger architecture.
              </p>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Documentation Layers</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                      <i className="ri-file-text-line text-blue-600"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Function/Method Level</h5>
                      <p className="text-sm text-gray-600">Purpose, parameters, return values, exceptions, edge cases, and usage examples</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-lg flex-shrink-0">
                      <i className="ri-folder-line text-indigo-600"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Module/Class Level</h5>
                      <p className="text-sm text-gray-600">Architecture overview, design patterns, dependencies, and integration points</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg flex-shrink-0">
                      <i className="ri-flow-chart text-purple-600"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">System Level</h5>
                      <p className="text-sm text-gray-600">Component interactions, data flow, architectural decisions, and system boundaries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Language-Specific Prompt Engineering</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Developed specialized prompts for each programming language and framework used in the organization, ensuring documentation follows language-specific conventions and best practices. The system understands idioms, patterns, and community standards for Python, JavaScript, TypeScript, Java, Go, and more.
              </p>
              <div className="bg-white rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Example: Python Docstring</h5>
                    <pre className="bg-gray-50 p-4 rounded-lg text-xs text-gray-700 overflow-x-auto">
{`def calculate_user_metrics(
    user_id: str,
    start_date: datetime,
    end_date: datetime
) -> Dict[str, Any]:
    """
    Calculate comprehensive user engagement metrics.
    
    Analyzes user activity within the specified date range
    and returns aggregated metrics including session count,
    total time spent, and feature usage patterns.
    
    Args:
        user_id: Unique identifier for the user
        start_date: Start of analysis period (inclusive)
        end_date: End of analysis period (exclusive)
        
    Returns:
        Dictionary containing:
        - session_count: Total number of sessions
        - total_time: Cumulative time in seconds
        - feature_usage: Dict of feature -> usage count
        
    Raises:
        ValueError: If end_date is before start_date
        UserNotFoundError: If user_id doesn't exist
        
    Example:
        >>> metrics = calculate_user_metrics(
        ...     "user_123",
        ...     datetime(2024, 1, 1),
        ...     datetime(2024, 2, 1)
        ... )
        >>> print(metrics['session_count'])
        45
    """
    # Implementation...`}
                    </pre>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Example: TypeScript JSDoc</h5>
                    <pre className="bg-gray-50 p-4 rounded-lg text-xs text-gray-700 overflow-x-auto">
{`/**
 * Validates and processes user form data
 * 
 * Performs comprehensive validation of user input,
 * sanitizes data, and transforms it into the format
 * required by the backend API.
 * 
 * @param formData - Raw form data from user input
 * @param options - Validation configuration options
 * @param options.strict - Enable strict validation mode
 * @param options.sanitize - Auto-sanitize input strings
 * 
 * @returns Processed and validated user data
 * 
 * @throws {ValidationError}
 * Thrown when input fails validation rules
 * 
 * @throws {SanitizationError}
 * Thrown when sanitization fails
 * 
 * @example
 * const userData = processUserData(
 *   { email: 'user@example.com', age: 25 },
 *   { strict: true, sanitize: true }
 * );
 * 
 * @see {@link UserValidator} for validation rules
 * @since 2.0.0
 */
function processUserData(
  formData: FormData,
  options: ProcessOptions
): ProcessedUserData {
  // Implementation...
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Intelligent Update Detection</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Implemented a system that monitors code changes and automatically identifies when documentation needs updating. The system analyzes git commits, compares function signatures, and detects behavioral changes to trigger documentation refreshes.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Automatic Triggers</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-blue-600 mt-0.5"></i>
                      <span>Function signature changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-blue-600 mt-0.5"></i>
                      <span>New parameters or return types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-blue-600 mt-0.5"></i>
                      <span>Dependency modifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-checkbox-circle-line text-blue-600 mt-0.5"></i>
                      <span>Logic flow alterations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Smart Actions</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-lightbulb-line text-amber-600 mt-0.5"></i>
                      <span>Suggest documentation updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-lightbulb-line text-amber-600 mt-0.5"></i>
                      <span>Flag outdated examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-lightbulb-line text-amber-600 mt-0.5"></i>
                      <span>Generate update drafts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-lightbulb-line text-amber-600 mt-0.5"></i>
                      <span>Notify code authors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Interactive Code Examples</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Created a system that generates realistic, runnable code examples for each documented function. Examples cover common use cases, edge cases, and integration scenarios, making it easy for developers to understand and use the code correctly.
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
              <div className="text-5xl font-bold text-blue-600 mb-2">73%</div>
              <p className="text-gray-600 font-medium">Time Reduction</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">41%</div>
              <p className="text-gray-600 font-medium">Quality Improvement</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600 font-medium">Coverage Achieved</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">60%</div>
              <p className="text-gray-600 font-medium">Faster Onboarding</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Context-aware documentation generation produces significantly better results than generic code-to-docs approaches</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Language-specific prompt engineering ensures documentation follows community conventions and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Automatic update detection keeps documentation synchronized with code changes without manual intervention</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0 mt-1">
                  <i className="ri-check-line text-sm"></i>
                </div>
                <span>Practical, runnable examples dramatically improve documentation usefulness and developer adoption</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
