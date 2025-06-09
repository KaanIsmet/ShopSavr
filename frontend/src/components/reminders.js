"use client"


import Link from "next/link";
import Image from "next/image";

export default function Reminders() {
    return (
        <div>
            <div className="flex items-center justify-between py-10 px-4 max-w-7xl mx-auto">
                <div className="">
                    <Image
                    src={"iphone2.svg"}
                    alt="iphone logo 2"
                    height={800}
                    width={400}
                    />
                </div>
                
                <div className="">
                    <h1 className="font-bold text-2xl">
                        Reminders & Alerts
                    </h1>
                    <br/>
                    <span className="italic"> 
                        Stay ahead of the sales. Set alerts for electronics, accessories, 
                        or any<br/> product you're tracking from Best Buy or eBay. ShopSavr will notify<br/>
                        you instantly when the price drops, a discount goes live, or your<br/> saved item is running low — 
                        so you never miss a chance to save big.
                    </span>
                </div>
            </div>
        </div>
        
    );
}