"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Policy() {
    return (
        <div>
            <Navbar/>
            <div className="bg-blue-200">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    {/* Privacy Policy Section */}
                    <section className="mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                            <p className="mb-4">
                                We collect information you provide directly to us, such as when you contact us through our contact form or email. This may include your name, email address, and any message content you send.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>Respond to your inquiries and provide customer support</li>
                                <li>Communicate with you about our services</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information Sharing</h2>
                            <p className="mb-4">
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
                            <p className="mb-4">
                                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
                            <p className="mb-4">
                                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
                            <p className="mb-4">
                                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
                            <p className="mb-4">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </div>
                    </section>

                    {/* Terms of Service Section */}
                    <section>
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                        <div className="prose prose-lg max-w-none text-gray-700">
                            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
                            <p className="mb-4">
                                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
                            <p className="mb-4">
                                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside mb-4 space-y-2">
                                <li>modify or copy the materials</li>
                                <li>use the materials for any commercial purpose or for any public display</li>
                                <li>attempt to reverse engineer any software contained on the website</li>
                                <li>remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer</h2>
                            <p className="mb-4">
                                The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitations</h2>
                            <p className="mb-4">
                                In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
                            <p className="mb-4">
                                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links</h2>
                            <p className="mb-4">
                                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h2>
                            <p className="mb-4">
                                We may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
                            <p className="mb-4">
                                These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                            </p>
                            
                            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy or Terms of Service, please contact us through our contact page or email us directly.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}