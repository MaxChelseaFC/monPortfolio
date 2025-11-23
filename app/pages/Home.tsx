export default function Home() {
    return (
        <section className="flex flex-col gap-8">
            {/* Profil résumé */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">Profil</h2>
                <p>
                    Développeur passionné, spécialisé en front-end React et Tailwind, avec un intérêt pour la création
                    d'interfaces modernes et réactives.
                </p>
            </div>

            {/* Compétences */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">Compétences</h2>
                <ul className="list-disc list-inside">
                    <li>HTML, CSS, Tailwind</li>
                    <li>React, TypeScript, Redux</li>
                    <li>Node.js, Express, MongoDB</li>
                    <li>Git, Vite, CI/CD</li>
                </ul>
            </div>

            {/* Projets principaux */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">Projets principaux</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg hover:shadow-lg">
                        <div className="bg-gray-200 h-32 mb-2 flex items-center justify-center">Image</div>
                        <h3 className="text-xl font-semibold">Portfolio Personnel</h3>
                        <p>Site web présentant mes projets et mon parcours.</p>
                    </div>
                    <div className="p-4 border rounded-lg hover:shadow-lg">
                        <div className="bg-gray-200 h-32 mb-2 flex items-center justify-center">Image</div>
                        <h3 className="text-xl font-semibold">Projet E-commerce</h3>
                        <p>Application web complète avec panier et paiement en ligne.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}