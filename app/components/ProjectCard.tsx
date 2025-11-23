import { Link } from "react-router-dom";

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image?: string;
}

export default function ProjectCard({ id, title, description, image }: ProjectCardProps) {
    return (
        <div className="project-card">
            <img src={image || "/placeholder.png"} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/project/${id}`}>Voir le projet</Link>
        </div>
    );
}