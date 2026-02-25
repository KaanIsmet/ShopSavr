"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SignUpCard from "@/components/signup_card";

export default function SignUp() {
    

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">
                <div className="bg-blue-200 h-180">
                    <h1 className="text-6xl mx-75 py-10 font-bold">
                    Get notified when our AI<br/> shopping assistant launches
                </h1>
                {/*card */}
                <div className="mx-150 py-10">
                    <SignUpCard/>
                </div>
                
            </div>
            </main>
        <Footer/>
        </div>
    );
}