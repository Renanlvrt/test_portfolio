"use client";

import { useState, useEffect } from "react";

export interface ScrollState {
    scrollY: number;
    scrollDirection: "up" | "down" | null;
    scrollProgress: number; // 0-100%
}

export function useScroll(): ScrollState {
    const [scrollState, setScrollState] = useState<ScrollState>({
        scrollY: 0,
        scrollDirection: null,
        scrollProgress: 0,
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollState = () => {
            const scrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (scrollY / documentHeight) * 100;

            setScrollState({
                scrollY,
                scrollDirection: scrollY > lastScrollY ? "down" : "up",
                scrollProgress: Math.min(100, Math.max(0, scrollProgress)),
            });

            lastScrollY = scrollY;
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollState);
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollState;
}
