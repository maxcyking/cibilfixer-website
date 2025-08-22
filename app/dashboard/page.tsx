'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { BarChart3, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Welcome back, {user.displayName || 'Partner'}!
          </h1>
          <p className="text-neutral-600">Here's your performance overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <DollarSign className="h-6 w-6 text-primary-700" />
              </div>
              <span className="text-sm text-green-600 font-medium">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">₹0</h3>
            <p className="text-neutral-600">Total Earnings</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-secondary-100 p-3 rounded-xl">
                <Users className="h-6 w-6 text-secondary-700" />
              </div>
              <span className="text-sm text-green-600 font-medium">New</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">0</h3>
            <p className="text-neutral-600">Active Leads</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <BarChart3 className="h-6 w-6 text-green-700" />
              </div>
              <span className="text-sm text-neutral-600 font-medium">0%</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">0</h3>
            <p className="text-neutral-600">Conversions</p>
          </div>

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <TrendingUp className="h-6 w-6 text-purple-700" />
              </div>
              <span className="text-sm text-neutral-600 font-medium">-</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Pending</h3>
            <p className="text-neutral-600">Partner Status</p>
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Your Partner Dashboard is Being Set Up
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our team will review your application and activate your partner account within 24-48 hours. 
            You'll receive an email with further instructions and access to training materials.
          </p>
        </div>
      </div>
    </div>
  );
} 