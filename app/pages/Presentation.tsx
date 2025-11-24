import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Presentation() {
    return (
        <motion.section
            className="flex flex-col gap-12 p-6 max-w-6xl mx-auto"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            {/* ---- SECTION PRÉSENTATION ---- */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h2 className="text-2xl font-bold mb-4">Présentation</h2>
                    <p className="mb-4">
                        Développeur web depuis plusieurs années, j’ai travaillé sur des projets variés allant
                        du site vitrine à l’application web complexe. Je suis passionné par les nouvelles technologies
                        et l’expérience utilisateur.
                    </p>
                </div>

                {/* ---- SECTION CONTACT ---- */}
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>

                    <div className="flex gap-4">
                        <h4 className="font-semibold">📧 Email</h4>
                        <a
                            href="mailto:maxime.petit92@hotmail.com"
                            className="text-blue-600 underline"
                        >maxime.petit92@hotmail.com</a>
                    </div>
                    <div className="flex gap-4">
                    <h4 className="font-semibold">💼 LinkedIn</h4>
                        <a
                            href="https://www.linkedin.com/in/maxime-petit-2b60b7264/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >linkedin.com/in/maxime-petit</a>
                    </div>
                </div>
            </div>

            {/* ---- SECTION COMPÉTENCES ---- */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Compétences techniques</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map(([categoryName, skills], idx) => (
                            <div key={idx}>
                                <h4 className="text-indigo-600 font-semibold mb-2">{categoryName}</h4>

                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-2 py-1 text-sm rounded bg-blue-200"
                                        >
                                        {skill}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

        </motion.section>
);
}
