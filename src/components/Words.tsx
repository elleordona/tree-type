import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

export const Words = () => {
    const [wordsArray, setWordsArray] = useState<string[]>([]);

    const words = faker.word.words(200).split(" ");
    const wordsCount = words.length;

    useEffect(() => {
        newGame();
    }, []);

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * wordsCount);
        return words[randomIndex];
    }

    const newGame = () => {
        const newWordsArr: string[] = [];

        for (let i = 0; i < 200; i++) {
            newWordsArr.push(getRandomWord());
        }

        setWordsArray(newWordsArr);
    };

    return (
        <div
            id="words"
            className="flex flex-wrap overflow-hidden max-h-40 blur-xs in-focus:blur-none text-neutral-600"
        >
            {wordsArray.map((word, index) => (
                <div
                    key={index}
                    id={`word${index}`}
                    className="inline-block me-4"
                >
                    {word.split("").map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </div>
            ))}
        </div>
    );

};
