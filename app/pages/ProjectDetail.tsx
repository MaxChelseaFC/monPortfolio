import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <p className="text-red-500">Projet introuvable.</p>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-8">
            {/* Retour */}
            <Link
                to="/projects"
                className="text-blue-500 hover:underline mb-4 inline-block"
            >
                ← Retour aux projets
            </Link>

            {/* Titre */}
            <h1 className="text-3xl font-bold mb-6">{project.title}</h1>

            {/* Image */}
            <div className="bg-gray-200 mb-6 flex items-center justify-center rounded-lg overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-gray-500">Image non disponible</span>
                )}
            </div>

            {/* Infos principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                {/* Lieu */}
                {project.place && (
                    <div>
                        <h2 className="text-indigo-600 font-semibold text-lg">Lieu</h2>
                        <p className="text-gray-700">{project.place}</p>
                    </div>
                )}

                {/* Période */}
                {project.period && (
                    <div>
                        <h2 className="text-indigo-600 font-semibold text-lg">Période</h2>
                        <p className="text-gray-700">{project.period}</p>
                    </div>
                )}
            </div>

            {/* Contexte */}
            <div className="mb-6">
                <h2 className="text-indigo-600 font-semibold text-lg mb-1">Contexte</h2>
                <p className="mt-4 text-gray-700 whitespace-pre-line">
                    {project.details}
                </p>
            </div>

            {/* Compétences par catégorie */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {project.skills && project.skills.length > 0 && (
                    <div>
                        <h2 className="text-indigo-600 font-semibold text-lg mb-2">
                            Compétences
                        </h2>
                        {project.skills.map((category, idx) => {
                            if (!category || category.length === 0) return null;
                            const [categoryName, ...skills] = category;
                            return (
                                <div key={idx} className="mb-4">
                                    <h3 className="text-indigo-500 font-medium mb-2">{categoryName}</h3>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        {skills.map((skill, sIdx) => (
                                            <li key={sIdx}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    )}
                    {project.realisations && project.realisations.length > 0 && (
                    <div>
                        <h2 className="text-indigo-600 font-semibold text-lg mb-2">
                            Réalisations
                        </h2>
                        {project.realisations.map((category, idx) => {
                            if (!category || category.length === 0) return null;
                            const [categoryName, ...skills] = category;
                            return (
                                <div key={idx} className="mb-4">
                                    <h3 className="text-indigo-500 font-medium mb-2">{categoryName}</h3>
                                    <ul className="list-disc list-inside text-gray-700 ml-4">
                                        {skills.map((skill, sIdx) => (
                                            <li key={sIdx}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    )}
                </div>
        </div>
    );
}