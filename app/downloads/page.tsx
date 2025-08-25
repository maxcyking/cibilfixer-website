import Link from 'next/link';
import { Download, Smartphone, Monitor, Apple, Chrome } from 'lucide-react';

export default function Page() {
  const apps = [
    {
      platform: "Android",
      icon: Smartphone,
      version: "v1.0.0",
      size: "58 MB",
      status: "available",
      description: "Partner application for Android devices with full functionality",
      downloadUrl: "https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/apks%2Fapp-release.apk?alt=media&token=91cf17c8-f92f-4cec-a24e-46a6e29c3f33",
      requirements: "Android 6.0 or higher",
      lastUpdated: "December 25, 2024"
    },
    {
      platform: "iOS",
      icon: Apple,
      version: "Coming Soon",
      size: "TBD",
      status: "coming-soon",
      description: "Partner application for iPhone and iPad devices",
      downloadUrl: null,
      requirements: "iOS 12.0 or higher",
      lastUpdated: "Coming Soon"
    },
    {
      platform: "Windows PC",
      icon: Monitor,
      version: "Coming Soon",
      size: "TBD",
      status: "coming-soon",
      description: "Desktop application for Windows computers",
      downloadUrl: null,
      requirements: "Windows 10 or higher",
      lastUpdated: "Coming Soon"
    },
    {
      platform: "macOS",
      icon: Apple,
      version: "Coming Soon",
      size: "TBD",
      status: "coming-soon",
      description: "Desktop application for Mac computers",
      downloadUrl: null,
      requirements: "macOS 10.15 or higher",
      lastUpdated: "Coming Soon"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner App Downloads</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Download our partner application for your preferred platform and start managing credit repair services on the go.
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <IconComponent className="h-16 w-16 mx-auto mb-4 text-primary-600" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.platform}</h3>
                      <p className="text-gray-600 mb-4">{app.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-center space-x-4 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            app.status === 'available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {app.status === 'available' ? 'Available' : 'Coming Soon'}
                          </span>
                          {app.status === 'available' && (
                            <span className="text-primary-600 font-semibold">{app.version}</span>
                          )}
                        </div>
                        {app.status === 'available' && (
                          <div className="text-gray-600 text-sm">Size: {app.size}</div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">App Details</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong>Requirements:</strong> {app.requirements}</li>
                        <li><strong>Last Updated:</strong> {app.lastUpdated}</li>
                        {app.status === 'available' && (
                          <li><strong>Version:</strong> {app.version}</li>
                        )}
                      </ul>
                    </div>

                    {app.status === 'available' ? (
                      <a 
                        href={app.downloadUrl}
                        download
                        className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                      >
                        <Download className="h-5 w-5" />
                        <span>Download Now</span>
                      </a>
                    ) : (
                      <button 
                        disabled
                        className="w-full flex items-center justify-center space-x-2 bg-gray-300 text-gray-500 py-3 px-6 rounded-lg font-semibold cursor-not-allowed"
                      >
                        <Chrome className="h-5 w-5" />
                        <span>Coming Soon</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Installation Instructions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <Smartphone className="h-6 w-6 mr-2" />
                  Android Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Download the APK file from the link above</li>
                  <li>Enable "Unknown Sources" in your device settings</li>
                  <li>Open the downloaded APK file</li>
                  <li>Follow the installation prompts</li>
                  <li>Launch the app and sign in with your partner credentials</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <Monitor className="h-6 w-6 mr-2" />
                  Desktop Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Download the installer for your operating system</li>
                  <li>Run the installer as administrator (Windows) or with sudo (Mac)</li>
                  <li>Follow the installation wizard</li>
                  <li>Launch the application from your desktop or applications folder</li>
                  <li>Sign in with your partner credentials</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Notes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Only authorized partners can access the application</li>
                <li>Make sure to download from official links only</li>
                <li>Keep your app updated for the latest features and security</li>
                <li>Contact support if you face any installation issues</li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Need Help with Installation?</h3>
              <p className="text-blue-100 mb-6 text-center">Our technical support team is here to assist you</p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">9414118156</span>
                </div>
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}