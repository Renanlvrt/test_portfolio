"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    phrases: string[];
    speed?: number; // milliseconds per character
    deleteSpeed?: number;
    delayBetween?: number; // delay between phrases
}

export function Typewriter({
    phrases,
    speed = 100,
    deleteSpeed = 50,
    delayBetween = 2000,
}: TypewriterProps) {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (currentText.length < currentPhrase.length) {
                        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
                    } else {
                        // Finished typing, wait then start deleting
                        setTimeout(() => setIsDeleting(true), delayBetween);
                    }
                } else {
                    // Deleting
                    if (currentText.length > 0) {
                        setCurrentText(currentPhrase.slice(0, currentText.length - 1));
                    } else {
                        // Finished deleting, move to next phrase
                        setIsDeleting(false);
                        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [
        currentText,
        currentPhraseIndex,
        isDeleting,
        phrases,
        speed,
        deleteSpeed,
        delayBetween,
    ]);

    return (
        <span className="inline-block">
            {currentText}
            <span className="animate-pulse ml-1">|</span>
        </span>
    );
}
