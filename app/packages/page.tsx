import Link from 'next/link';
import { CheckCircle, Star, Crown, Zap, X } from 'lucide-react';

export default function Page() {
  const packages = [
    {
      name: "Basic Package",
      icon: CheckCircle,
      price: "₹15,999",
      originalPrice: "₹19,999",
      duration: "3 Months",
      description: "Perfect for beginners looking to improve their credit score",
      features: [
        { name: "Detailed Analysis of Credit Report", included: true },
        { name: "Identification of Errors", included: true },
        { name: "Issue Resolution", included: true },
        { name: "3 Credit Reports", included: true },
        { name: "Score Improvement Program", included: false },
        { name: "Access to Senior Credit Expert", included: false }
      ],
      recommended: false,
      savings: "Save ₹4,000"
    },
    {
      name: "Commercial Package",
      icon: Star,
      price: "₹24,999",
      originalPrice: "₹29,999",
      duration: "3 Months",
      description: "Most popular choice for comprehensive credit improvement",
      features: [
        { name: "Detailed Analysis of Credit Report", included: true },
        { name: "Identification of Errors", included: true },
        { name: "Issue Resolution", included: true },
        { name: "3 Credit Reports", included: true },
        { name: "Score Improvement Program", included: true },
        { name: "Access to Senior Credit Expert", included: true }
      ],
      recommended: true,
      savings: "Save ₹5,000"
    },
    {
      name: "Standard Package",
      icon: Crown,
      price: "₹29,999",
      originalPrice: "₹39,999",
      duration: "6 Months",
      description: "Enhanced solution with more credit reports and score improvement",
      features: [
        { name: "Detailed Analysis of Credit Report", included: true },
        { name: "Identification of Errors", included: true },
        { name: "Issue Resolution", included: true },
        { name: "6 Credit Reports", included: true },
        { name: "Score Improvement Program", included: true },
        { name: "Access to Senior Credit Expert", included: false }
      ],
      recommended: false,
      savings: "Save ₹10,000"
    },
    {
      name: "Premium Package",
      icon: Zap,
      price: "₹39,999",
      originalPrice: "₹49,999",
      duration: "6 Months",
      description: "Ultimate solution with all features and senior expert access",
      features: [
        { name: "Detailed Analysis of Credit Report", included: true },
        { name: "Identification of Errors", included: true },
        { name: "Issue Resolution", included: true },
        { name: "3 Credit Reports", included: true },
        { name: "Score Improvement Program", included: true },
        { name: "Access to Senior Credit Expert", included: true }
      ],
      recommended: false,
      savings: "Save ₹10,000"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Perfect Plan</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Select from our carefully crafted packages designed to meet different credit improvement needs and budgets.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  pkg.recommended ? 'ring-4 ring-primary-500 relative' : ''
                }`}>
                  {pkg.recommended && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <IconComponent className={`h-12 w-12 mx-auto mb-4 ${
                        pkg.recommended ? 'text-primary-600' : 'text-gray-600'
                      }`} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                          <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                        </div>
                        <div className="text-primary-600 font-semibold">{pkg.savings}</div>
                        <div className="text-gray-600">{pkg.duration}</div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold text-red-800 mb-3">FEATURES</h4>
                      <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                            {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                              {feature.name}
                            </span>
                        </li>
                      ))}
                    </ul>
                    </div>

                    <Link 
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                        pkg.recommended 
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Credit Score Improvement Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Analysis</h3>
                <p className="text-gray-600">Comprehensive review of your credit report to identify improvement areas</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Resolution</h3>
                <p className="text-gray-600">Expert assistance in identifying and resolving credit report errors</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Score Enhancement</h3>
                <p className="text-gray-600">Proven strategies to improve your credit score effectively</p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help Choosing the Right Package?</h3>
              <p className="text-gray-600 mb-4">
                Our credit experts can help you select the perfect package based on your current credit situation and financial goals.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Credit Score?</h3>
              <p className="text-blue-100 mb-6">Contact our credit experts today for personalized assistance</p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">+91-94141-18156</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-green-400 p-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">WhatsApp Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 