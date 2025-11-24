import { cn } from "../lib/utils";
import { Words } from "./Words";

export const Game = () => {
	return (
		<div
			id="game"
			tabIndex={0}
			className={cn(
				"roboto-mono relative flex container overflow-hidden px-4 py-8 max-h-48 text-2xl/10"
			)}
		>
			<Words />
			<div id="cursor"></div>
			<div
				id="focusError"
				className="absolute pt-10 w-full in-focus:hidden"
			>
				Click here to focus
			</div>
		</div>
	);
};
