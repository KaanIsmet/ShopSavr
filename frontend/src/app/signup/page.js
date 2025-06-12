"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SignUpCard from "@/components/signup_card";

export default function SignUp() {
    

    return (
        <div>
        <Navbar/>
        <div>
            <div className="bg-blue-200">
                <h1 className="text-6xl mx-75 py-10 font-bold">
                    Get notified when our AI<br/> shopping assistant launches
                </h1>
                {/*card */}
                <div className="mx-150 py-10">
                    <SignUpCard/>
                </div>
                
            </div>
        </div>
        <Footer/>
        </div>
    );
}