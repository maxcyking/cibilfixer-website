'use client';

import { useState } from 'react';
import { FormData } from '@/app/raise-request/page';
import { AlertCircle } from 'lucide-react';
import OTPModal from './OTPModal';

interface StepOneProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

export default function StepOne({ formData, setFormData, onNext }: StepOneProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showOTPModal, setShowOTPModal] = useState(false);

  const issueTypes = [
    'Low Credit Score',
    'Written-Off Loan Showing in Report',
    'Settlement Flag in Report',
    'Incorrect Personal / Loan Details',
    'Other CIC Related Issues',
    'PACKAGE_SELECTION'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.issue) newErrors.issue = 'Please select an issue type';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.mobile)) newErrors.mobile = 'Enter valid 10-digit mobile number';
    if (!formData.email) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter valid email address';
    if (!formData.pan) newErrors.pan = 'PAN number is required';
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) newErrors.pan = 'Enter valid PAN format (ABCDE1234F)';
    if (!formData.aadhar) newErrors.aadhar = 'Aadhar number is required';
    else if (!/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = 'Enter valid 12-digit Aadhar number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setShowOTPModal(true);
    }
  };

  const handleOTPSuccess = () => {
    setShowOTPModal(false);
    onNext();
  };

  const handleClear = () => {
    setFormData(prev => ({
      ...prev,
      issue: '',
      fullName: '',
      fatherName: '',
      dob: '',
      gender: '',
      mobile: '',
      email: '',
      pan: '',
      aadhar: ''
    }));
    setErrors({});
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 1: Personal Details</h2>

        <div className="space-y-6">
          {/* Selected Package Display */}
          {formData.selectedPackage && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Selected Package</h3>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 font-medium">{formData.selectedPackage}</span>
                <span className="text-blue-900 font-bold text-lg">{formData.packagePrice}</span>
              </div>
              <p className="text-sm text-blue-700 mt-1">
                You have pre-selected this package. You can change your issue type below if needed.
              </p>
            </div>
          )}

          {/* Issue Type */}
          <div>
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-2">
              Issue Type *
            </label>
            <select
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.issue ? 'border-red-500' : 'border-gray-300'
                }`}
            >
              <option value="">Select Issue Type</option>
              {issueTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'PACKAGE_SELECTION' ? 'Package Selection' : type}
                </option>
              ))}
            </select>
            {errors.issue && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.issue}
              </p>
            )}
          </div>

          {/* Personal Information */}
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
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Father's Name *
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fatherName ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter father's name"
              />
              {errors.fatherName && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fatherName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.dob ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.dob && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.dob}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.gender ? 'border-red-500' : 'border-gray-300'
                  }`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.gender}
                </p>
              )}
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
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.mobile}
                </p>
              )}
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
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PAN Number *
              </label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={(e) => {
                  const value = e.target.value.toUpperCase();
                  setFormData(prev => ({ ...prev, pan: value }));
                  if (errors.pan) {
                    setErrors(prev => ({ ...prev, pan: '' }));
                  }
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.pan ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="ABCDE1234F"
                maxLength={10}
              />
              {errors.pan && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.pan}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aadhar Number *
              </label>
              <input
                type="text"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.aadhar ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter 12-digit Aadhar number"
                maxLength={12}
              />
              {errors.aadhar && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.aadhar}
                </p>
              )}
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Phone Verification Required</p>
                <p>For security purposes, we'll send an OTP to your mobile number to verify your identity before proceeding to document upload.</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Form
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Verify Phone & Continue
            </button>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={showOTPModal}
        phoneNumber={formData.mobile}
        onClose={() => setShowOTPModal(false)}
        onSuccess={handleOTPSuccess}
      />
    </>
  );
} 