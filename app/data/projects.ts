export interface Project {
    id: string;
    title: string;
    description: string;
    details: string;
    image?: string;
    period?: string;
    skills?: string[][];
    place?: string;
    realisations?: string[][];
}

export const projects: Project[] = [
    {
        id: "stage-irrifrance",
        title: "Développeur full-stack (stage)",
        description: "Gestion des différentes applications de l'entreprise.",
        details: `Irrifrance est une entreprise spécialisée dans la production de machines agricoles, principalement destinées à l'irrigation des cultures. 
        
        Mon équipe était composée de trois personnes et j'occupais un rôle de développeur full-stack.
        
        J'ai essentiellement travaillé sur deux applications :
            – Le Back-Office, application interne développée avec Symfony, notamment utilisée dans des tâches de gestion par les employés, mais surtout présente pour faire le lien entre les données de l'ERP et les données du site client.
            – Le site client, composé en deux parties, avec une API développée avec Symfony et un front-end développé avec Angular.`,
        image: "/img/irrifrance_pivot.jpg",
        period: "4 mois (Avril 2025 - Juillet 2025)",
        place: "Irrifrance, Paulhan",
        skills: [["Langages et framewroks", "PHP", "Symfony", "TypeScript", "Angular", "HTML/CSS", "JavaScript", "Bootstrap"],["Outils et applications", "Git", "GitLab", "GitHub", "Bruno"],["Données", "PostgreSQL", "MySQL", "SQL"]],
        realisations: [["Developpement", "Synchronisation des données entre les différentes applications", "Exporter les données des machines sous forme de fichier excel", "Tutoriels interractifs pour aider les utilisateurs avec les nouvelles fonctionnalités", "Gestion des accès", "Trier les tableaux par colonne, modifier les informations, supprimer des produits, etc."],
            ["Maintenance", "Identification de bugs et correction", "Documentation technique"],
            ["Analyse", "Trier les informations retournées par les client pour en definir un besoin"]]
    },
    {
        id: "sae-s5",
        title: "Gestion des SAEs",
        description: "Application permettant de gérer les SAE du BUT Informatique.",
        details:
            `Les SAEs (situations d'apprentissage et d'évaluation) sont des projets donnés aux étudiants du BUT. Ils ont souvent pour objectif de simuler ce à quoi un projet dans un contexte professionnel pourrait ressembler.
            
            Durant la troisième et dernière année de mon diplôme, j'ai travaillé sur une SAE visant à créer une application permettant de gérer les SAEs.
            
            Cette application devait notamment permettre aux professeurs de créer des SAEs, ou encore d'évaluer les étudiants. Elle devait aussi permettre aux étudiants de créer des équipes, ou encore de visualiser leurs résultats.
            
            À cause de certaines circonstances (abandons et changements de parcours), je me suis retrouvé seul sur ce projet, initialement conçu pour une équipe de 4 ou 5.`,
        image: "/img/saes5.png",
        period: "5 mois (Septembre 2024 - Janvier 2025)",
        place: "IUT Montpellier-Sète, Sète",
        skills: [["Langages et framewroks", "PHP", "Symfony", "HTML/CSS", "JavaScript"],["Outils et applications", "Git", "GitLab", "Trello", "Docker"]],
        realisations: [["Developpement", "Travailler dans un environnement Docker", "Définir des accès selon le rôle", "Travailler en autonomie"],
            ["Analyse", "Identifier, définir et prioriser les tâches"]]
    }
];
