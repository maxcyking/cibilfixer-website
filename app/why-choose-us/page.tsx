'use client';

import { CheckCircle, X } from 'lucide-react';

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Cibil Fixer?</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover what makes us the most trusted choice for credit improvement services in India.
            Our proven methods and expert guidance have helped thousands achieve their financial goals.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: '🎯',
                  title: 'Proven Success Rate',
                  description: '95% of our clients see significant improvement in their credit score within 90 days.'
                },
                {
                  icon: '⚡',
                  title: 'Fast Results',
                  description: 'Average score improvement of 120+ points, with many clients seeing changes in 30 days.'
                },
                {
                  icon: '🔒',
                  title: 'Secure & Confidential',
                  description: 'Bank-level security ensures your personal and financial information stays protected.'
                },
                {
                  icon: '👨‍💼',
                  title: 'Expert Team',
                  description: 'Certified credit professionals with 10+ years of experience in financial services.'
                },
                {
                  icon: '📱',
                  title: 'Easy Process',
                  description: 'Simple online process with step-by-step guidance and regular progress updates.'
                },
                {
                  icon: '💰',
                  title: 'Money-Back Guarantee',
                  description: 'If we don\'t improve your score as promised, we offer a full money-back guarantee.'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                See how Cibil Fixer stacks up against other credit improvement services in the market.
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Features</th>
                      <th className="text-center p-4 font-semibold">CibilFixer</th>
                      <th className="text-center p-4 font-semibold">Competitor A</th>
                      <th className="text-center p-4 font-semibold">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: 'Success Rate',
                        'CibilFixer': '95%',
                        compA: '75%',
                        compB: '68%'
                      },
                      {
                        feature: 'Average Score Improvement',
                        'CibilFixer': '120+ points',
                        compA: '80 points',
                        compB: '75 points'
                      },
                      {
                        feature: 'Money-Back Guarantee',
                        'CibilFixer': true,
                        compA: false,
                        compB: true
                      },
                      {
                        feature: '24/7 Support',
                        'CibilFixer': true,
                        compA: false,
                        compB: false
                      },
                      {
                        feature: 'Personal Credit Expert',
                        'CibilFixer': true,
                        compA: false,
                        compB: true
                      },
                      {
                        feature: 'Average Processing Time',
                        'CibilFixer': '30-90 days',
                        compA: '90-180 days',
                        compB: '60-120 days'
                      }
                    ].map((row, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                        <td className="text-center p-4">
                          {typeof row.CibilFixer === 'boolean' ? (
                            row.CibilFixer ? (
                              <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-6 w-6 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-primary-600 font-semibold">{row.CibilFixer}</span>
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof row.compA === 'boolean' ? (
                            row.compA ? (
                              <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-6 w-6 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{row.compA}</span>
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof row.compB === 'boolean' ? (
                            row.compB ? (
                              <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="h-6 w-6 text-red-500 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-600">{row.compB}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">120+</div>
                <div className="text-gray-600">Average Score Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-primary-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the Cibil Fixer Difference?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied customers who have transformed their financial future with our expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/raise-request" className="btn-primary">
                  Start Your Journey Today
                </a>
                <a href="/testimonials" className="btn-secondary">
                  Read Success Stories
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 