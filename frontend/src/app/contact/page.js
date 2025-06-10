"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [status, setStatus] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('Sending...');

        try {
            const response = await fetch('/api/contactEmail', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json()

            if (result.success) {
                setStatus('Message sent successfully')
                setFormData({'name': '', 'email': '', 'subject': '', 'message': ''})
            }
            else {
                setStatus(`Error: ${result.error}`);
            }
        } catch (error) {
            setStatus("Failed to send message. Please try again")
            console.error('Error: ', error)

        } finally {
            setIsLoading(false);
        }
    };





    return (
        <div>
            <Navbar/>
            <div className="bg-blue-200 py-16 h-150">
                <div>
                    <h1 className="text-5xl max-w-2xl mx-75 font-bold my-10">
                        Get in touch with us. We're here to assist you.
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between items-center mx-75 max-w-5xl">
                            <div>
                                <span>Your Name</span>
                                <br/>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange} 
                                    className="underline-input">
                                    
                                </input>
                            </div>
                            <div>
                                <span>Email Address</span>
                                <br/>
                                <input 
                                    type="text" 
                                    id="email" 
                                    name="email"
                                    value={formData.email} 
                                    onChange={handleChange}
                                    className="underline-input">
                                    
                                </input>
                            </div>
                            <div>
                                <span>Subject</span>
                                <br/>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="underline-input">
                                    
                                </input>
                            </div>
                        </div>
                        <div className="mx-75 py-10 text-left">
                            <span className="text-left">Message</span>
                            <br/>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                className="long-underline text-left">
                            </textarea>
                        </div>
                        <div className="mx-75 py-10">
                            <button type="submit" disabled={isLoading} className="message-button">
                                {isLoading ? 'Sending...' : 'Leave a message'}
                            </button>

                        </div>
                        {status && <p>{status}</p>}
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}