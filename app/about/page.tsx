'use client';

import { Shield, Target, Users, Award, Heart, Zap } from 'lucide-react';

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CIBIL FIXER</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner for credit repair - transforming financial lives through expert-driven, transparent, and fully legal credit repair solutions.
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
                  Founded in 2017, Cibil Fixer emerged from a simple belief: everyone deserves access to financial opportunities, 
                  regardless of their credit history. Our founders, experienced financial professionals, witnessed firsthand 
                  how credit challenges could derail dreams and limit potential.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  What started as a mission to help a few individuals has grown into a comprehensive platform serving 
                  thousands of customers across India. We've helped people secure home loans, start businesses, 
                  and regain financial confidence through our proven credit improvement strategies.
                </p>
                <p className="text-lg text-gray-600">
                  Today, Cibil Fixer stands as a trusted partner in financial wellness, combining cutting-edge technology 
                  with personalized service to deliver measurable results for our clients.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  CIBIL Fixer is committed to transforming financial lives by providing expert-driven, transparent, and fully legal credit repair solutions. The mission is to empower individuals and businesses to overcome the challenges of low CIBIL scores, negative credit entries, and repeated loan rejections, enabling them to achieve their financial aspirations. Each client receives personalized analysis and actionable guidance, fostering meaningful improvements in their credit profile and opening doors to renewed financial opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  The vision of CIBIL Fixer is to become the most trusted and respected credit improvement partner in India, setting industry benchmarks for integrity, service excellence, and transparency. CIBIL Fixer envisions a future where everyone has access to fair credit, seamless loan approvals, and the ability to build strong financial reputations. By leveraging innovation, professional expertise, and customer-centric approaches, CIBIL Fixer strives to elevate the standards of credit repair and financial advisory for individuals and businesses alike.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Integrity</h4>
                  <p className="text-gray-600 text-center">Ethical conduct is the cornerstone of all services provided. CIBIL Fixer maintains the highest standards of honesty, transparency, and openness in every interaction, earning trust through unwavering integrity.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Customer-Focused Approach</h4>
                  <p className="text-gray-600 text-center">The needs, concerns, and goals of each client are prioritized. CIBIL Fixer's team ensures personalized attention, understanding that every situation is unique and every solution must be crafted to fit individual circumstances.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Confidentiality & Data Security</h4>
                  <p className="text-gray-600 text-center">All client information and financial data are treated with utmost confidentiality and protected with advanced security measures, fostering a safe and trusting environment for credit repair.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Professionalism in Service Delivery</h4>
                  <p className="text-gray-600 text-center">CIBIL Fixer is committed to delivering expert guidance, accurate analysis, and reliable solutions. The team is punctual, proactive, and responsive, providing the highest caliber of customer service from start to finish.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Excellence & Continuous Improvement</h4>
                  <p className="text-gray-600 text-center">Striving always to exceed expectations, CIBIL Fixer pursues excellence in results, communication, and innovation. Ongoing learning and adaptation allow the company to deliver cutting-edge credit solutions and advisory.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">Accountability</h4>
                  <p className="text-gray-600 text-center">Taking responsibility for outcomes and being transparent about the process ensures clients always know where they stand, and have confidence in the reliability of services offered.</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose CIBIL FIXER?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Results-Oriented Credit Repair</h4>
                  <p className="text-gray-600">
                    CIBIL Fixer specializes in tangible improvements to CIBIL and credit scores, offering robust strategies that positively impact loan and credit card eligibility.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Process from Analysis to Improvement</h4>
                  <p className="text-gray-600">
                    Each client's credit report is thoroughly analyzed to pinpoint issues such as negative accounts, overdue payments, settlements, and wrong flagging. Customized plans are then developed to rectify these issues for score enhancement.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Legal Protection and Compliance</h4>
                  <p className="text-gray-600">
                    With a 100% legal process, clients enjoy peace of mind knowing that every action taken by CIBIL Fixer is in strict accordance with Indian financial laws and regulations.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Transparent and Honest Communication</h4>
                  <p className="text-gray-600">
                    Clients are kept informed at every stage, from credit report analysis to the resolution of issues. All costs, timelines, and steps are shared upfront, with no hidden fees or surprise conditions.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Complete Financial Support</h4>
                  <p className="text-gray-600">
                    In addition to credit repair, CIBIL Fixer provides assistance in loan and credit card applications, increasing the client's chances of approval after their credit score is improved, along with financial advice for future stability.
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Personalized Attention and Dedication</h4>
                  <p className="text-gray-600">
                    Each client is treated as a valued partner, receiving dedicated support, personalized solutions, and regular follow-ups to ensure sustained credit health and financial progress.
                  </p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 md:col-span-2">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">High Client Satisfaction and Professional Trust</h4>
                  <p className="text-gray-600">
                    CIBIL Fixer's reputation is built on delivering results and maintaining a client-first philosophy, earning the trust of thousands of happy individuals and professionals who refer and recommend its services.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Credit Score?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied customers who have improved their credit health with CIBIL FIXER.
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