export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-white/30 rounded-full mb-4">
            <span className="text-white/80 text-xs uppercase tracking-wider font-semibold">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Tools & Technologies</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across leading AI platforms, programming languages, and prompt engineering methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#0066FF]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0066FF] to-[#6B46C1] rounded-lg">
                  <i className="ri-openai-fill text-xl text-white"></i>
                </div>
                LLM Platforms
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-chat-4-fill text-2xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">ChatGPT</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-robot-2-fill text-2xl text-[#6B46C1]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Claude</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-google-fill text-2xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Gemini</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-twitter-x-fill text-2xl text-[#6B46C1]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Grok</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-meta-fill text-2xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Meta AI</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-search-eye-fill text-2xl text-[#6B46C1]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Perplexity</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-brain-fill text-2xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">DeepSeek</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-ai-generate text-2xl text-[#6B46C1]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Manus</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#6B46C1]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#6B46C1] to-[#0066FF] rounded-lg">
                  <i className="ri-lightbulb-flash-fill text-xl text-white"></i>
                </div>
                Prompt Techniques
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#0066FF]"></i>
                  <span className="text-sm">Zero-shot Prompting</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#6B46C1]"></i>
                  <span className="text-sm">Few-shot Learning</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#0066FF]"></i>
                  <span className="text-sm">Chain-of-Thought</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#6B46C1]"></i>
                  <span className="text-sm">Context Management</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#0066FF]"></i>
                  <span className="text-sm">Prompt Optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#7C9A3D]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#7C9A3D] to-[#0066FF] rounded-lg">
                  <i className="ri-code-s-slash-fill text-xl text-white"></i>
                </div>
                Programming & Automation
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-python-fill text-3xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Python</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-javascript-fill text-3xl text-[#6B46C1]"></i>
                  </div>
                  <div className="text-sm text-gray-300">JavaScript</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-terminal-box-fill text-3xl text-[#7C9A3D]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Bash</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-git-branch-fill text-3xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Git</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#0066FF]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0066FF] to-[#7C9A3D] rounded-lg">
                  <i className="ri-palette-fill text-xl text-white"></i>
                </div>
                Design & Prototyping
              </h3>
              <div className="flex gap-6 justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-pen-nib-fill text-3xl text-[#6B46C1]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Figma AI</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2 bg-white/5 rounded-lg">
                    <i className="ri-image-edit-fill text-3xl text-[#0066FF]"></i>
                  </div>
                  <div className="text-sm text-gray-300">Canva</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#6B46C1]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#6B46C1] to-[#7C9A3D] rounded-lg">
                  <i className="ri-line-chart-fill text-xl text-white"></i>
                </div>
                Analysis & Testing
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#0066FF]"></i>
                  <span className="text-sm">Performance Metrics</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#6B46C1]"></i>
                  <span className="text-sm">Error Rate Analysis</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <i className="ri-checkbox-circle-fill text-[#7C9A3D]"></i>
                  <span className="text-sm">Bias Detection</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#0066FF]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#0066FF] to-[#6B46C1] rounded-lg">
                  <i className="ri-time-fill text-xl text-white"></i>
                </div>
                AI Model Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">OpenAI GPT Series</span>
                    <span className="text-[#0066FF] font-semibold">5+ years</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0066FF] to-[#6B46C1] w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Anthropic Claude</span>
                    <span className="text-[#6B46C1] font-semibold">3+ years</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#6B46C1] to-[#0066FF] w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Google Gemini</span>
                    <span className="text-[#7C9A3D] font-semibold">2+ years</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#7C9A3D] to-[#0066FF] w-2/3"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Meta AI & Llama</span>
                    <span className="text-[#0066FF] font-semibold">2+ years</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#0066FF] to-[#7C9A3D] w-2/3"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Specialized Models</span>
                    <span className="text-[#6B46C1] font-semibold">4+ years</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#6B46C1] to-[#7C9A3D] w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2332] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#7C9A3D]/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#7C9A3D] to-[#6B46C1] rounded-lg">
                  <i className="ri-medal-fill text-xl text-white"></i>
                </div>
                Specializations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <i className="ri-meta-fill text-3xl text-[#0066FF] mb-2"></i>
                  <div className="text-xs text-gray-300">Meta Frontend</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <i className="ri-google-fill text-3xl text-[#6B46C1] mb-2"></i>
                  <div className="text-xs text-gray-300">Google UX</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <i className="ri-robot-fill text-3xl text-[#7C9A3D] mb-2"></i>
                  <div className="text-xs text-gray-300">IBM AI Engineer</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <i className="ri-code-box-fill text-3xl text-[#0066FF] mb-2"></i>
                  <div className="text-xs text-gray-300">IBM Fullstack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
