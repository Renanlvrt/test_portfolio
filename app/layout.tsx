import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Renan Lavirotte | MEng Computer Science @ Durham",
    description: "Portfolio of Renan Lavirotte - MEng Computer Science student at Durham University specializing in AI, VR, Robotics, and Medical Technology. Building technology that saves lives.",
    keywords: [
        "Renan Lavirott",
        "Computer Science",
        "Durham University",
        "Artificial Heart",
        "VR Development",
        "AI",
        "Robotics",
        "Medical Technology",
        "Software Engineer",
    ],
    authors: [{ name: "Renan Lavirotte" }],
    openGraph: {
        title: "Renan Lavirotte | Building Technology That Saves Lives",
        description: "MEng Computer Science student at Durham University specializing in AI, VR, Robotics, and Medical Technology",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Renan Lavirotte | Portfolio",
        description: "Building technology that saves lives - AI, VR, Robotics, Medical Technology",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
