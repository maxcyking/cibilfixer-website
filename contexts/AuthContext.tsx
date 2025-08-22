'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, mobile: string, referralCode?: string, role?: string) => Promise<User>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (displayName: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Generate a unique referral code
  const generateReferralCode = (role: string): string => {
    const prefix = role === 'sales_representative' ? 'S' : 'P';
    const randomDigits = Math.floor(1000000 + Math.random() * 9000000); // 7 random digits
    return `${prefix}${randomDigits}`;
  };

  const signUp = async (email: string, password: string, fullName: string, mobile: string, referralCode?: string, role: string = 'partner') => {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      const user = credential.user;

      // Update user profile
      await updateProfile(user, {
        displayName: fullName,
      });

      // Generate unique referral code for the new user
      const userReferralCode = generateReferralCode(role);

      // Store additional user data in Firestore
      try {
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email,
          fullName,
          mobile,
          role: role === 'sales_representative' ? 'Sales Representative' : 'Partner',
          myReferralCode: userReferralCode,
          referredBy: referralCode || null,
          kycStatus: 'pending',
          kycProgress: 0,
          status: 'pending', // Admin will review and activate
          createdAt: new Date().toISOString(),
          isActive: false,
          earnings: 0,
          referrals: 0
        });
      } catch (firestoreError: any) {
        console.error('Firestore error:', firestoreError);
        // If Firestore write fails, we still created the auth user
        // You can handle this case as needed
        console.warn('User account created but profile data could not be saved. Please configure Firestore security rules.');
      }

      return user;
    } catch (error: any) {
      console.error('Error signing up:', error);
      
      // Provide more specific error messages
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please use a different email or sign in.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('Password should be at least 6 characters long.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      } else if (error.message?.includes('Missing or insufficient permissions')) {
        throw new Error('Database permissions need to be configured. User account was created successfully.');
      }
      
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  };

  const updateUserProfile = async (displayName: string) => {
    if (user) {
      try {
        await updateProfile(user, { displayName });
      } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
      }
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    logout,
    resetPassword,
    updateUserProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 