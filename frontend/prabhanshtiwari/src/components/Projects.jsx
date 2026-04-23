import React from "react";

const projects = [
    {
        title: "AI Chat App",
        desc: "Real-time AI chat with streaming responses and modern UI.",
        img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg",
        github: "#",
    },
    {
        title: "Portfolio Website",
        desc: "Personal portfolio with animations and responsive design.",
        img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg",
        github: "#",
    },
    {
        title: "E-commerce Platform",
        desc: "Full-stack app with authentication, cart, and payments.",
        img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg",
        github: "#",
    },
    {
        title: "Task Manager",
        desc: "Manage tasks efficiently with drag-and-drop UI.",
        img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg",
        github: "#",
    },
    {
        title: "Blog Platform",
        desc: "Markdown-based blogging platform with authentication.",
        img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg",
        github: "#",
    },
    {
        title: "Weather App",
        desc: "Real-time weather updates using external APIs.",
        img: "https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative bg-neutral-950 text-white py-20 overflow-hidden"
        >
            {/* Gradient Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Projects
                </h2>

                {/* Masonry-style grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projects.map((project, i) => (

                        <a
                            key={i}
                            href={project.github}
                            target="_blank"
                            className="break-inside-avoid flex flex-col md:flex-row items-center bg-neutral-900/40 p-5 border border-neutral-800 rounded-2xl hover:border-white transition duration-300"
                        >
                            {/* Image */}
                            <img
                                className="object-cover w-full rounded-xl h-48 md:h-auto md:w-40 mb-4 md:mb-0"
                                src={project.img}
                                alt={project.title}
                            />

                            {/* Content */}
                            <div className="flex flex-col justify-between md:p-4 leading-normal">
                                <h5 className="mb-2 text-lg font-semibold tracking-tight text-white">
                                    {project.title}
                                </h5>

                                <p className="mb-4 text-sm text-neutral-400">
                                    {project.desc}
                                </p>

                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center text-sm px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition"
                                    >
                                        View Project →
                                    </button>
                                </div>
                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </section>
    );
}