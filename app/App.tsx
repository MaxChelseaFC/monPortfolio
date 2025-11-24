import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen">
                <header className="bg-gray-900 text-white p-6 text-center">
                    <a href="#/">
                    <h1 className="text-3xl font-bold">Maxime Petit</h1>
                    </a>
                    <nav className="mt-4 flex justify-center gap-6 text-lg">
                        <a href="#/" className="hover:text-green-400">Accueil</a>
                        <a href="#/presentation" className="hover:text-green-400">Présentation</a>
                        <a href="#/projects" className="hover:text-green-400">Projets</a>
                    </nav>
                </header>

                <main className="flex-grow p-6 bg-gray-50">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/presentation" element={<Presentation />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                    </Routes>
                </main>

                <footer className="bg-gray-900 text-white p-6 text-center">
                    &copy; 2025 Maxime Petit | <a href="mailto:contact@maxime.com" className="text-green-400">Contact</a>
                </footer>
            </div>
        </HashRouter>
    );
}