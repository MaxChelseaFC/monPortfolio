import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Presentation() {

    return (
        <motion.section
            className="flex flex-col gap-12 p-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Présentation</h2>
                <p className="mb-4">
                    Développeur web depuis plusieurs années, j’ai travaillé sur des projets variés allant
                    du site vitrine à l’application web complexe. Je suis passionné par les nouvelles technologies
                    et l’expérience utilisateur.
                </p>

                <h3 className="text-xl font-semibold mb-2">Contact</h3>

                {/* Compétences techniques avec badges colorés */}
                <h3 className="text-xl font-semibold mb-2">Compétences techniques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map(([categoryName, skills], idx) => (
                        <div key={idx}>
                            <h4 className="text-indigo-600 font-semibold mb-2">{categoryName}</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className={`px-2 py-1 text-sm rounded bg-blue-200`}
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