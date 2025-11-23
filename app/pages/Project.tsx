export default function Projects() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {["Projet A", "Projet B", "Projet C"].map((proj, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
                        <div className="bg-gray-200 h-40 mb-2 flex items-center justify-center">
                            Image placeholder
                        </div>
                        <h3 className="text-xl font-semibold">{proj}</h3>
                        <p>Description détaillée du projet {proj} ici...</p>
                    </div>
                ))}
            </div>
        </section>
    );
}