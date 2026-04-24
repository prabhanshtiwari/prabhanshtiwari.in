import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

// 🔹 Categories
const categories = ["All", "Web", "Fullstack", "AI"];

// 🔹 Projects Data
const projects = [
    {
        title: "Fintech Dashboard",
        category: "Web",
        description:
            "A comprehensive financial analytics platform with real-time data visualization.",
        image: "/projects/project1.png",
        tags: ["React", "Typescript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "E-Commerce Platform",
        category: "Fullstack",
        description:
            "A full-featured e-commerce solution with payments and analytics.",
        image: "/projects/project2.png",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "AI Writing Assistant",
        category: "AI",
        description:
            "An intelligent writing tool powered by GPT models.",
        image: "/projects/project3.png",
        tags: ["React", "OpenAI", "Python", "FastAPI"],
        link: "#",
        github: "#",
    },
    {
        title: "Project Management Tool",
        category: "Fullstack",
        description:
            "A collaborative workspace with real-time updates and task tracking.",
        image: "/projects/project4.png",
        tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    // 🔹 Filter Logic
    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-56 h-56 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mx-auto max-w-2xl mb-12">
                    <span className="text-secondary-foreground text-xs tracking-wider uppercase">
                        Featured Work
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-secondary-foreground">
                        Projects that{" "}
                        <span className="font-serif italic text-white">
                            make an impact.
                        </span>
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        A selection of my recent work solving real-world problems.
                    </p>
                </div>

                {/* 🔹 Filter Buttons */}
                <div className="flex justify-center flex-wrap gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm transition 
                ${activeCategory === cat
                                    ? "bg-primary text-white"
                                    : "bg-surface text-muted-foreground hover:bg-primary/20"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 🔹 Grid (2 cards per row) */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {filteredProjects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group glass rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />

                                    {/* Hover buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                                        <a
                                            href={project.link}
                                            className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>

                                        <a
                                            href={project.github}
                                            className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 space-y-3">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold group-hover:text-primary transition">
                                            {project.title}
                                        </h3>

                                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                                    </div>

                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-3 py-1 text-[10px] rounded-full bg-surface border border-border/50 text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔹 Empty State */}
                {filteredProjects.length === 0 && (
                    <p className="text-center mt-10 text-muted-foreground">
                        No projects found in this category.
                    </p>
                )}
            </div>
        </section>
    );
};