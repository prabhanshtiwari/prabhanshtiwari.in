import React from "react";

const skills = [
    {
        category: "Frontend",
        items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
        category: "Core",
        items: ["DSA", "Problem Solving", "OOP"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative bg-neutral-950 text-white py-20 overflow-hidden"
        >
            {/* Gradient Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Skills
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((group, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-white transition duration-300"
                        >
                            {/* Category */}
                            <h3 className="text-lg font-semibold mb-4">
                                {group.category}
                            </h3>

                            {/* Items */}
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-3 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}