import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";

export default function App() {
    return (
        <HashRouter>
            <header>
                <Link to="/">Home</Link>
                <Link to="/presentation">Présentation</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/presentation" element={<Presentation />} />
                </Routes>
            </main>
        </HashRouter>
    );
}