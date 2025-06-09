"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function About() {
    return (
        <div>
            <Navbar/>
            
            {/* Hero Section */}
            <div className="bg-blue-200">
                <br/>
                <br/>
                <div className="flex justify-center items-start py-10">
                    <div className="text-xl italic mx-auto">
                        <span className="font-bold">Shop.Savr</span> is an AI-powered shopping app that automatically finds the best deals<br/> across Best Buy, eBay, and Amazon.
                        Create smart shopping lists to save items for later,<br/> then follow direct links to purchase when prices drop. Upgrade 
                        to our monthly subscription<br/> to unlock your personal AI assistant, which recommends products based on your search history<br/>
                        and past purchases.
                    </div>
                    <div className="mx-auto px-2">
                        <Image
                            src={"iphone4.svg"}
                            alt="iphone 4 logo"
                            height={800}
                            width={400}
                        />
                    </div>
                </div>
                <br/>
            </div>

            {/* Mission Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            We believe smart shopping shouldn't require hours of research. Shop.Savr was created to eliminate 
                            the frustration of endless price comparisons and missed deals. Our mission is to make finding the 
                            best prices as simple as adding items to your wishlist and letting our AI do the rest.
                        </p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        How Shop.Savr Works
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Add Items to Your Lists
                            </h3>
                            <p className="text-gray-600">
                                Simply search for products and add them to your smart shopping lists. 
                                Our AI immediately starts tracking prices across Best Buy, eBay, and Amazon.
                            </p>
                        </div>
                        <div className="text-center bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Get Smart Alerts
                            </h3>
                            <p className="text-gray-600">
                                Receive instant notifications when prices drop below your target or reach 
                                their lowest point. No more manual checking required.
                            </p>
                        </div>
                        <div className="text-center bg-white p-8 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Buy with Confidence
                            </h3>
                            <p className="text-gray-600">
                                Click our direct links to purchase at the guaranteed lowest price. 
                                No markups, no commissions - just the best deals available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Why Choose Shop.Savr?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Smart Technology
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Real-Time Price Monitoring</h4>
                                        <p className="text-gray-600">Our AI scans millions of products 24/7 to ensure you never miss a deal</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Personalized Recommendations</h4>
                                        <p className="text-gray-600">Get product suggestions tailored to your shopping history and preferences</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Price History Tracking</h4>
                                        <p className="text-gray-600">See historical price data to make informed purchasing decisions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                User Experience
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">No Hidden Fees</h4>
                                        <p className="text-gray-600">Direct links to retailers with no markups or commissions added</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Cross-Platform Sync</h4>
                                        <p className="text-gray-600">Access your lists and alerts on any device, anywhere</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Trusted Retailers</h4>
                                        <p className="text-gray-600">We only partner with verified, reputable online stores</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-blue-500 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">
                        Shop.Savr by the Numbers
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">50K+</div>
                            <div className="text-blue-100">Happy Shoppers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">$2M+</div>
                            <div className="text-blue-100">Money Saved</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">1M+</div>
                            <div className="text-blue-100">Products Tracked</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                            <div className="text-blue-100">Price Accuracy</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Our Story
                    </h2>
                    <div className="prose prose-lg mx-auto text-gray-700">
                        <p className="text-lg leading-relaxed mb-6">
                            Shop.Savr was born from a simple frustration shared by millions of online shoppers: 
                            the endless time spent comparing prices across different websites, only to discover 
                            better deals after making a purchase.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Our founders, experienced software engineers and avid online shoppers, realized that 
                            artificial intelligence could solve this problem once and for all. Instead of manually 
                            checking dozens of websites, why not let smart technology do the heavy lifting?
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            After months of development and testing, Shop.Savr launched with a simple promise: 
                            to make smart shopping effortless. Today, we help thousands of users save both time 
                            and money every day, and we're just getting started.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-lg font-medium text-gray-900 italic">
                                "We built Shop.Savr because we needed it ourselves. Every feature, every algorithm, 
                                every design choice comes from our own shopping experiences and frustrations."
                            </p>
                            <p className="text-gray-600 mt-2">— The Shop.Savr Team</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Saving?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of smart shoppers who never overpay again.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/" 
                            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Start Free Today
                        </Link>
                        <Link 
                            href="/pricing" 
                            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors border border-white"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}