'use client';

import { useRouter } from 'next/navigation';
import { CheckCircle, Copy, Home, FileText } from 'lucide-react';
import { useState } from 'react';

interface SuccessPageProps {
  customerId: string;
}

export default function SuccessPage({ customerId }: SuccessPageProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopyId = () => {
    navigator.clipboard.writeText(customerId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      {/* Success Animation */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4 animate-bounce">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Request Submitted Successfully!
        </h2>
        <p className="text-lg text-gray-600">
          Your credit score improvement request has been received.
        </p>
      </div>

      {/* Customer ID Display */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 max-w-md mx-auto">
        <p className="text-sm text-gray-600 mb-2">Your Customer ID</p>
        <div className="flex items-center justify-center gap-3">
          <p className="text-2xl font-mono font-bold text-blue-600">{customerId}</p>
          <button
            onClick={handleCopyId}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            title="Copy Customer ID"
          >
            <Copy className="w-5 h-5" />
          </button>
        </div>
        {copied && (
          <p className="text-sm text-green-600 mt-2">Customer ID copied!</p>
        )}
        <p className="text-xs text-gray-500 mt-3">
          Save this ID to track your request status
        </p>
      </div>

      {/* Status Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
        <div className="text-left space-y-2 text-sm text-blue-800">
          <p>• Your request is currently under review</p>
          <p>• Our team will verify your documents and payment</p>
          <p>• You will be contacted within 24-48 hours</p>
          <p>• Use your Customer ID to check request status anytime</p>
        </div>
      </div>

      {/* Current Status */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-2">Current Status</p>
        <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          Reviewing
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => router.push('/')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
        <button
          onClick={() => router.push('/track-status')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FileText className="w-5 h-5" />
          Track Status
        </button>
      </div>

      {/* Contact Information */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Need help? Contact us at{' '}
          <a href="tel:+919414118156" className="text-blue-600 hover:underline">
            +91 9414118156
          </a>{' '}
          or{' '}
          <a href="mailto:cibilfixer@gmail.com" className="text-blue-600 hover:underline">
            cibilfixer@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
} 