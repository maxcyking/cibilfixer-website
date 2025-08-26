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
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${app.status === 'available'
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

                    {app.status === 'available' && app.downloadUrl ? (
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
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-yellow-400 p-2 rounded-full">
                      <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-xl font-semibold">9414118156</span>
                  </div>
                  <div className="flex space-x-3">
                    <a href="https://www.instagram.com/cibilfixer/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/Cibilfixer/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@cibilfixer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    <a href="https://wa.me/919414118156" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </a>
                  </div>
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