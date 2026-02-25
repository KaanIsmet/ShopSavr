"use client"
import Image from "next/image"
import { useState } from "react";

export default function Assistant() {
    return (
        <div>
            <div className="bg-gray-200 h-100 -mt-64">
                
            </div>
            <div className="bg-gray-200 h-180 mb-100">
                <div className="flex items-center justify-between py-10 px-4 max-w-7xl mx-auto">
                        <div>
                            <h1 className="text-2xl font-bold">
                                AI Shopping Assistant
                            </h1>
                            <span>
                                Get personalized help anytime with your built-in AI shopping<br/> assistant. Ask for the best deals, 
                                compare similar products, or get<br/> recommendations based on your preferences — all in natural<br/> language.
                                Powered by ChatGPT, the assistant understands what<br/> you're looking for and helps you shop smarter, faster,
                                and stress-free.<br/> Exclusive to premium users.
                            </span>
                        </div>
                        <div>
                            <Image
                                src={"iphone3.svg"}
                                alt="iphone 3 logo"
                                height={800}
                                width={400}
                            />
                        </div>
                </div>
            </div>
        </div>
    );
}