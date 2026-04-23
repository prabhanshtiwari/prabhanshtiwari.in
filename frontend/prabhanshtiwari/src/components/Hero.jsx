import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white overflow-hidden">

            {/* Background Gradient Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
                >
                    Hi, I’m{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        Prabhansh Tiwari
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto"
                >
                    Full Stack Developer focused on building scalable web applications and
                    solving complex DSA problems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:bg-neutral-200 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-2xl border border-neutral-700 hover:border-white transition"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}