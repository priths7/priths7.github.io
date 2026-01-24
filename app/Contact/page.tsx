"use client";
import { Navbar } from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { useState } from "react";
const Wall = dynamic(() => import('@/components/TextAnimations/Wall'), { ssr: false });

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Network error. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);


    return (
        <div className="min-h-screen bg-cover bg-center">
            <Navbar />
            <Wall />
            <div className="container mx-auto lg:pt-24">
                <div className="w-full flex flex-col justify-center items-center">
                    {/* <span className="font-poppins font-light text-white md:text-[28px] md:leading-[34.13px] xs:text-[24px] xs:leading-[29.26px] text-center">is very simple</span> */}
                    <form onSubmit={handleSubmit} className="flex flex-col w-full items-center mt-10">
                        <span className="font-poppins font-bold text-white text-center">Fell free to get in touch</span>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                className="flex-1 bg-transparent regField  border-white border-2 text-white rounded-[40px] xs:w-[300px] md:w-[350px] p-[13px]"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                className="flex-1 bg-transparent regField  border-white border-2 text-white rounded-[40px] xs:w-[300px] md:w-[350px] p-[13px]"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                className="flex-1 bg-transparent regField  border-white border-2 text-white rounded-[40px] xs:w-[300px] md:w-[350px] p-[13px]"
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                className="bg-transparent border-white border-2 rounded-[22px] resize-none text-white focus:border-[#715AFF] focus:outline-none font-poppins p-4 text-sm leading-[21px] regField"
                                id="message"
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {status.message && (
                            <div className={`alert alert-${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

            </div>


        </div>
    );

}