"use client"

import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

export default function FAQS() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: "What does the ai assistant help with?",
            answer: "Shop.Savr uses advanced AI technology to continuously scan prices across Best Buy, eBay, and Amazon. Our algorithms compare prices in real-time and alert you when items on your wishlist drop to their lowest prices."
        },
        {
            question: "What can the pro trial do?",
            answer: "he Pro plan unlocks powerful features including your personal AI shopping assistant, real-time price drop alerts, unlimited shopping lists, price history tracking, personalized product recommendations, advanced search filters, and priority customer support. You'll also get early access to new features before they're released to free users."
        },
        {
            question: "How do I start my free trial?",
            answer: "Starting your free trial is easy! Simply sign up for Shop.Savr with your email, then upgrade to Pro or Family from your account settings. You'll get one week of full access to all premium features with no credit card required. Cancel anytime during the trial period at no charge."
        },
        {
            question: "How does Shop.Savr find the best deals?",
            answer: "Shop.Savr uses advanced AI technology to continuously scan prices across Best Buy, eBay, and Amazon. Our algorithms compare prices in real-time and alert you when items on your wishlist drop to their lowest prices."
        },
        {
            question: "Is Shop.Savr really free?",
            answer: "Yes! Our free plan includes price comparison across all three major retailers, basic shopping lists, and direct checkout links. No hidden fees or credit card required to get started."
        },
        {
            question: "What makes the AI assistant worth upgrading to Pro?",
            answer: "Our AI assistant learns your shopping preferences and recommends products you'll actually want to buy. It tracks your browsing history, analyzes your past purchases, and sends personalized deals that match your interests and budget."
        },
        {
            question: "How accurate are the price comparisons?",
            answer: "Our price data is updated in real-time and sourced directly from retailer APIs. We guarantee 99.9% price accuracy, and if you find a discrepancy, we'll investigate and correct it immediately."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at your next billing cycle, and you'll keep access to Pro features until then."
        },
        {
            question: "Do you take a commission on purchases?",
            answer: "No! We provide direct links to stores without any markup or commission. You pay the same price as shopping directly from the retailer, but with the convenience of our deal-finding technology."
        },
        {
            question: "How do price drop alerts work?",
            answer: "Once you add items to your shopping lists, our Pro plan monitors prices 24/7. You'll get instant notifications via email or push notification when prices drop below your target or reach their lowest point in 30 days."
        },
        {
            question: "Is my personal shopping data secure?",
            answer: "Your privacy is our priority. We use bank-level encryption to protect your data and never sell your information to third parties. Your shopping history stays private and is only used to improve your personalized recommendations."
        },
        {
            question: "What's included in the Family plan?",
            answer: "The Family plan includes everything in Pro, plus up to 5 family member accounts, shared shopping lists, family budget tracking, parental controls, and group wish lists. Perfect for households who shop together."
        },
        {
            question: "Do you offer a money-back guarantee?",
            answer: "Yes! We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with Shop.Savr, contact our support team for a full refund."
        },
        {
            question: "How do I contact customer support?",
            answer: "Free users get email support with 24-48 hour response times. Pro and Family subscribers get priority support with responses within 4-6 hours. You can reach us through the app or email support@shopsavr.com."
        },
        {
            question: "Can I use Shop.Savr on multiple devices?",
            answer: "Yes! Your account syncs across all devices. Use Shop.Savr on your phone, tablet, or computer - your shopping lists and preferences stay in sync everywhere."
        }
    ];

    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-blue-200 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Got questions? We've got answers. Find everything you need to know about Shop.Savr.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4 ">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <span className="text-2xl text-blue-500 flex-shrink-0">
                                        {openFAQ === index ? '−' : '+'}
                                    </span>
                                </button>
                                {openFAQ === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 text-center bg-blue-500 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-lg mb-6 text-blue-100">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:support@shopsavr.com"
                                className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Email Support
                            </a>
                            <Link 
                                href="/contact"
                                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors border border-white"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}