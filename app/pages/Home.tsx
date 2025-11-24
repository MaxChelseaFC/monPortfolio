import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Home() {
    const mainProjects = projects.slice(0, 2);

    return (
        <motion.section
            className="flex flex-col gap-8 p-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            {/* Profil et Compétences sur la même ligne */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Profil résumé avec lien vers CV */}
                <motion.div className="flex-1 bg-white p-6 rounded-lg shadow-md"
                            whileHover={{scale: 1.01}}
                            transition={{type: "spring", stiffness: 200}}
                >
                    <h2 className="text-2xl font-bold mb-2">Profil</h2>
                    <p>
                        Développeur passionné et curieux, diplômé d’un BUT Informatique,
                        j'apprends rapidement et apprécie travailler en équipe.
                    </p>
                    <p>
                        Passionné par les arts et le sport, je cherche à mettre mes compétences
                        techniques et relationnelles au service d’un poste dans le développement informatique.
                    </p>
                    <a
                        href="/img/CV_2025_Maxime_PETIT.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Consulter mon CV
                    </a>
                </motion.div>

                {/* Compétences */}
                <motion.div className="flex-1 bg-white p-6 rounded-lg shadow-md"
                            whileHover={{scale: 1.01}}
                            transition={{type: "spring", stiffness: 200}}>
                    <h2 className="text-2xl font-bold mb-2">Compétences</h2>
                    <ul className="list-disc list-inside">
                        <li>Symfony, HTML, CSS, Php, Bootstrap, Tailwind</li>
                        <li>TypeScript, Angular, React</li>
                        <li>SQL, NoSQL , PL/SQL, MySQL,</li>
                        <li>Git, GiLab, GitHub, Bruno, Postman</li>
                        <li>Intellij IDEA, Visual Studio Code</li>
                    </ul>
                </motion.div>
            </div>

            {/* Projets principaux */}
            <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{scale: 1.01}}
                transition={{type: "spring", stiffness: 200}}
            >
                <h2 className="text-2xl font-bold mb-2">Projets principaux</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mainProjects.map((proj) => (
                        <Link to={`/projects/${proj.id}`} key={proj.id}>
                            <motion.div
                                className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
                                whileHover={{scale: 1.03}}
                                transition={{type: "spring", stiffness: 300}}
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
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
