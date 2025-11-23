import { Game } from "../components/Game";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <Header />
            <Game />

            {/* Footer */}
        </div>
    );
};
