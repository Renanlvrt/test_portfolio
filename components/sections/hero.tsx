"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/hero/typewriter";
import { ParticleSystem } from "@/components/hero/particle-system";
import { Heart3D } from "@/components/hero/heart-3d";

export function HeroSection() {
    const stats = [
        { label: "Artificial Heart", value: "Vienna Finals" },
        { label: "First Class", value: "79% Average" },
        { label: "Medical R&D", value: "40+ Team" },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
        >
            {/* Background Elements */}
            <ParticleSystem />

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* 3D Heart Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8"
                >
                    <Heart3D />
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient"
                >
                    Renan Lavirotte
                </motion.h1>

                {/* Typewriter Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 h-8"
                >
                    <Typewriter
                        phrases={[
                            "Building Technology That Saves Lives",
                            "MEng Computer Science @ Durham",
                            "Artificial Heart R&D Engineer",
                            "AI & VR Developer",
                        ]}
                        speed={80}
                    />
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-wrap gap-6 justify-center mb-12 text-sm"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-border"
                        >
                            <span className="text-2xl font-bold text-primary mb-1">
                                {stat.value}
                            </span>
                            <span className="text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Button href="#projects" size="lg" variant="primary">
                        View Projects
                    </Button>
                    <Button href="#contact" size="lg" variant="secondary">
                        Get in Touch
                    </Button>
                    <Button href="/cv.pdf" size="lg" variant="outline" download>
                        Download CV
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
                <span className="text-sm">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.a>
        </section>
    );
}
