import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Maxime PETIT</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/presentation">Présentation</Link></li>
                </ul>
            </nav>
        </header>
    );
}