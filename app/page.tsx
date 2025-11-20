import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <HeroSection />

            {/* More sections will be added here */}
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/5 to-primary/5">
                <div className="text-center p-8">
                    <h2 className="text-4xl font-bold mb-4">More sections coming soon...</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        The portfolio is being built section by section.
                    </p>
                </div>
            </div>
        </main>
    );
}
