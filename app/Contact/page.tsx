"use client";
import { useState } from "react";
import { Button, Form } from 'antd';
import { FormInput } from "@/components/Inputs/FormInput";

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://smtp-backend-psi.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', message: '' });
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
        <div className="min-h-screen">
            <main className="container mx-auto px-4 pb-20 pt-8 sm:px-6 lg:pt-20">
                <div className="flex w-full flex-col items-center justify-center">
                    <Form onFinish={handleSubmit} className="mt-10 flex w-full max-w-md flex-col items-stretch" layout="vertical">
                        <span className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">Feel free to get in touch</span>
                        <Form.Item
                            label={<label className="font-poppins text-white">Name</label>}
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}

                        >
                            <FormInput
                                type="input"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            label={<label className="text-white ">Email</label>}
                            name="email"
                            rules={[{ required: true, message: 'Please enter your email' }]}

                        >
                            <FormInput
                                name="email"
                                type="input"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Item>
                        <Form.Item
                            label={<label className="text-white">Message</label>}
                            name="message"
                            rules={[{ required: true, message: 'Please enter your message' }]}

                        >
                            <FormInput
                                name="message"
                                type="textarea"
                                placeholder="Message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Form.Item>

                        {status.message && (
                            <div className={`alert alert-${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <Button type="primary" htmlType="submit" disabled={loading} className="w-full">
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Form>
                </div>

            </main>


        </div>
    );

}
