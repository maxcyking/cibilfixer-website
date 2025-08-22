'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import StepOne from '@/components/raise-request/StepOne';
import StepTwo from '@/components/raise-request/StepTwo';
import SuccessPage from '@/components/raise-request/SuccessPage';
import { FileText, MapPin, CheckCircle } from 'lucide-react';

export interface FormData {
  // Step 1
  issue: string;
  fullName: string;
  fatherName: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string;
  pan: string;
  aadhar: string;
  // Step 2
  address: string;
  village: string;
  tehsilCity: string;
  district: string;
  state: string;
  pin: string;
  documents: {
    aadhar?: File;
    pan?: File;
    voterId?: File;
    dl?: File;
    cicReport?: File;
    bankDetails?: File;
    other?: File;
  };
  referralCode: string;
  remark: string;
}

export default function RaiseRequest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerId, setCustomerId] = useState('');
  const [formData, setFormData] = useState<FormData>({
    issue: '',
    fullName: '',
    fatherName: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    pan: '',
    aadhar: '',
    address: '',
    village: '',
    tehsilCity: '',
    district: '',
    state: '',
    pin: '',
    documents: {},
    referralCode: '',
    remark: ''
  });

  const steps = [
    { number: 1, title: 'Personal Details', icon: FileText },
    { number: 2, title: 'Address & Documents', icon: MapPin },
    { number: 3, title: 'Success', icon: CheckCircle }
  ];

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleComplete = (custId: string) => {
    setCustomerId(custId);
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Credit Score Improvement Request
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to start your credit score improvement journey
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep >= step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="relative flex-1">
                  {index !== steps.length - 1 && (
                    <div
                      className={`absolute top-6 left-16 right-0 h-1 ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  )}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isActive
                          ? isCompleted
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'bg-blue-500 border-blue-500 text-white'
                          : 'bg-white border-gray-300 text-gray-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`mt-2 text-sm font-medium ${
                        isActive ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <StepOne
                formData={formData}
                setFormData={setFormData}
                onNext={handleNext}
              />
            )}
            {currentStep === 2 && (
              <StepTwo
                formData={formData}
                setFormData={setFormData}
                onComplete={handleComplete}
                onPrev={handlePrev}
              />
            )}
            {currentStep === 3 && (
              <SuccessPage customerId={customerId} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 