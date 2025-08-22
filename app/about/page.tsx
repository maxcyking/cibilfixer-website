'use client';

import { Shield, Target, Users, Award, Heart, Zap } from 'lucide-react';

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CibilFixer</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We are dedicated to helping individuals and businesses achieve financial wellness through expert credit improvement services and personalized CIBIL score solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Company Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2018, CibilFixer emerged from a simple belief: everyone deserves access to financial opportunities, 
                  regardless of their credit history. Our founders, experienced financial professionals, witnessed firsthand 
                  how credit challenges could derail dreams and limit potential.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  What started as a mission to help a few individuals has grown into a comprehensive platform serving 
                  thousands of customers across India. We've helped people secure home loans, start businesses, 
                  and regain financial confidence through our proven credit improvement strategies.
                </p>
                <p className="text-lg text-gray-600">
                  Today, CibilFixer stands as a trusted partner in financial wellness, combining cutting-edge technology 
                  with personalized service to deliver measurable results for our clients.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize access to financial opportunities by empowering individuals with the tools, 
                  knowledge, and support needed to achieve optimal credit health and long-term financial success.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become India's most trusted credit improvement platform, where every individual has the 
                  opportunity to unlock their financial potential and build a secure, prosperous future.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h4>
                  <p className="text-gray-600">Clear communication and honest guidance throughout your credit improvement journey.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600">Proven strategies and measurable outcomes that make a real difference in your financial life.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Support</h4>
                  <p className="text-gray-600">Dedicated customer service and expert guidance every step of the way.</p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose CibilFixer?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h4>
                  <p className="text-gray-600">
                    Our certified credit professionals have years of experience in financial services and credit management, 
                    ensuring you receive the best possible guidance.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h4>
                  <p className="text-gray-600">
                    With thousands of successful cases and an average score improvement of 120+ points, 
                    our methods are tested and trusted.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Personalized Approach</h4>
                  <p className="text-gray-600">
                    Every credit situation is unique. We provide customized strategies tailored to your specific 
                    financial circumstances and goals.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Technology-Driven</h4>
                  <p className="text-gray-600">
                    Our advanced analytics and monitoring tools ensure precise credit analysis and faster 
                    resolution of credit issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Credit Score?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied customers who have improved their credit health with CibilFixer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/raise-request" className="btn-primary">
                  Start Your Journey
                </a>
                <a href="/contact" className="btn-secondary">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 