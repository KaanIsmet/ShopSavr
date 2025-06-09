"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    return (
        <nav className="bg-blue-200">  {/* Changed to light blue */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Left side: Logo + Navigation Links */}
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center space-x-2">
                            {/* Logo */}
                            <Image 
                                src="/logo.svg" 
                                alt="Shop.Savr Logo" 
                                width={32} 
                                height={24}
                                className="h-6 w-auto"
                            />
                            {/* Text */}
                            <span className="text-2xl font-bold text-black">  {/* Changed to black text */}
                                Shop.Savr
                            </span>
                        </Link>
                        
                        <div className="flex items-center space-x-8">  {/* Increased spacing */}
                            <Link href="/#features" className="text-lg text-black hover:text-gray-700" scroll={true}>  {/* Changed to black */}
                                Features
                            </Link>
                            <Link href="/about" className="text-lg text-black hover:text-gray-700">
                                About
                            </Link>
                            <Link href="/pricing" className="text-lg text-black hover:text-gray-700">
                                Pricing
                            </Link>
                            <Link href="/faqs" className="text-lg text-black hover:text-gray-700">
                                FAQs
                            </Link>
                            <Link href="/contact" className="text-lg text-black hover:text-gray-700">
                                Contact
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right side: Sign Up Button */}
                    <Link 
                        href="/signup"
                        className="signup-button"
                    >
                        Sign up
                    </Link>
                </div> 
            </div>
        </nav>
    );
}