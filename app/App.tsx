import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import React from "react";
// @ts-ignore
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';

export default function App() {
    // @ts-ignore
    const linkClass = ({ isActive }) =>
        `hover:text-green-400 transition-colors ${isActive ? "text-green-400" : ""}`;

    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen relative z-10">

                {/* Header */}
                <header className="z-10 bg-gray-900 text-white p-6 text-center shadow-md">
                    <NavLink to="/" className="text-3xl font-bold hover:text-green-400 transition">
                        Maxime Petit
                    </NavLink>
                    <nav className="mt-4 flex justify-center gap-6 text-lg">
                        <NavLink to="/" className={linkClass}>Accueil</NavLink>
                        <NavLink to="/presentation" className={linkClass}>Présentation</NavLink>
                        <NavLink to="/projects" className={linkClass}>Projets</NavLink>
                    </nav>
                </header>

                <div className="fixed inset-0 z-0">
                    <GravityStarsBackground className="pointer-events-auto"/>
                </div>

                {/* Main */}
                <main className="z-10 flex-grow p-6">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/presentation" element={<Presentation/>}/>
                        <Route path="/projects" element={<Project/>}/>
                        <Route path="/projects/:id" element={<ProjectDetail/>}/>
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="z-10 bg-gray-900 text-white p-6 text-center shadow-inner">
                    &copy; 2025 Maxime Petit
                </footer>

            </div>

        </HashRouter>
    );
}
