import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.section className="p-6 max-w-6xl mx-auto flex flex-col gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Tous les projets</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map(project => (
                        <Link to={`/projects/${project.id}`} key={project.id}>
                            <motion.div
                                className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
                                whileHover={{scale: 1.02}}
                                transition={{type: "spring", stiffness: 200}}
                            >
                                {/* IMAGE */}
                                <div className="bg-gray-200 h-48 flex items-center justify-center">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-500">Image</span>
                                    )}
                                </div>

                                {/* INFOS */}
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-700">{project.description}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>

    );
}