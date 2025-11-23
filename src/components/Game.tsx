import { Words } from "./Words"

export const Game = () => {
    return (
        <div>
            <div
                id="game"
                className="px-4 py-8 relative container"
            >
                <Words />
                <div id="cursor"></div>
            </div>
            <button
                className="custom-button"
            >
                New Game
            </button>
        </div>
        );
};
