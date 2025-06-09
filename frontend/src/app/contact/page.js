"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Contact() {
    return (
        <div>
            <Navbar/>
            <div className="bg-blue-200 py-16 h-150">
                <div>
                    <h1 className="text-5xl max-w-2xl mx-75 font-bold my-10">
                        Get in touch with us. We're here to assist you.
                    </h1>
                    <form>
                        <div className="flex justify-between items-center mx-75 max-w-5xl">
                            <div>
                                <span>Your Name</span>
                                <br/>
                                <input type="text" id="name" name="name" className="underline-input"></input>
                            </div>
                            <div>
                                <span>Email Address</span>
                                <br/>
                                <input type="text" id="email" name="email" className="underline-input"></input>
                            </div>
                            <div>
                                <span>Phone Number(optional)</span>
                                <br/>
                                <input type="text" id="number" name="number" className="underline-input"></input>
                            </div>
                        </div>
                        <div className="mx-75 py-10 text-left">
                            <span className="text-left">Message</span>
                            <br/>
                            <textarea id="message" name="message" className="long-underline text-left"></textarea>
                        </div>
                        <div className="mx-75 py-10">
                            <button type="submit" className="message-button">
                            Leave a message
                            </button>
                        </div>
                        
                    </form>
                   
                </div>


            </div>
            <Footer/>
        </div>
    );
}