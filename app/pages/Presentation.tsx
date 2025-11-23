export default function Presentation() {
    return (
        <section className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Présentation</h2>
            <p>
                Développeur web depuis plusieurs années, j’ai travaillé sur des projets variés allant
                du site vitrine à l’application web complexe. Je suis passionné par les nouvelles technologies
                et l’expérience utilisateur.
            </p>

            <h3 className="text-xl font-semibold mt-4">Compétences techniques</h3>
            <ul className="list-disc list-inside">
                <li>Front-end : React, Tailwind, TypeScript</li>
                <li>Back-end : Node.js, Express, MongoDB</li>
                <li>Outils : Git, Vite, CI/CD, Test Driven Development</li>
            </ul>
        </section>
    );
}