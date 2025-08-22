'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Phone, Shield, AlertCircle } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  ConfirmationResult
} from 'firebase/auth';

interface OTPModalProps {
  isOpen: boolean;
  phoneNumber: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function OTPModal({ isOpen, phoneNumber, onClose, onSuccess }: OTPModalProps) {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [step, setStep] = useState<'send' | 'verify'>('send');
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);

  // Initialize reCAPTCHA when modal opens
  useEffect(() => {
    if (isOpen && !recaptchaVerifierRef.current) {
      const initializeRecaptcha = () => {
        try {
          // Clear any existing verifier
          if (recaptchaVerifierRef.current) {
            try {
              recaptchaVerifierRef.current.clear();
            } catch (e) {
              console.warn('Error clearing existing verifier:', e);
            }
          }

          // Create new verifier with better error handling
          const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => {
              console.log('reCAPTCHA solved');
            },
            'expired-callback': () => {
              console.log('reCAPTCHA expired');
              setError('Verification expired. Please try again.');
            },
            'error-callback': (error: any) => {
              console.error('reCAPTCHA error:', error);
              setError('Verification failed. Please refresh and try again.');
            }
          });

          recaptchaVerifierRef.current = verifier;
          console.log('reCAPTCHA verifier initialized');
        } catch (error) {
          console.error('Error initializing reCAPTCHA:', error);
          setError('Failed to initialize verification. Please refresh and try again.');
        }
      };

      // Small delay to ensure DOM is ready
      setTimeout(initializeRecaptcha, 100);
    }

    // Cleanup when modal closes
    if (!isOpen && recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
        console.log('reCAPTCHA verifier cleared');
      } catch (error) {
        console.warn('Error clearing reCAPTCHA:', error);
      }
    }
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch (error) {
          console.warn('Error clearing reCAPTCHA on unmount:', error);
        }
      }
    };
  }, []);

  const sendOTP = async () => {
    if (!recaptchaVerifierRef.current) {
      setError('Please wait, initializing verification...');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Format phone number for international format
      const formattedPhone = phoneNumber.startsWith('+91') ? phoneNumber : `+91${phoneNumber}`;
      console.log('Sending OTP to:', formattedPhone);
      
      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifierRef.current);
      setConfirmationResult(confirmation);
      setStep('verify');
      console.log('OTP sent successfully');
    } catch (error: any) {
      console.error('Error sending OTP:', error);
      
      // Handle specific Firebase Auth errors
      let errorMessage = 'Failed to send OTP. Please try again.';
      
      if (error.code === 'auth/invalid-phone-number') {
        errorMessage = 'Invalid phone number format.';
      } else if (error.code === 'auth/missing-phone-number') {
        errorMessage = 'Phone number is required.';
      } else if (error.code === 'auth/quota-exceeded') {
        errorMessage = 'SMS quota exceeded. Please try again later.';
      } else if (error.code === 'auth/captcha-check-failed') {
        errorMessage = 'reCAPTCHA verification failed. Please try again.';
      } else if (error.code === 'auth/internal-error') {
        errorMessage = 'Service temporarily unavailable. Please try again in a few minutes.';
      }
      
      setError(errorMessage);
      
      // Clear and reinitialize reCAPTCHA on error
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
          recaptchaVerifierRef.current = null;
        } catch (e) {
          console.warn('Error clearing verifier after error:', e);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!confirmationResult || !otp) {
      setError('Please enter the OTP');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await confirmationResult.confirm(otp);
      console.log('OTP verified successfully');
      onSuccess();
    } catch (error: any) {
      console.error('Error verifying OTP:', error);
      
      let errorMessage = 'Invalid OTP. Please check and try again.';
      if (error.code === 'auth/invalid-verification-code') {
        errorMessage = 'Invalid verification code. Please check and try again.';
      } else if (error.code === 'auth/code-expired') {
        errorMessage = 'Verification code has expired. Please request a new one.';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOtp('');
    setError('');
    setStep('send');
    setConfirmationResult(null);
    
    // Clear reCAPTCHA verifier
    if (recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
      } catch (error) {
        console.warn('Error clearing verifier on close:', error);
      }
    }
    
    onClose();
  };

  const handleResendOTP = () => {
    setStep('send');
    setOtp('');
    setError('');
    setConfirmationResult(null);
    
    // Clear and reinitialize reCAPTCHA for resend
    if (recaptchaVerifierRef.current) {
      try {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
      } catch (error) {
        console.warn('Error clearing verifier for resend:', error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Phone Verification</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {step === 'send' ? (
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-gray-700 mb-2">
                We'll send an OTP to verify your phone number:
              </p>
              <p className="font-semibold text-gray-900">{phoneNumber}</p>
            </div>
            
            {/* reCAPTCHA container */}
            <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-600 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {error}
                </p>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={handleClose}
                disabled={loading}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={sendOTP}
                disabled={loading}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <p className="text-gray-700 mb-2">
                Enter the 6-digit OTP sent to:
              </p>
              <p className="font-semibold text-gray-900">{phoneNumber}</p>
            </div>

            <div className="mb-6">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="w-full px-4 py-3 text-center text-2xl font-mono border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="000000"
                maxLength={6}
                autoComplete="one-time-code"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-600 text-sm flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {error}
                </p>
              </div>
            )}

            <div className="flex space-x-3 mb-4">
              <button
                onClick={handleResendOTP}
                disabled={loading}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Resend OTP
              </button>
              <button
                onClick={verifyOTP}
                disabled={loading || otp.length !== 6}
                className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Didn't receive the code? Check your phone or try resending.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 