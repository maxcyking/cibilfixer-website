'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Smartphone, FileText, Shield, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function RegistrationSuccess() {
  const router = useRouter();
  const { user } = useAuth();
  const [userRole, setUserRole] = useState('Partner');

  useEffect(() => {
    // Redirect to home if not authenticated
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-xl text-gray-600">
              Your account creation request as a <span className="font-semibold">{userRole}</span> has been submitted
            </p>
          </div>

          {/* Status Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Account Status</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                  <span className="font-medium text-gray-700">Account Status</span>
                </div>
                <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">
                  Pending Approval
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="font-medium text-gray-700">KYC Status</span>
                </div>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                  Pending
                </span>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">KYC Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <div className="text-right text-sm text-gray-500 mt-1">0%</div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <p className="text-lg mb-6">
              To complete your registration and start earning, please download our mobile app 
              and complete your KYC verification along with other necessary documents.
            </p>
            
            <div className="flex items-center">
              <Smartphone className="w-8 h-8 mr-3" />
              <span className="text-lg">Download the app to complete your profile</span>
            </div>
          </motion.div>

          {/* Download Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Download Our Mobile App
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Android Download */}
              <a
                href="https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/apks%2Fapp-release.apk?alt=media&token=0b51580c-b6a0-4749-a71c-e31701cd213f" download
                className="group flex items-center justify-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 group-hover:bg-green-600 transition-colors">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Download for Android</h3>
                  <p className="text-sm text-gray-600">Get the APK file</p>
                </div>
              </a>

              {/* iOS Download */}
              <a
                href="/download/ios-app"
                className="group flex items-center justify-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4 group-hover:bg-blue-600 transition-colors">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Download for iOS</h3>
                  <p className="text-sm text-gray-600">Coming Soon</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Note:</strong> Your account will be activated after admin verification. 
                You will receive an email notification once your account is approved.
              </p>
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 