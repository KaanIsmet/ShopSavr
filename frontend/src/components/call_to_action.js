"use client"

import Image from "next/image"

export default function CallToAction() {
    return (
        <div>
            <h1 className="text-4xl font-bold mx-auto py-30 px-4 text-center">
                Try Premium Free for One<br/> Week — Only on<span className="text-blue-400"> Shop.Savr</span>
            </h1>
            <div className="max-w-2xl mx-auto my-8 px-4 flex justify-center">
                <Image
                    src={"badge.svg"}
                    alt="badge logo"
                    height={200}
                    width={200}
                />
            </div>
        </div>
    );
}