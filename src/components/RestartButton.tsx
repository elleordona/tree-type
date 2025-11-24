import { useRef } from "react";

export const RestartButton = ({
    onRestart: handleRestart,
    // className = "",
}: {
    onRestart?: () => void;
    // className?: string;
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        buttonRef.current?.blur();
        handleRestart?.();
    }

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            className={`custom-button`} //${className}`}
            >
                New Game
        </button>
    );
};
