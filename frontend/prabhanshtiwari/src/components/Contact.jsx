import React, { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section
            id="contact"
            className="relative bg-neutral-950 text-white py-20 overflow-hidden"
        >
            {/* Gradient Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto px-6 text-center">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Contact Me
                </h2>

                <p className="text-neutral-400 mb-10">
                    Have an opportunity, collaboration, or just want to say hi? Send me a message.
                </p>

                {/* Form */}
                <form className="space-y-6 text-left">

                    {/* Name */}
                    <div>
                        <label className="text-sm text-neutral-400">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-purple-500 outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm text-neutral-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-purple-500 outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm text-neutral-400">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className="w-full mt-2 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-purple-500 outline-none transition"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-medium hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Alternative contact */}
                <p className="text-sm text-neutral-500 mt-6">
                    Or email me directly at{" "}
                    <a
                        href="mailto:your@email.com"
                        className="text-purple-400 hover:underline"
                    >
                        prabhansh.dev@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}