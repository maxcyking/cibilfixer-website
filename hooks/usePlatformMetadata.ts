import { useState, useEffect } from 'react';
import { collectPlatformMetadata, PlatformMetadata } from '@/lib/platform-utils';

export function usePlatformMetadata() {
  const [metadata, setMetadata] = useState<PlatformMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const platformData = await collectPlatformMetadata();
        setMetadata(platformData);
      } catch (err) {
        console.error('Error collecting platform metadata:', err);
        setError('Failed to collect platform information');
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, []);

  return { metadata, loading, error };
}

export function useDeviceInfo() {
  const { metadata, loading, error } = usePlatformMetadata();
  
  return {
    deviceInfo: metadata?.deviceInfo || null,
    platform: metadata?.platform || 'unknown',
    loading,
    error
  };
}

export function useNetworkInfo() {
  const { metadata, loading, error } = usePlatformMetadata();
  
  return {
    networkInfo: metadata?.networkInfo || null,
    ipAddress: metadata?.ipAddress || null,
    loading,
    error
  };
}