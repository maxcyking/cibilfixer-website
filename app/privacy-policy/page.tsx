import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy - Cibil Fixer',
    description: 'Privacy Policy for Cibil Fixer - Learn how we collect, use, and protect your information.',
    robots: 'index, follow',
}

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="px-6 py-8 sm:px-10 sm:py-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-blue-500 pb-4">
                            Privacy Policy for Cibil Fixer
                        </h1>

                        <div className="bg-gray-100 p-4 rounded-lg mb-8">
                            <p className="font-semibold text-gray-800">
                                <strong>Effective Date:</strong> January 15, 2025<br />
                                <strong>Last Updated:</strong> January 15, 2025
                            </p>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                            <p className="text-yellow-800">
                                <strong>Important:</strong> This Privacy Policy describes how Cibil Fixer collects, uses, and protects your information when you use our services. By using Cibil Fixer, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">About This Policy</h2>
                            <p className="text-gray-600 mb-6">
                                This Privacy Policy describes how Cibil Fixer ("we," "our," or "us") collects, uses, and protects your information when you use our services. By using Cibil Fixer, you agree to the collection and use of information in accordance with this policy.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Personal Information</h3>
                            <p className="text-gray-600 mb-4">When you use our services, we may collect the following personal information:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Account Information:</strong> Full name, email address, phone number</li>
                                <li><strong>Financial Data:</strong> CIBIL score, credit report information, loan details</li>
                                <li><strong>Identity Verification:</strong> PAN card details, Aadhaar information (as required)</li>
                                <li><strong>Authentication Data:</strong> Login credentials, biometric data (if enabled)</li>
                                <li><strong>Communication Records:</strong> Support tickets, chat messages, feedback</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Automatically Collected Information</h3>
                            <p className="text-gray-600 mb-4">Our services automatically collect certain information:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Device Information:</strong> Device model, operating system version, unique device identifiers</li>
                                <li><strong>Usage Analytics:</strong> Features used, session duration, user interactions</li>
                                <li><strong>Technical Data:</strong> IP address, app version, crash reports, performance metrics</li>
                                <li><strong>Location Data:</strong> Approximate location for service optimization (with permission)</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Information from Third Parties</h3>
                            <p className="text-gray-600 mb-4">We may receive information from:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Credit Bureaus:</strong> CIBIL, Experian, Equifax for credit report services</li>
                                <li><strong>Financial Institutions:</strong> Banks and NBFCs for loan processing</li>
                                <li><strong>Government Databases:</strong> For identity verification purposes</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Primary Services</h3>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Fetching and displaying your CIBIL reports</li>
                                <li>Providing credit score improvement recommendations</li>
                                <li>Processing loan applications and financial services</li>
                                <li>Managing your user account and preferences</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Service Functionality</h3>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Authenticating user access and maintaining security</li>
                                <li>Personalizing your experience</li>
                                <li>Sending important notifications and updates</li>
                                <li>Providing customer support services</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Business Operations</h3>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Analyzing usage to improve our services</li>
                                <li>Conducting research and development</li>
                                <li>Complying with legal and regulatory requirements</li>
                                <li>Preventing fraud and ensuring platform security</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Storage and Security</h2>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Security Measures</h3>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Encryption:</strong> All data transmission uses SSL/TLS encryption</li>
                                <li><strong>Secure Storage:</strong> Data stored on Firebase Cloud with enterprise-grade security</li>
                                <li><strong>Access Controls:</strong> Multi-factor authentication for admin access</li>
                                <li><strong>Regular Audits:</strong> Quarterly security assessments and penetration testing</li>
                                <li><strong>Data Backup:</strong> Automated daily backups with 99.9% uptime guarantee</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Data Retention</h3>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Active Accounts:</strong> Data retained while account is active</li>
                                <li><strong>Inactive Accounts:</strong> Data deleted after 2 years of inactivity</li>
                                <li><strong>Legal Requirements:</strong> Some data retained longer as required by law</li>
                                <li><strong>User Deletion:</strong> Complete data removal within 30 days upon request</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Sharing and Disclosure</h2>

                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                                <p className="text-blue-800 font-semibold">
                                    We Do Not Sell Your Data: We never sell, rent, or trade your personal information to third parties for marketing purposes.
                                </p>
                            </div>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Limited Sharing Scenarios</h3>
                            <p className="text-gray-600 mb-4">We may share your information only in these specific cases:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Service Providers:</strong> Trusted partners who help operate our services (credit bureaus, payment processors)</li>
                                <li><strong>Legal Compliance:</strong> When required by law, court orders, or government regulations</li>
                                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of business assets</li>
                                <li><strong>Fraud Prevention:</strong> To protect against fraudulent activities and security threats</li>
                                <li><strong>User Consent:</strong> When you explicitly authorize information sharing</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Third-Party Services</h3>
                            <p className="text-gray-600 mb-4">Our services integrate with:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Firebase:</strong> For infrastructure and analytics</li>
                                <li><strong>Razorpay:</strong> For payment processing</li>
                                <li><strong>CIBIL/Credit Bureaus:</strong> For credit report services</li>
                                <li><strong>SMS Gateways:</strong> For OTP and notifications</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Privacy Rights</h2>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">Access and Control</h3>
                            <p className="text-gray-600 mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Access:</strong> View all personal data we have about you</li>
                                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                <li><strong>Deletion:</strong> Request complete removal of your data</li>
                                <li><strong>Portability:</strong> Export your data in a readable format</li>
                                <li><strong>Restriction:</strong> Limit how we process your information</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-700 mt-6 mb-3">How to Exercise Your Rights</h3>
                            <p className="text-gray-600 mb-6">                                Contact us at <a href="mailto:Cibil Fixer@gmail.com" className="text-blue-600 hover:text-blue-800">Cibil Fixer@gmail.com</a> with your request. We will respond within 30 days and verify your identity before processing any requests.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Children's Privacy</h2>
                            <p className="text-gray-600 mb-6">
                                Cibil Fixer is intended for users 18 years and older. We do not knowingly collect personal information from children under 18. If we discover we have collected information from a child under 18, we will delete it immediately.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">International Data Transfers</h2>
                            <p className="text-gray-600 mb-4">
                                Your information may be transferred to and processed in countries other than India. We ensure adequate protection through:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Standard contractual clauses</li>
                                <li>Adequacy decisions by regulatory authorities</li>
                                <li>Your explicit consent where required</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies and Tracking</h2>
                            <p className="text-gray-600 mb-4">Our services may use:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li><strong>Session Cookies:</strong> For functionality and user authentication</li>
                                <li><strong>Analytics Cookies:</strong> To understand usage patterns</li>
                                <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                            </ul>
                            <p className="text-gray-600 mb-6">
                                You can manage cookie preferences in your browser settings.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Updates to This Policy</h2>
                            <p className="text-gray-600 mb-4">We may update this Privacy Policy periodically. When we make changes:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>We will notify you through our services or email</li>
                                <li>The "Last Updated" date will be revised</li>
                                <li>Continued use of our services constitutes acceptance of changes</li>
                                <li>Material changes will require your explicit consent</li>
                            </ul>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>

                                <p className="text-gray-600 mb-4">For any privacy-related questions, concerns, or requests, please contact us:</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-gray-600 mb-2">
                                            <strong>Email:</strong> <a href="mailto:Cibil Fixer@gmail.com" className="text-blue-600 hover:text-blue-800">Cibil Fixer@gmail.com</a>
                                        </p>
                                        <p className="text-gray-600 mb-2">
                                            <strong>Phone:</strong> <a href="tel:+919414118156" className="text-blue-600 hover:text-blue-800">+91-94141-18156</a>
                                        </p>
                                        <p className="text-gray-600 mb-4">
                                            <strong>WhatsApp:</strong> <a href="https://wa.me/919414118156" className="text-blue-600 hover:text-blue-800">+91-94141-18156</a>
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-600 mb-2"><strong>Postal Address:</strong></p>
                                        <p className="text-gray-600 text-sm">
                                            Cibil Fixer<br />
                                            VIJAY VALLABH CHOURAHA<br />
                                            NAGAUR, RAJASTHAN 341001<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mt-4">
                                    <strong>Business Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM
                                </p>
                            </div>

                            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Legal Compliance</h2>
                            <p className="text-gray-600 mb-4">This Privacy Policy complies with:</p>
                            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                                <li>Information Technology Act, 2000 (India)</li>
                                <li>Information Technology (Reasonable Security Practices) Rules, 2011</li>
                                <li>Reserve Bank of India (RBI) guidelines for digital lending</li>
                                <li>General Data Protection Regulation (GDPR) for EU users</li>
                            </ul>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                                <p className="text-yellow-800">
                                    <strong>Acknowledgment:</strong> By using Cibil Fixer, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                                </p>
                            </div>

                            <div className="text-center mt-8 pt-6 border-t border-gray-200">
                                <p className="text-gray-500 text-sm">
                                    <strong>Document Version:</strong> 2.1 | <strong>Document ID:</strong> PP-WEB-2025-01
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    © 2025 Cibil Fixer Technologies Pvt. Ltd. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}