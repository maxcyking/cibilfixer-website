'use client';

import { useState, useEffect } from 'react';
import { getApkByTypeAndOS, getAllPartnerApks, detectUserOS, ApkData } from '@/lib/firebase-apk';

export function useApkData(type: string = 'partner') {
  const [apks, setApks] = useState<ApkData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userOS, setUserOS] = useState<string>('unknown');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Detect user OS
        const detectedOS = detectUserOS();
        setUserOS(detectedOS);
        
        // Fetch all APKs for the specified type
        const apkData = await getAllPartnerApks();
        setApks(apkData);
      } catch (err) {
        console.error('Error fetching APK data:', err);
        setError('Failed to load app data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return { apks, loading, error, userOS };
}

export function useSpecificApk(type: string, os: string) {
  const [apk, setApk] = useState<ApkData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApk = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const apkData = await getApkByTypeAndOS(type, os);
        setApk(apkData);
      } catch (err) {
        console.error('Error fetching specific APK:', err);
        setError('Failed to load app data');
      } finally {
        setLoading(false);
      }
    };

    if (type && os) {
      fetchApk();
    }
  }, [type, os]);

  return { apk, loading, error };
}