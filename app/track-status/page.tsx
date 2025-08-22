'use client';

import { useState } from 'react';
import { Search, FileText, Phone, UserCheck, X, Clock, CheckCircle2 } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface RequestData {
  customerId: string;
  fullName: string;
  issue: string;
  status: string;
  createdAt: string;
  mobile: string;
  transactionId: string;
}

export default function TrackStatus() {
  const [customerId, setCustomerId] = useState('');
  const [requestData, setRequestData] = useState<RequestData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const statusConfig = {
    'Reviewing': { color: 'yellow', icon: Clock, description: 'Your request is being reviewed by our team' },
    'CONTACTED': { color: 'blue', icon: Phone, description: 'Our team has contacted you' },
    'INTERESTED': { color: 'green', icon: UserCheck, description: 'You have shown interest in our services' },
    'NOT INTERESTED': { color: 'red', icon: X, description: 'You are not interested at this time' },
    'NO RESPONSE': { color: 'gray', icon: Phone, description: 'We could not reach you' },
    'CONVERTED TO CUSTOMER': { color: 'green', icon: CheckCircle2, description: 'Welcome! You are now our customer' }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerId.trim()) {
      setError('Please enter a customer ID');
      return;
    }

    setLoading(true);
    setError('');
    setRequestData(null);

    try {
      const q = query(collection(db, 'creditRequests'), where('customerId', '==', customerId.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('No request found with this Customer ID');
      } else {
        const doc = querySnapshot.docs[0];
        setRequestData(doc.data() as RequestData);
      }
    } catch (error) {
      console.error('Error fetching request:', error);
      setError('Failed to fetch request details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    const config = statusConfig[status as keyof typeof statusConfig];
    return config?.color || 'gray';
  };

  const StatusIcon = requestData ? statusConfig[requestData.status as keyof typeof statusConfig]?.icon || Clock : Clock;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Track Your Request
            </h1>
            <p className="text-xl text-gray-600">
              Enter your Customer ID to check the status of your credit improvement request
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={customerId}
                  onChange={(e) => setCustomerId(e.target.value.toUpperCase())}
                  placeholder="Enter Customer ID (e.g., CRM24123456)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
            
            {error && (
              <p className="mt-4 text-red-600 text-sm">{error}</p>
            )}
          </form>

          {/* Result Display */}
          {requestData && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Request Details</h2>
                <FileText className="w-8 h-8 text-gray-400" />
              </div>

              {/* Status Badge */}
              <div className="mb-6 text-center">
                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-${getStatusColor(requestData.status)}-100 text-${getStatusColor(requestData.status)}-800 rounded-full`}>
                  <StatusIcon className="w-6 h-6" />
                  <span className="font-semibold text-lg">{requestData.status}</span>
                </div>
                <p className="mt-2 text-gray-600">
                  {statusConfig[requestData.status as keyof typeof statusConfig]?.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Customer ID</p>
                  <p className="font-semibold text-gray-900">{requestData.customerId}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Full Name</p>
                  <p className="font-semibold text-gray-900">{requestData.fullName}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Issue Type</p>
                  <p className="font-semibold text-gray-900">{requestData.issue}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Request Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(requestData.createdAt).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 mb-2">Need help with your request?</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:+91${requestData.mobile}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                  <a
                    href="mailto:support@rameshwarcibil.com"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 