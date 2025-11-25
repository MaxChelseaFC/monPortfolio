import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { PlusIcon } from 'lucide-react';
import {
    LiquidButton,
    type LiquidButtonProps,
} from '../../components/animate-ui/components/buttons/liquid';

interface LiquidButtonDemoProps {
    variant: LiquidButtonProps['variant'];
    size: LiquidButtonProps['size'];
}

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
                <motion.div className="bg-white p-6 rounded-lg shadow-md flex-1"
                            whileHover={{scale: 1.02}}
                            transition={{type: "spring", stiffness: 200}}>
                    <h2 className="text-2xl font-bold mb-4">Présentation</h2>
                    <p className="mb-4">
                        Diplomé d'un BUT Informatique, je suis actuellement à la recherche d'un premier emploi en tant
                        que développeur. <br/>
                        J’aime comprendre comment les choses fonctionnent, apprendre de nouvelles technologies et
                        travailler sur des projets qui ont un impact réel.
                    </p>
                    <LiquidButton asChild variant="default" size="default">
                        <a
                            href="/img/CV_2025_Maxime_PETIT.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Consulter mon CV
                        </a>
                    </LiquidButton>

                </motion.div>

                {/* ---- SECTION CONTACT ---- */}
                <motion.div className="bg-white p-6 rounded-lg shadow-md flex-1"
                            whileHover={{scale: 1.02}}
                            transition={{type: "spring", stiffness: 200}}>
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-4">
                            <h4 className="font-semibold">📧 Email</h4><p>maxime.petit92@hotmail.com</p>
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
                </motion.div>
            </div>

            {/* ---- SECTION COMPÉTENCES ---- */}
            <motion.div className="bg-white p-6 rounded-lg shadow-md"
                        whileHover={{scale: 1.02}}
                        transition={{type: "spring", stiffness: 200}}>
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
                </motion.div>

            {/* ---- SECTION HOBBIES ---- */}
            <motion.div className="bg-white p-6 rounded-lg shadow-md "
                        whileHover={{scale: 1.02}}
                        transition={{type: "spring", stiffness: 200}}>
                <h2 className="text-2xl font-bold mb-4">Centres d’intérêt</h2>

                <ul>
                    <li>🎬 Cinema </li>
                    <li>🏃‍♂️️ Sport - football, course à pied, basketball, tennis, formule 1...</li>
                    <li>🎮 Jeux vidéo</li>
                    <li>🎵 Musique</li>
                </ul>
            </motion.div>

        </motion.section>
    );
}
