export const Header = ({ timeLeft }:{ timeLeft: number }) => {
    return (
        <div
            id="header"
            className="pt-24 px-4 relative container"
        >
            <div
                id="timer"
                className="text-primary text-2xl font-bold text-left"
            >
                Time: {timeLeft}
            </div>
        </div>
    );
}
