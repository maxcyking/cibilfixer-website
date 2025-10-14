import { useState } from 'react';
import { Monitor, Smartphone, Tablet, Globe, Wifi, Clock, Eye, EyeOff } from 'lucide-react';
import { usePlatformMetadata } from '@/hooks/usePlatformMetadata';

interface PlatformInfoProps {
  showDetails?: boolean;
  className?: string;
}

export default function PlatformInfo({ showDetails = false, className = '' }: PlatformInfoProps) {
  const { metadata, loading, error } = usePlatformMetadata();
  const [isExpanded, setIsExpanded] = useState(showDetails);

  if (loading) {
    return (
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-4 ${className}`}>
        <div className="animate-pulse flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !metadata) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
        <p className="text-red-600 text-sm">Failed to load platform information</p>
      </div>
    );
  }

  const getDeviceIcon = () => {
    if (metadata.deviceInfo.isMobile) return <Smartphone className="w-4 h-4" />;
    if (metadata.deviceInfo.isTablet) return <Tablet className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {getDeviceIcon()}
          <span className="text-sm font-medium text-blue-900">
            {metadata.deviceInfo.os} • {metadata.deviceInfo.browser}
          </span>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800 transition-colors"
          aria-label={isExpanded ? 'Hide details' : 'Show details'}
        >
          {isExpanded ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-blue-900 mb-1">Device Info</p>
              <p className="text-blue-700">Platform: {metadata.platform}</p>
              <p className="text-blue-700">Resolution: {metadata.screenResolution}</p>
              <p className="text-blue-700">
                Type: {metadata.deviceInfo.isMobile ? 'Mobile' : metadata.deviceInfo.isTablet ? 'Tablet' : 'Desktop'}
              </p>
            </div>
            
            <div>
              <p className="font-medium text-blue-900 mb-1">Location & Network</p>
              <p className="text-blue-700">Timezone: {metadata.timezone}</p>
              <p className="text-blue-700">Language: {metadata.language}</p>
              {metadata.ipAddress && (
                <p className="text-blue-700">IP: {metadata.ipAddress}</p>
              )}
            </div>
          </div>

          {metadata.networkInfo && (
            <div>
              <p className="font-medium text-blue-900 mb-1 flex items-center">
                <Wifi className="w-4 h-4 mr-1" />
                Network Info
              </p>
              <div className="grid grid-cols-2 gap-2 text-blue-700">
                <p>Type: {metadata.networkInfo.effectiveType}</p>
                <p>Speed: {metadata.networkInfo.downlink} Mbps</p>
                <p>Latency: {metadata.networkInfo.rtt}ms</p>
              </div>
            </div>
          )}

          <div>
            <p className="font-medium text-blue-900 mb-1 flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Session Info
            </p>
            <p className="text-blue-700">Session: {metadata.sessionInfo.sessionId}</p>
            <p className="text-blue-700">Load Time: {metadata.sessionInfo.pageLoadTime.toFixed(2)}ms</p>
          </div>

          {metadata.referrer && metadata.referrer !== '' && (
            <div>
              <p className="font-medium text-blue-900 mb-1 flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                Referrer
              </p>
              <p className="text-blue-700 text-xs break-all">{metadata.referrer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}