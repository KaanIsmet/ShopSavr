"use client"
import Image from "next/image"

export default function MoreFeatures() {
    return (
        <div>
            <h1 className="text-5xl font-bold py-10 px-4 max-w-7xl mx-auto">
                Good, Is There More?
            </h1>
            <br/>
            <div className="flex justify-center py-10 px-4 max-w-7xl mx-auto border-b border-blue-500">
                <div className="max-w-7xl px-4">
                    <Image
                        src={"package.svg"}
                        alt="package logo"
                        height={100}
                        width={100}
                    />
                    <h1 className="font-bold">
                        Save Items for Later
                    </h1>
                    <br/>
                    <span className="italic">
                        Not ready to buy? Save items<br/> to your 
                        favorites and come<br/> back anytime.
                    </span>
                </div>
                <div className="max-w-7xl px-4">
                    <Image
                        src={"star.svg"}
                        alt="star logo"
                        height={100}
                        width={100}
                    />
                    <h1 className="font-bold">
                        Personalized Suggestions
                    </h1>
                    <br/>
                    <span className="italic">
                        See recommended products<br/>
                         based on your lists and<br/>
                          interests
                    </span>
                </div>
            </div>
        </div>
    );
}