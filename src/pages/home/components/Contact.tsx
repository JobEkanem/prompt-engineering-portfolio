import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using mailto link
      const subject = encodeURIComponent(`New Contact Form Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:busandall@yahoo.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0066FF] to-[#6B46C1] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 border border-white/30 rounded-full mb-4">
            <span className="text-white text-xs uppercase tracking-wider font-semibold">LET'S CONNECT</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Optimize<br />Your AI Systems?
          </h2>
          <p className="text-xl text-white/90 font-light">
            Available for full-time opportunities and consulting projects
          </p>
        </div>

        <form 
          id="contact-form"
          data-readdy-form
          onSubmit={handleSubmit} 
          className="space-y-6 mb-12"
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/60 py-4 px-2 focus:outline-none focus:border-white transition-colors text-lg"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/60 py-4 px-2 focus:outline-none focus:border-white transition-colors text-lg"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              maxLength={500}
              rows={5}
              className="w-full bg-transparent border-b-2 border-white/50 text-white placeholder-white/60 py-4 px-2 focus:outline-none focus:border-white transition-colors text-lg resize-none"
            ></textarea>
            <div className="text-right text-white/60 text-sm mt-1">
              {formData.message.length}/500 characters
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[#0066FF] font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-lg disabled:opacity-50 whitespace-nowrap"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <i className="ri-arrow-right-line"></i>
          </button>

          {submitStatus === 'success' && (
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 text-white text-center">
              <i className="ri-checkbox-circle-fill text-2xl mb-2"></i>
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-lg p-4 text-white text-center">
              <i className="ri-error-warning-fill text-2xl mb-2"></i>
              <p>Oops! Something went wrong. Please try again.</p>
            </div>
          )}
        </form>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:busandall@yahoo.com"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all border border-white/30"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mx-auto mb-3">
              <i className="ri-mail-fill text-2xl text-[#0066FF]"></i>
            </div>
            <div className="text-white font-medium mb-1">Email</div>
            <div className="text-white/80 text-sm">busandall@yahoo.com</div>
          </a>

          <a
            href="https://www.linkedin.com/in/jobekanem"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all border border-white/30"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mx-auto mb-3">
              <i className="ri-linkedin-fill text-2xl text-[#0066FF]"></i>
            </div>
            <div className="text-white font-medium mb-1">LinkedIn</div>
            <div className="text-white/80 text-sm">Connect with me</div>
          </a>

          <a
            href="https://github.com/JobEkanem"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all border border-white/30"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mx-auto mb-3">
              <i className="ri-github-fill text-2xl text-[#0066FF]"></i>
            </div>
            <div className="text-white font-medium mb-1">GitHub</div>
            <div className="text-white/80 text-sm">View my code</div>
          </a>
        </div>
      </div>
    </section>
  );
}
