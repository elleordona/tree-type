import { cn } from "../lib/utils";

export const Results = ({
    errors,
    accuracyPercentage,
    totalWords,
    className = "",
} : {
    errors: number;
    accuracyPercentage: number;
    totalWords: number;
    className?: string;
}) => {
    return (
        <ul
            className={cn(
                "roboto-mono container px-4 py-8 flex flex-col gap-4",
                className
            )}
        >
            <li className="text-xl font-semibold">Results</li>
            <li>Accuracy: {accuracyPercentage}%</li>
            <li className="text-red-500">Errors: {errors}</li>
            <li>Total Words: {totalWords}</li>
        </ul>
    );
};
