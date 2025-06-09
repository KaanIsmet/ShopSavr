"use client"

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold">
                            Shop.<span className="text-blue-400">Savr</span>
                        </Link>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <div className="space-y-4">
                            <Link href="/partnership" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                Partnership
                            </Link>
                            <Link href="/contact" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                Contact
                            </Link>
                            <Link href="/help" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                Help
                            </Link>
                        </div>
                    </div>

                    {/* Follow us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Follow us</h3>
                        <div className="space-y-4">
                            <Link href="https://twitter.com" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                X
                            </Link>
                            <Link href="https://medium.com" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                Medium
                            </Link>
                            <Link href="https://linkedin.com" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                LinkedIn
                            </Link>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Help</h3>
                        <div className="space-y-4">
                            <Link href="/help/ai-assistant" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                What does the AI assistant help with?
                            </Link>
                            <Link href="/help/premium-plan" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                What can the pro plan do?
                            </Link>
                            <Link href="/help/free-trial" className="block text-blue-400 hover:text-blue-300 transition-colors">
                                How do I start my free trial?
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400">Savr Tech © 2025</p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}