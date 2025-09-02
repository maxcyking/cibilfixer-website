'use client';

import { useState, useEffect } from 'react';
import { Download, Smartphone } from 'lucide-react';
import { getApkByTypeAndOS, detectUserOS } from '@/lib/firebase-apk';

interface DownloadButtonProps {
  type?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function DownloadButton({ 
  type = 'partner', 
  className = '',
  children 
}: DownloadButtonProps) {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userOS, setUserOS] = useState<string>('unknown');

  useEffect(() => {
    const fetchDownloadUrl = async () => {
      try {
        const detectedOS = detectUserOS();
        setUserOS(detectedOS);
        
        if (detectedOS !== 'unknown') {
          const apkData = await getApkByTypeAndOS(type, detectedOS);
          if (apkData && apkData.link) {
            setDownloadUrl(apkData.link);
          }
        }
      } catch (error) {
        console.error('Error fetching download URL:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDownloadUrl();
  }, [type]);

  if (loading) {
    return (
      <button 
        disabled 
        className={`inline-flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed ${className}`}
      >
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
        <span>Loading...</span>
      </button>
    );
  }

  if (!downloadUrl) {
    return (
      <button 
        disabled 
        className={`inline-flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed ${className}`}
      >
        <Smartphone className="h-4 w-4" />
        <span>Not Available</span>
      </button>
    );
  }

  return (
    <a
      href={downloadUrl}
      download
      className={`inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors ${className}`}
    >
      <Download className="h-4 w-4" />
      <span>{children || 'Download App'}</span>
    </a>
  );
}