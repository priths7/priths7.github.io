"use client";
import { Navbar } from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { useState } from "react"; import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { FormInput } from "@/components/Inputs/FormInput";
import { debug } from "console";
const Wall = dynamic(() => import('@/components/TextAnimations/Wall'), { ssr: false });

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
        <div className="min-h-screen bg-cover bg-center">
            <Navbar />
            <Wall />
            <div className="container mx-auto lg:pt-20">
                <div className="w-full flex flex-col justify-center items-center">
                    <Form onFinish={handleSubmit} className="flex flex-col w-full items-center mt-10" layout="vertical">
                        <span className="text-3xl font-poppins font-bold text-white text-center mb-12">Fell free to get in touch</span>
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

                        <Button type="primary" htmlType="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                    </Form>
                </div>

            </div>


        </div>
    );

}