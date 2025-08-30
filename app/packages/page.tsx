import Link from 'next/link';
import { CheckCircle, Star, Crown, Zap, X } from 'lucide-react';

export default function Page() {
  const packages = [
    {
      name: "Basic",
      icon: CheckCircle,
      price: "₹4,900",
      originalPrice: null,
      duration: "Most Suited for Quick Correction of Errors",
      description: "Perfect for beginners looking to improve their credit score",
      features: [
        { name: "Credit Report Analysis", included: true },
        { name: "Correction in Credit Report", included: true },
        { name: "Loan Closure Update", included: true },
        { name: "Overdue Rectification", included: true },
        { name: "Disputed Account Removal", included: true },
        { name: "Credit Score Improvement", included: false }
      ],
      recommended: false,
      savings: null
    },
    {
      name: "Score Boost",
      icon: Star,
      price: "₹9,900",
      originalPrice: null,
      duration: "Most Suited for Improvement in Credit Score",
      description: "Focused on improving your credit score effectively",
      features: [
        { name: "Credit Report Analysis", included: true },
        { name: "Correction in Credit Report", included: true },
        { name: "Loan Closure Update", included: true },
        { name: "Overdue Rectification", included: true },
        { name: "Disputed Account Removal", included: true },
        { name: "Credit Score Improvement", included: true }
      ],
      recommended: false,
      savings: null
    },
    {
      name: "Standard",
      icon: Crown,
      price: "₹14,900",
      originalPrice: null,
      duration: "Most Suited for Overall Correction & Score Improvement",
      description: "Comprehensive solution for credit correction and improvement",
      features: [
        { name: "Credit Report Analysis", included: true },
        { name: "Correction in Credit Report", included: true },
        { name: "Loan Closure Update", included: true },
        { name: "Overdue Rectification", included: true },
        { name: "Disputed Account Removal", included: true },
        { name: "Credit Score Improvement", included: true },
        { name: "Settlement Flag Removal", included: true },
        { name: "Suit Filed Flag Removal", included: true },
        { name: "Write-off/Negative Flag Removal", included: true },
        { name: "Correction in upto 3 Accounts", included: true },
        { name: "Dedicated Relationship Manager", included: false }
      ],
      recommended: true,
      savings: null
    },
    {
      name: "Premium",
      icon: Zap,
      price: "₹19,900",
      originalPrice: null,
      duration: "Premium Package for All Sorts of Issues",
      description: "Ultimate solution with all features and dedicated support",
      features: [
        { name: "Credit Report Analysis", included: true },
        { name: "Correction in Credit Report", included: true },
        { name: "Loan Closure Update", included: true },
        { name: "Overdue Rectification", included: true },
        { name: "Disputed Account Removal", included: true },
        { name: "Credit Score Improvement", included: true },
        { name: "Settlement Flag Removal", included: true },
        { name: "Suit Filed Flag Removal", included: true },
        { name: "Write-off / Negative Flag Removal", included: true },
        { name: "No Limit on Correction of Account", included: true },
        { name: "Dedicated Relationship Manager", included: true },
        { name: "Dedicated Hotline for Quick Resolution", included: true }
      ],
      recommended: false,
      savings: null
    },
    {
      name: "Commercial",
      icon: Star,
      price: "₹24,900",
      originalPrice: null,
      duration: "Most Suited for CMR Rank & Other Issues",
      description: "Specialized package for commercial credit requirements",
      features: [
        { name: "Commercial Report Analysis", included: true },
        { name: "Correction in Commercial Report", included: true },
        { name: "CMR Rank Improvement", included: true },
        { name: "Loan Closure Update", included: true },
        { name: "Overdue Rectification", included: true },
        { name: "Disputed Account Removal", included: true },
        { name: "Settlement Flag Removal", included: true },
        { name: "Suit Filed Flag Removal", included: true },
        { name: "Write-off / Negative Flag Removal", included: true },
        { name: "Correction in upto 2 Accounts", included: true },
        { name: "Dedicated Relationship Manager", included: false },
        { name: "Dedicated Hotline for Quick Resolution", included: false }
      ],
      recommended: false,
      savings: null
    },
    {
      name: "Premium Commercial",
      icon: Crown,
      price: "₹49,900",
      originalPrice: null,
      duration: "Premium Package for All Sorts of Issues",
      description: "Ultimate commercial solution with unlimited corrections",
      features: [
        { name: "Commercial Report Analysis", included: true },
        { name: "Correction in Commercial Report", included: true },
        { name: "CMR Rank Improvement", included: true },
        { name: "Loan Closure Update", included: true },
        { name: "Overdue Rectification", included: true },
        { name: "Disputed Account Removal", included: true },
        { name: "Settlement Flag Removal", included: true },
        { name: "Suit Filed Flag Removal", included: true },
        { name: "Write-off / Negative Flag Removal", included: true },
        { name: "No Limit on Correction of Account", included: true },
        { name: "Dedicated Relationship Manager", included: true },
        { name: "Dedicated Hotline for Quick Resolution", included: true }
      ],
      recommended: false,
      savings: null
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Cibil Fixer Service Packages</h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Your Trusted Partner for Credit Repair - Choose from our comprehensive packages designed for individual and commercial credit improvement needs.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-visible ${pkg.recommended ? 'ring-2 ring-primary-500 relative mt-6' : ''
                  }`}>
                  {pkg.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`${pkg.recommended ? 'pt-8 px-5 pb-5' : 'p-5'}`}>
                    <div className="text-center mb-4">
                      <IconComponent className={`h-8 w-8 mx-auto mb-2 ${pkg.recommended ? 'text-primary-600' : 'text-gray-600'
                        }`} />
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>

                      <div className="mb-3">
                        <div className="flex items-center justify-center space-x-2 mb-1">
                          <span className="text-2xl font-bold text-gray-900">{pkg.price}</span>
                          {pkg.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                          )}
                        </div>
                        {pkg.savings && (
                          <div className="text-primary-600 font-semibold text-sm">{pkg.savings}</div>
                        )}
                        <div className="text-gray-600 text-xs">{pkg.duration}</div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <h4 className="text-sm font-semibold text-green-800 mb-2">FEATURES</h4>
                      <ul className="space-y-1.5">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            {feature.included ? (
                              <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`text-xs ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/raise-request?package=${encodeURIComponent(pkg.name)}&price=${encodeURIComponent(pkg.price)}`}
                      className={`w-full block text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors duration-200 ${pkg.recommended
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                    >
                      Select This Package
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credit Score Improvement Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Score Improvement Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Analysis</h3>
                <p className="text-sm text-gray-600">Comprehensive review of your credit report to identify improvement areas</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Resolution</h3>
                <p className="text-sm text-gray-600">Expert assistance in identifying and resolving credit report errors</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Score Enhancement</h3>
                <p className="text-sm text-gray-600">Proven strategies to improve your credit score effectively</p>
              </div>
            </div>

            <div className="bg-primary-50 p-5 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help Choosing the Right Package?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our credit experts can help you select the perfect package based on your current credit situation and financial goals.
              </p>
              <Link href="/raise-request" className="btn-primary">
                Get Free Consultation
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Ready to Improve Your Credit Score?</h3>
              <p className="text-blue-100 mb-4 text-sm">Contact our credit experts today for personalized assistance</p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">9414118156</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-400 p-2 rounded-full">
                    <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">WhatsApp Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 