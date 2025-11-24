import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { skillCategories } from "../data/skills";

export default function Home() {
    const mainProjects = projects.slice(0, 2);

    // Pour l'aperçu, on prend seulement 2 catégories
    const previewSkills = skillCategories.slice(0, 2);

    return (
        <motion.section
            className="flex flex-col gap-12 p-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Profil et Compétences */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Profil */}
                <Link to="/presentation" className="flex-1">
                    <motion.div
                        className="flex-1 bg-white p-6 rounded-lg shadow-md"
                        whileHover={{scale: 1.05}}
                        transition={{type: "spring", stiffness: 200}}
                    >
                        <h2 className="text-2xl font-bold mb-4">Profil</h2>
                        <p className="mb-2">
                            Développeur passionné et curieux, diplômé d’un BUT Informatique,
                            j'apprends rapidement et apprécie travailler en équipe.
                        </p>
                        <p className="mb-4">
                            Passionné par les arts et le sport, je cherche à mettre mes compétences
                            techniques et relationnelles au service d’un poste dans le développement informatique.
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Voir mon profil détaillé →</p>
                    </motion.div>
                </Link>

                {/* Aperçu Compétences */}
                <Link to="/presentation" className="flex-1">
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Compétences</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                            {previewSkills.map(([categoryName, skills], idx) => (
                                <div key={idx}>
                                    <h3 className="text-indigo-600 font-semibold mb-2">{categoryName}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.slice(0, 6).map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className={`px-2 py-1 text-sm rounded bg-blue-200`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {skills.length > 6 && (
                                            <span className={`px-2 py-1 text-sm rounded bg-blue-200`}>…
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Voir toutes mes compétences →</p>
                    </motion.div>
                </Link>
            </div>

            {/* Projets principaux */}
            <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                <h2 className="text-2xl font-bold mb-4">Projets principaux</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mainProjects.map((proj) => (
                        <Link to={`/projects/${proj.id}`} key={proj.id}>
                            <motion.div
                                className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gray-200 h-48 flex items-center justify-center">
                                    {proj.image ? (
                                        <img
                                            src={proj.image}
                                            alt={proj.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-500">Image</span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                                    <p className="text-gray-700">{proj.description}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
