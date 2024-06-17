import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    // FixMe: Form submission logic here
    };

    const validateField = (name, value) => {
        if (!value) {
        toast.error(`${name} is required`);
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        toast.error('Invalid email address');
        }
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={() => validateField('Name', form.name)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={() => validateField('Email', form.email)}
                    />
                </div>
                <div>
                <label>Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={() => validateField('Message', form.message)}
                />
                </div>
                <button type="submit">Send</button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default Contact;
