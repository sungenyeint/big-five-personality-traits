import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Big Five Personality Traits',
    description: 'Learn about the Big Five personality traits in English and Myanmar.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <LanguageProvider>
                        <AuthProvider>
                            <div className="flex flex-col min-h-screen">
                                <Navbar />
                                <main className="flex-grow">{children}</main>
                                <Footer />
                            </div>
                        </AuthProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
