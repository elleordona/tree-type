import { useEffect, useState } from 'react';
import wordsData from '../assets/words.json';

export const Words = () => {
    const [wordsArray, setWordsArray] = useState<string[]>([]);

    const words = wordsData.words.split(' ');
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
            className="roboto-mono text-2xl/10 max-h-30 flex flex-wrap overflow-hidden"
        >
            {wordsArray.map((word, index) => (
                <div
                    key={index}
                    id={`word${index}`}
                    className='inline-block me-4'
                >
                    {word}
                </div>
            ))}
        </div>
    );

};
