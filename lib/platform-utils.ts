// Platform and network metadata collection utilities

export interface PlatformMetadata {
  platform: string;
  userAgent: string;
  screenResolution: string;
  timezone: string;
  language: string;
  referrer: string;
  ipAddress?: string;
  networkInfo?: {
    connection?: string;
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
  };
  deviceInfo: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    os: string;
    browser: string;
  };
  sessionInfo: {
    timestamp: string;
    sessionId: string;
    pageLoadTime: number;
  };
}

export function generateSessionId(): string {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function detectOS(): string {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('android')) return 'Android';
  if (userAgent.includes('iphone') || userAgent.includes('ipad')) return 'iOS';
  if (userAgent.includes('windows')) return 'Windows';
  if (userAgent.includes('mac')) return 'macOS';
  if (userAgent.includes('linux')) return 'Linux';
  if (userAgent.includes('cros')) return 'Chrome OS';
  
  return 'Unknown';
}

export function detectBrowser(): string {
  if (typeof window === 'undefined') return 'unknown';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('chrome') && !userAgent.includes('edg')) return 'Chrome';
  if (userAgent.includes('firefox')) return 'Firefox';
  if (userAgent.includes('safari') && !userAgent.includes('chrome')) return 'Safari';
  if (userAgent.includes('edg')) return 'Edge';
  if (userAgent.includes('opera') || userAgent.includes('opr')) return 'Opera';
  
  return 'Unknown';
}

export function detectDeviceType(): { isMobile: boolean; isTablet: boolean; isDesktop: boolean } {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false, isDesktop: true };
  }
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  const screenWidth = window.screen.width;
  
  const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent) || screenWidth < 768;
  const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent) || (screenWidth >= 768 && screenWidth < 1024);
  const isDesktop = !isMobile && !isTablet;
  
  return { isMobile, isTablet, isDesktop };
}

export function getNetworkInfo(): PlatformMetadata['networkInfo'] {
  if (typeof window === 'undefined' || !('navigator' in window)) return undefined;
  
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  
  if (!connection) return undefined;
  
  return {
    connection: connection.type || 'unknown',
    effectiveType: connection.effectiveType || 'unknown',
    downlink: connection.downlink || 0,
    rtt: connection.rtt || 0
  };
}

export async function getIPAddress(): Promise<string | undefined> {
  try {
    // Using a free IP detection service
    const response = await fetch('https://api.ipify.org?format=json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.ip;
    }
  } catch (error) {
    console.warn('Could not fetch IP address:', error);
  }
  
  return undefined;
}

export async function collectPlatformMetadata(): Promise<PlatformMetadata> {
  const startTime = performance.now();
  
  // Get IP address (async)
  const ipAddress = await getIPAddress();
  
  const deviceInfo = detectDeviceType();
  const networkInfo = getNetworkInfo();
  
  const metadata: PlatformMetadata = {
    platform: 'website',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
    screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'unknown',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: typeof window !== 'undefined' ? window.navigator.language : 'unknown',
    referrer: typeof document !== 'undefined' ? document.referrer : 'unknown',
    ipAddress,
    networkInfo,
    deviceInfo: {
      ...deviceInfo,
      os: detectOS(),
      browser: detectBrowser()
    },
    sessionInfo: {
      timestamp: new Date().toISOString(),
      sessionId: generateSessionId(),
      pageLoadTime: performance.now() - startTime
    }
  };
  
  return metadata;
}

export function getLocationFromIP(ip: string): Promise<any> {
  // Optional: Get location data from IP (requires additional service)
  // This is just a placeholder - you can integrate with services like:
  // - ipapi.co
  // - ipgeolocation.io
  // - freegeoip.app
  return Promise.resolve(null);
}