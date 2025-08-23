'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { AlertTriangle, Lock, Trash2, Shield, Clock, CheckCircle, Mail } from 'lucide-react';

export default function DeleteAccountPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [verifiedUser, setVerifiedUser] = useState<any>(null);

    const handleCredentialVerification = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Verify credentials by attempting to sign in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setVerifiedUser(userCredential.user);
            setShowConfirmation(true);
        } catch (error: any) {
            console.error('Credential verification failed:', error);
            if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                setError('Incorrect email or password. Please try again.');
            } else if (error.code === 'auth/user-not-found') {
                setError('No account found with this email address.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Please enter a valid email address.');
            } else {
                setError('Failed to verify credentials. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleAccountDeletion = async () => {
        if (!verifiedUser) {
            setError('User verification failed. Please try again.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Get user data first
            const userDoc = await getDoc(doc(db, 'users', verifiedUser.uid));
            const userData = userDoc.data();

            // Create deletion request in database
            const deletionRequest = {
                userId: verifiedUser.uid,
                email: verifiedUser.email,
                fullName: userData?.fullName || 'Unknown',
                mobile: userData?.mobile || 'Unknown',
                requestedAt: new Date().toISOString(),
                scheduledDeletionDate: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000).toISOString(), // 29 days from now
                status: 'pending',
                reason: 'User requested account deletion',
                userData: userData // Store user data for reference
            };

            // Store deletion request
            await setDoc(doc(db, 'accountDeletionRequests', verifiedUser.uid), deletionRequest);

            // Update user status to mark for deletion
            if (userData) {
                await setDoc(doc(db, 'users', verifiedUser.uid), {
                    ...userData,
                    markedForDeletion: true,
                    deletionRequestDate: new Date().toISOString(),
                    status: 'deletion_requested'
                });
            }

            setSuccess(true);
            setShowConfirmation(false);

            // Sign out the user after successful deletion request
            setTimeout(async () => {
                try {
                    await signOut(auth);
                } catch (signOutError) {
                    console.error('Error signing out:', signOutError);
                }
                router.push('/');
            }, 3000);

        } catch (error: any) {
            console.error('Error creating deletion request:', error);
            setError('Failed to create deletion request. Please try again or contact support.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Deletion Request Created
                        </h2>
                        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                            <p className="text-green-800 text-sm">
                                Your account deletion request has been successfully created. Your account will be permanently deleted within 29 days.
                            </p>
                            <p className="text-green-700 text-xs mt-2">
                                Redirecting to homepage in a few seconds...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (showConfirmation) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="bg-red-600 px-6 py-4">
                            <div className="flex items-center">
                                <AlertTriangle className="h-8 w-8 text-white mr-3" />
                                <h1 className="text-2xl font-bold text-white">Final Confirmation</h1>
                            </div>
                        </div>

                        <div className="px-6 py-8">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <p className="text-blue-800 text-sm">
                                    <strong>Account:</strong> {verifiedUser?.email}
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                                <h2 className="text-xl font-semibold text-red-800 mb-4">
                                    ⚠️ This action cannot be undone!
                                </h2>
                                <p className="text-red-700 mb-4">
                                    By confirming, you agree that:
                                </p>
                                <ul className="list-disc list-inside text-red-700 space-y-2 mb-4">
                                    <li>Your account will be permanently deleted within 29 days</li>
                                    <li>All your personal data will be removed from our systems</li>
                                    <li>You will lose access to all services and features</li>
                                    <li>Any pending transactions or requests will be cancelled</li>
                                    <li>This action is irreversible</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <div className="flex items-start">
                                    <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                                    <div>
                                        <h3 className="font-medium text-blue-800">29-Day Deletion Period</h3>
                                        <p className="text-blue-700 text-sm mt-1">
                                            Your account will be scheduled for deletion and will be permanently removed within 29 days.
                                            During this period, you can contact support if you change your mind.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                    <p className="text-red-800 text-sm">{error}</p>
                                </div>
                            )}

                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowConfirmation(false);
                                        setVerifiedUser(null);
                                        setEmail('');
                                        setPassword('');
                                    }}
                                    className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAccountDeletion}
                                    disabled={loading}
                                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {loading ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            <Trash2 className="h-5 w-5 mr-2" />
                                            Confirm Deletion
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-red-600 px-6 py-4">
                        <div className="flex items-center">
                            <Trash2 className="h-8 w-8 text-white mr-3" />
                            <h1 className="text-2xl font-bold text-white">Delete Account</h1>
                        </div>
                    </div>

                    <div className="px-6 py-8">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                            <div className="flex items-start">
                                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5 mr-3" />
                                <div>
                                    <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                                        Important Information
                                    </h2>
                                    <p className="text-yellow-700 text-sm mb-3">
                                        Deleting your account is a permanent action that cannot be undone. Please consider the following:
                                    </p>
                                    <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                                        <li>All your personal data will be permanently removed</li>
                                        <li>You will lose access to all services and features</li>
                                        <li>Any pending transactions will be cancelled</li>
                                        <li>Your account will be deleted within 29 days</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                            <div className="flex items-start">
                                <Shield className="h-6 w-6 text-blue-600 mt-0.5 mr-3" />
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                                        Account Verification Required
                                    </h3>
                                    <p className="text-blue-700 text-sm">
                                        To protect your account, please enter your email and password to verify your identity before proceeding with account deletion.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleCredentialVerification} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password *
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        placeholder="Enter your password"
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <p className="text-red-800 text-sm">{error}</p>
                                </div>
                            )}

                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => router.back()}
                                    className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading || !email.trim() || !password.trim()}
                                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {loading ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            <Shield className="h-5 w-5 mr-2" />
                                            Verify Account
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                If you're having issues with your account or have questions about deletion, please contact our support team:
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                <a
                                    href="mailto:cibilfixer@gmail.com"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    Email: cibilfixer@gmail.com
                                </a>
                                <a
                                    href="tel:+919414118156"
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    Phone: +91-94141-18156
                                </a>
                                <a
                                    href="https://wa.me/919414118156"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-800 text-sm font-medium"
                                >
                                    WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}