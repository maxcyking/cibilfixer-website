'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Users, TrendingUp, Award, UserCheck, Target, Rocket, Briefcase, ChevronRight, Eye, EyeOff, IndianRupee, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import DownloadButton from '@/components/DownloadButton';

export default function Page() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    role: 'partner',
    currentWorkplace: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        formData.mobile,
        formData.referralCode,
        formData.role
      );
      // Redirect to success page instead of dashboard
      router.push('/registration-success');
    } catch (error: any) {
      console.error('Registration error:', error);
      setError(error.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-100 via-white to-primary-50 relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='30' cy='30' r='3' fill='%230ea5e9' /%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dots)' /%3E%3C/svg%3E")`}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium animate-slideInLeft">
                <Rocket className="h-4 w-4 mr-2" />
                Join Our Growing Network
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="animate-slideInLeft inline-block">Become a</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 via-primary-500 to-secondary-500 animate-gradient bg-300% animate-slideInLeft inline-block delay-100">
                  Partner
                </span>{' '}
                <br />
                <span className="animate-slideInLeft inline-block delay-200">Earn & Grow</span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed animate-fadeIn delay-300">
                Join India's fastest-growing credit improvement network. Earn attractive commissions 
                while helping people achieve their financial dreams.
              </p>
              
              <div className="grid grid-cols-2 gap-6 animate-fadeIn delay-400">
                <div className="bg-white p-4 rounded-2xl shadow-soft hover:shadow-medium transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-100 p-3 rounded-xl">
                      <IndianRupee className="h-6 w-6 text-primary-700" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-neutral-900">₹50k+</p>
                      <p className="text-sm text-neutral-600">Monthly Earning</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-soft hover:shadow-medium transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary-100 p-3 rounded-xl">
                      <Users className="h-6 w-6 text-secondary-700" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-neutral-900">500+</p>
                      <p className="text-sm text-neutral-600">Active Partners</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-8 animate-fadeIn delay-500">
                <Link href="#benefits" className="btn-ghost flex items-center group">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-neutral-200 rounded-full border-2 border-white"></div>
                  ))}
                  <div className="w-10 h-10 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">+</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="lg:flex justify-center items-center">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto"
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Partner Registration Form
                </h3>

                {error && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="partner">Partner</option>
                      <option value="sales_representative">Sales Representative</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currently Working At
                    </label>
                    <input
                      type="text"
                      name="currentWorkplace"
                      value={formData.currentWorkplace}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., ABC Company, XYZ Institute, Self-employed"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Referral Code (Optional)
                    </label>
                    <input
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter referral code if you have one"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Creating Account...' : 'Register Now'}
                  </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Login here
                  </a>
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-primary mx-auto mb-6">
              <Award className="h-4 w-4 mr-2" />
              Partner Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We provide everything you need to build a successful career in credit improvement sales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: IndianRupee,
                title: "High Commissions",
                description: "Earn 10% commission on every sale with performance bonuses",
                highlight: true
              },
              {
                icon: Briefcase,
                title: "Full Training",
                description: "Comprehensive product training and ongoing professional development",
                highlight: false
              },
              {
                icon: Target,
                title: "Marketing Support",
                description: "Professional materials, lead generation, and advertising support",
                highlight: false
              },
              {
                icon: Award,
                title: "Recognition & Rewards",
                description: "Monthly awards, annual trips, and recognition for top performers",
                highlight: true
              },
              {
                icon: UserCheck,
                title: "Flexible Working",
                description: "Work on your own schedule with full-time or part-time options",
                highlight: false
              },
              {
                icon: TrendingUp,
                title: "Growing Market",
                description: "Be part of the rapidly expanding credit improvement industry",
                highlight: true
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className={`card group hover:scale-105 transition-all duration-300 ${
                  benefit.highlight ? 'border-2 border-primary-200 bg-primary-50/50' : ''
                }`}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary-100 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{benefit.title}</h3>
                  <p className="text-neutral-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-secondary mx-auto mb-6">
              <Users className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Partner Success Stories
            </h2>
            <p className="text-xl text-neutral-600">
              Hear from our successful partners who have built thriving careers with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Choudhary",
                location: "Jaipur",
                achievement: "₹45,000/month",
                story: "Started as a part-time partner and now leads our Jaipur sales team. The training and support helped me exceed all my goals."
              },
              {
                name: "Mohit Soni",
                location: "Nagaur",
                achievement: "Top Performer 2023",
                story: "The flexible schedule allowed me to balance family commitments while building a successful sales career in credit improvement."
              },
              {
                name: "Avni Sharma",
                location: "Mumbai",
                achievement: "₹2.5L+ Annual Bonus",
                story: "The comprehensive training program gave me the confidence to excel. The commission structure is truly rewarding for hard work."
              }
            ].map((story, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-700">{story.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">{story.name}</h3>
                  <p className="text-neutral-600">{story.location}</p>
                  <div className="badge badge-primary mt-3">
                    {story.achievement}
                  </div>
                </div>
                <p className="text-neutral-700 italic text-center">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-primary-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container-custom text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our network of successful partners and start earning today. 
            Take the first step towards financial independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white hover:bg-neutral-100 text-neutral-900 font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
              Register Now
            </a>
            <DownloadButton 
              type="partner"
              className="bg-transparent hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full transition-all duration-200 border-2 border-white"
            >
              Download Partner App
            </DownloadButton>
            <Link href="/contact" className="bg-transparent hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full transition-all duration-200 border-2 border-white">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 