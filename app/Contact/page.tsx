"use client";
import { useState, useRef } from "react";
import { Button, Form } from 'antd';
import { FormInput } from "@/components/Inputs/FormInput";

export default function Page() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);
    const senderName = useRef('');

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://smtp-backend-psi.vercel.app/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                senderName.current = formData.name;
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message });
            }
        } catch {
            setStatus({ type: 'error', message: 'Network error. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 pb-20 pt-8 sm:px-6 lg:pt-20">
                <div className="flex w-full flex-col items-center justify-center">

                    {status.type === 'success' ? (
                        // ── Success state ──────────────────────────────────────────
                        <div className="mt-10 flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-white/20 p-10 text-center backdrop-blur-sm shadow-2xl">
                            {/* Animated green checkmark */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#0F0]/60 bg-[#0F0]/10">
                                <svg className="h-8 w-8 text-[#0F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-2xl font-bold text-white">
                                    Message sent{senderName.current ? `, ${senderName.current.split(' ')[0]}` : ''}!
                                </h2>
                                <p className="text-sm leading-relaxed text-white/60">
                                    {`Thanks for reaching out. I'll get back to you as soon as possible.`}
                                </p>
                            </div>

                            <button
                                onClick={() => setStatus({ type: '', message: '' })}
                                className="mt-2 rounded-lg border border-white/20 px-5 py-2 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        // ── Form ───────────────────────────────────────────────────
                        <Form
                            onFinish={handleSubmit}
                            className="mt-10 flex w-full max-w-md flex-col items-stretch rounded-2xl border border-white/20 p-6 shadow-2xl backdrop-blur-sm"
                            layout="vertical"
                        >
                            <span className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
                                Feel free to get in touch
                            </span>

                            <Form.Item
                                label={<label className="font-poppins text-white">Name</label>}
                                name="name"
                                rules={[{ required: true, message: 'Please enter your name' }]}
                            >
                                <FormInput type="input" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                            </Form.Item>

                            <Form.Item
                                label={<label className="text-white">Email</label>}
                                name="email"
                                rules={[{ required: true, message: 'Please enter your email' }]}
                            >
                                <FormInput type="input" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                            </Form.Item>

                            <Form.Item
                                label={<label className="text-white">Message</label>}
                                name="message"
                                rules={[{ required: true, message: 'Please enter your message' }]}
                            >
                                <FormInput type="textarea" name="message" placeholder="Message" rows={3} value={formData.message} onChange={handleChange} />
                            </Form.Item>

                            {status.type === 'error' && (
                                <p className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                                    {status.message}
                                </p>
                            )}

                            <Button type="primary" htmlType="submit" disabled={loading} className="w-full">
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Form>
                    )}

                </div>
            </main>
        </div>
    );
}