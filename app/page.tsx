'use client';

import Link from 'next/link';
import {
  Shield,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Star,
  CheckCircle,
  BarChart3,
  Clock,
  HeadphonesIcon,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div>
      {/* Hero/Banner Section */}
      <section className="bg-gradient-to-br from-primary-100 via-white to-secondary-50 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23e5e5e5' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")` }}></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-200 rounded-full blur-2xl animate-pulse delay-500"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium animate-slideInLeft">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Trusted by 1000+ customers
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="animate-slideInLeft inline-block">Improve Your</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 animate-gradient bg-300% animate-slideInLeft inline-block delay-100">
                  CIBIL Score
                </span>{' '}
                <br />
                <span className="animate-slideInLeft inline-block delay-200">In few steps</span>
              </h1>

              <p className="text-xl text-neutral-600 leading-relaxed animate-fadeIn delay-300">
                Transform your financial future with India's most trusted credit improvement service.
                Get personalized strategies, expert guidance, and see real results in just weeks.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  href="/raise-request"
                  className="btn-primary text-lg px-8 py-4 rounded-full flex items-center justify-center group transform hover:scale-105 transition-all duration-300"
                >
                  Raise Request Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/packages"
                  className="btn-secondary text-lg px-8 py-4 rounded-full hover:bg-secondary-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                >
                  View Our Packages
                </Link>
              </motion.div>

              <div className="flex flex-wrap gap-6 pt-4 animate-fadeIn delay-500">
                <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                  <div className="bg-green-100 p-1 rounded-full animate-bounce">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">99% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                  <div className="bg-blue-100 p-1 rounded-full animate-bounce delay-100">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">100% Secure</span>
                </div>
                <div className="flex items-center space-x-2 hover:scale-105 transition-transform">
                  <div className="bg-primary-100 p-1 rounded-full animate-bounce delay-200">
                    <Star className="h-4 w-4 text-primary-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Hero Illustration/Animation */}
            <div className="lg:flex flex-col justify-center items-center hidden">
              <div className="relative w-full max-w-lg animate-float">
                {/* Donut Chart */}
                <div className="relative flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="338" viewBox="0 0 1080 912" fill="none" className="w-full h-auto max-w-md">
                    <defs>
                      <style>
                        {`
                          @keyframes segmentAppear {
                            0% { opacity: 0; transform: scale(0.8) rotate(-10deg); }
                            100% { opacity: 1; transform: scale(1) rotate(0deg); }
                          }
                          .segment-1 { 
                            animation: segmentAppear 0.6s ease-out 0.2s both;
                            transform-origin: center;
                          }
                          .segment-2 { 
                            animation: segmentAppear 0.6s ease-out 0.4s both;
                            transform-origin: center;
                          }
                          .segment-3 { 
                            animation: segmentAppear 0.6s ease-out 0.6s both;
                            transform-origin: center;
                          }
                          .segment-4 { 
                            animation: segmentAppear 0.6s ease-out 0.8s both;
                            transform-origin: center;
                          }
                          .segment-5 { 
                            animation: segmentAppear 0.6s ease-out 1.0s both;
                            transform-origin: center;
                          }
                          .segment-6 { 
                            animation: segmentAppear 0.6s ease-out 1.2s both;
                            transform-origin: center;
                          }
                          .segment-7 { 
                            animation: segmentAppear 0.6s ease-out 1.4s both;
                            transform-origin: center;
                          }
                        `}
                      </style>
                    </defs>
                    <path className="segment-1" d="M616.049 479.533C617.742 481.281 616.049 600.142 616.049 600.142C616.049 600.142 609.276 633.353 577.108 659.572C544.94 685.792 512.772 701.523 512.772 701.523C512.772 701.523 483.99 687.54 448.436 659.572C412.882 631.605 411.189 601.89 411.189 601.89C411.189 601.89 409.496 483.029 411.189 479.533C412.883 476.037 442.459 473.295 461.981 467.297C482.23 461.077 512.772 448.07 512.772 448.07C512.772 448.07 542.226 461.224 561.871 467.297C582.619 473.712 614.355 477.785 616.049 479.533Z" fill="#FFDE4C" stroke="#FDE800" />
                    <path className="segment-2" d="M581.861 498.512C619.606 444.798 669.539 389.232 669.539 389.232C669.539 389.232 610.502 434.16 575.963 466.284C540.908 498.887 491.824 554.819 491.824 554.819C491.824 554.819 468.223 535.31 451.327 525.184C436.26 516.154 410.437 505.921 410.437 505.921C410.437 505.921 435.609 532.486 450.934 550.373C472.845 575.949 504.405 617.793 504.405 617.793C504.405 617.793 544.116 552.226 581.861 498.512Z" fill="#003F9E" stroke="black" />
                    <path className="segment-3" d="M0.00374373 531.82H182.293C182.293 531.82 182.493 463.168 206.368 401.698C232.737 333.809 278.596 289.681 278.596 289.681L149.045 167.48C149.045 167.48 74.5243 234.238 36.6908 343.992C-1.14274 453.747 0.00374373 531.82 0.00374373 531.82Z" fill="#FF0000" />
                    <path className="segment-4" d="M791.069 280.629L918.327 152.771C918.327 152.771 852.978 86.0128 746.356 41.8847C639.734 -2.24343 549.163 0.019583 549.163 0.019583L545.724 177.663C545.724 177.663 619.098 181.058 677.568 204.819C736.038 228.58 791.069 280.629 791.069 280.629Z" fill="#FFDE4C" />
                    <path className="segment-5" d="M802.533 293.075L930.938 167.48C930.938 167.48 1002.02 235.369 1041 334.94C1079.98 434.511 1079.98 532.951 1079.98 532.951H895.397C895.397 532.951 891.958 462.799 871.321 402.83C844.953 334.94 802.533 293.075 802.533 293.075Z" fill="#72EF45" />
                    <path className="segment-6" d="M894.251 546.529L1079.98 549.923C1079.98 549.923 1079.98 642.706 1035.27 744.54C990.554 846.374 918.327 912 918.327 912L787.629 781.879C787.629 781.879 841.513 732.093 866.736 669.861C891.958 617.813 894.251 546.529 894.251 546.529Z" fill="#00A100" />
                    <path className="segment-7" d="M162.803 153.902L290.061 277.234C290.061 277.234 325.601 237.315 397.829 205.951C460.364 178.795 530.82 177.663 530.82 177.663V0.019583C530.82 0.019583 426.491 0.019583 330.187 41.8847C233.884 83.7498 162.803 153.902 162.803 153.902Z" fill="#FFA41A" />
                  </svg>
                </div>
              </div>



              {/* Three Colored Taglines */}
              <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-2xl">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  1000+ of Happy Clients
                </div>
                <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Trusted by Professionals
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  100% Transparency
                </div>
              </div>

              {/* Credit Bureau Logos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full max-w-2xl">
                <div className="flex items-center justify-center">
                  <img src="/cibil.svg" alt="CIBIL" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/experian.svg" alt="Experian" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/equifax.svg" alt="Equifax" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-center">
                  <img src="/crif-seeklogo.svg" alt="CRIF High Mark" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="badge badge-primary mx-auto mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Your Journey to Financial Freedom Starts Here
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-12">
              We understand that a poor credit score can limit your financial opportunities.
              Our proven methodology and expert guidance have helped thousands of clients
              improve their CIBIL scores and achieve their financial goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-primary-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-10 w-10 text-primary-700" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Score Analysis</h3>
                <p className="text-neutral-600">Comprehensive CIBIL report analysis to identify improvement areas</p>
              </div>
              <div className="text-center group">
                <div className="bg-secondary-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-10 w-10 text-secondary-700" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Secure Process</h3>
                <p className="text-neutral-600">Bank-level security ensures your personal information stays protected</p>
              </div>
              <div className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-10 w-10 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Proven Results</h3>
                <p className="text-neutral-600">Average score improvement of 150+ points within 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-secondary mx-auto mb-6">
              <Award className="h-4 w-4 mr-2" />
              Our Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We offer comprehensive credit improvement solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Quick Turnaround",
                description: "See results in as little as 30 days with our accelerated process",
                color: "primary"
              },
              {
                icon: HeadphonesIcon,
                title: "24/7 Support",
                description: "Round-the-clock customer support to answer all your queries",
                color: "secondary"
              },
              {
                icon: Award,
                title: "Expert Team",
                description: "Certified financial experts with 10+ years of experience",
                color: "primary"
              },
              {
                icon: Shield,
                title: "Data Security",
                description: "Advanced encryption and security measures protect your data",
                color: "secondary"
              },
              {
                icon: Users,
                title: "1000+ Clients",
                description: "Successfully served thousands of satisfied customers",
                color: "primary"
              },
              {
                icon: TrendingUp,
                title: "Guaranteed Results",
                description: "Money-back guarantee if we don't improve your score",
                color: "secondary"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card group hover:scale-105 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color === 'primary' ? 'bg-primary-100' : 'bg-secondary-100'
                    }`}>
                    <IconComponent className={`h-7 w-7 ${feature.color === 'primary' ? 'text-primary-700' : 'text-secondary-700'
                      }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-primary mx-auto mb-6">
              <Star className="h-4 w-4 mr-2" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600">
              Real stories from real people who transformed their financial lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Manohar Singh",
                role: "Business Owner, Bikaner",
                content: "My CIBIL score improved from 580 to 750 in just 3 months. Now I got my business loan approved!",
                rating: 5,
                improvement: "+170"
              },
              {
                name: "Chuka Devi",
                role: "Small-scale business, Degana, Rajasthan",
                content: "Professional service with excellent results. They helped me get my business loan at the best rates.",
                rating: 5,
                improvement: "+140"
              },
              {
                name: "Dr. Sunita Verma",
                role: "Doctor, Jaipur",
                content: "Outstanding support throughout the process. Highly recommend their services to everyone.",
                rating: 5,
                improvement: "+160"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary-500 fill-current" />
                    ))}
                  </div>
                  <span className="badge badge-primary">{testimonial.improvement} points</span>
                </div>
                <p className="text-neutral-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-primary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container-custom text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            Ready to Improve Your Credit Score?
          </h2>
          <p className="text-xl text-neutral-800 mb-10 max-w-2xl mx-auto">
            Don't let a poor credit score hold you back. Take the first step towards financial freedom today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Choose Your Package
            </Link>
            <Link href="/contact" className="bg-white hover:bg-neutral-100 text-neutral-900 font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 