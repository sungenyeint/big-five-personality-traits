"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme | undefined>();

    useEffect(() => {
        // Only run on client
        let initialTheme: Theme = "light";
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme") as Theme | null;
            if (stored === "light" || stored === "dark") {
                initialTheme = stored;
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                initialTheme = "dark";
            }
        }
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (!theme) return;
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    if (!theme) return null; // Prevent hydration mismatch

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
