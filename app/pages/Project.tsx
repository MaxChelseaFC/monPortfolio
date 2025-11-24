import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import React from "react";

export default function Projects() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Projets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj) => (
                    <Link
                        to={`/projects/${proj.id}`}
                        key={proj.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition block"
                    >
                        <div className="bg-gray-200 h-32 mb-2 flex items-center justify-center">
                            {proj.image ? (
                                <img src={proj.image} alt={proj.title} className="h-full w-full object-cover"/>
                            ) : (
                                "Image"
                            )}
                        </div>

                        <h3 className="text-xl font-semibold">{proj.title}</h3>
                        <p>{proj.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}