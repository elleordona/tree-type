import { Game } from "../components/Game";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { RestartButton } from "../components/RestartButton";
import { Results } from "../components/Results";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* Theme Toggle */}
			<ThemeToggle />

			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<Header timeLeft={30} />
			<Game />
			<RestartButton />
			<Results
                errors={0}
                accuracyPercentage={100}
                totalWords={0}
            />

			{/* Footer */}
		</div>
	);
};
