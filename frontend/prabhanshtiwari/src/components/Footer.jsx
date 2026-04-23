import React from "react";

export default function Footer() {
    return (
        <footer className="relative bg-neutral-950 text-neutral-300 border-t border-neutral-800 overflow-hidden">

            {/* Gradient Glow (same theme) */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Prabhansh Tiwari
                        </h2>
                        <p className="mt-3 text-sm text-neutral-400 max-w-sm">
                            Full Stack Developer focused on building scalable web applications
                            and solving complex DSA problems.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">

                        <div>
                            <h3 className="text-sm font-semibold text-white mb-3">Navigation</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                                <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-white mb-3">Connect</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:your@email.com" className="hover:text-white transition">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-neutral-800" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

                    <p className="text-neutral-500">
                        © {new Date().getFullYear()} Prabhansh Tiwari. All rights reserved.
                    </p>

                    <p className="text-neutral-500">
                        Built with React + Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}