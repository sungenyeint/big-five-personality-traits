"use client";

import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, LogIn, LogOut, LanguagesIcon } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";

import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [themeDropdown, setThemeDropdown] = useState(false);
    const [langDropdown, setLangDropdown] = useState(false);
    const themeRef = useRef<HTMLDivElement>(null);
    const langRef = useRef<HTMLDivElement>(null);

    const languageContext = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const { user, loading, logout } = useAuth();
    const pathname = usePathname();

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (themeDropdown && themeRef.current && !themeRef.current.contains(e.target as Node)) {
                setThemeDropdown(false);
            }
            if (langDropdown && langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [themeDropdown, langDropdown]);

    if (!languageContext) {
        return null;
    }
    const { language, setLanguage, t } = languageContext;

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <nav className="bg-sidebar-background/90 backdrop-blur text-sidebar-foreground shadow-md sticky top-0 z-20 py-2">
            <div className="container mx-auto px-4 md:px-16 py-3 flex items-center justify-between">
                <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Big Five Personality</span>
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileOpen((open) => !open)}
                        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-sidebar-primary"
                        aria-label="Open menu"
                    >
                        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-2 md:gap-6 pr-2 md:pr-8">
                    <Link
                        href="/"
                        className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/" ? "text-purple-500" : ""}`}
                    >
                        {t("Home", "ပင်မ")}
                    </Link>
                    <Link
                        href="/about"
                        className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/about" ? "text-purple-500" : ""}`}
                    >
                        {t("About", "အကြောင်း")}
                    </Link>
                    {user && (
                        <Link
                            href="/test"
                            className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/test" ? "text-purple-500" : ""}`}
                        >
                            {t("Personality Test", "ကိုယ်ရည်ကိုယ်သွေး စမ်းသပ်မှု")}
                        </Link>
                    )}
                    {/* Language Dropdown */}
                    <div className="relative" ref={langRef}>
                        <button
                            onClick={() => setLangDropdown((v) => !v)}
                            className="px-2 py-1 rounded bg-sidebar-accent/60 text-sm font-semibold flex items-center gap-1 hover:bg-sidebar-primary transition-colors"
                            aria-label="Language settings"
                        >
                            {language === "en" ? "EN" : "မြန်မာ"}
                            <LanguagesIcon className="h-5 w-5" />
                        </button>
                        {langDropdown && (
                            <div className="absolute right-0 mt-2 w-32 bg-sidebar-background border border-sidebar-muted rounded-lg shadow-lg z-30 animate-fade-in">
                                <button
                                    onClick={() => { handleLanguageChange("en"); setLangDropdown(false); }}
                                    className={`w-full text-left px-4 py-2 rounded-t-lg hover:bg-sidebar-muted transition-colors flex items-center gap-2 ${language === "en" ? "font-bold text-blue-600" : ""}`}
                                >
                                    EN {language === "en" && <span className="inline-block w-2 h-2 rounded-full bg-green-400 ml-1" title="Active"></span>}
                                </button>
                                <button
                                    onClick={() => { handleLanguageChange("my"); setLangDropdown(false); }}
                                    className={`w-full text-left px-4 py-2 rounded-b-lg hover:bg-sidebar-muted transition-colors flex items-center gap-2 ${language === "my" ? "font-bold text-blue-600" : ""}`}
                                >
                                    မြန်မာ {language === "my" && <span className="inline-block w-2 h-2 rounded-full bg-green-400 ml-1" title="Active"></span>}
                                </button>
                            </div>
                        )}
                    </div>
                    {/* Theme Dropdown */}
                    <button
                    onClick={toggleTheme}
                    className="ml-2 px-2 py-1 rounded bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-primary transition-colors text-xl flex items-center justify-center"
                    aria-label="Toggle dark/light mode"
                    >
                    {theme === "dark" ? (
                        <Moon className="h-6 w-6" />
                    ) : (
                        <Sun className="h-6 w-6" />
                    )}
                    </button>
                    {/* Auth Buttons */}
                    {!loading && (
                        user ? (
                            <div className="flex items-center gap-2 ml-2">
                                {user.photoURL && (
                                    <span className="w-8 h-8 rounded-full border border-sidebar-muted shadow-sm overflow-hidden flex items-center justify-center bg-sidebar-muted">
                                        <img
                                            src={user.photoURL}
                                            alt="avatar"
                                            className="w-8 h-8 object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </span>
                                )}
                                <span className="text-sm font-semibold max-w-[120px] truncate" title={(user.displayName || user.email) ?? undefined}>
                                    {user.displayName || user.email}
                                </span>
                                <button
                                    onClick={logout}
                                    className="px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors text-xs shadow font-semibold ml-1"
                                    title={t("Logout", "ထွက်မည်")}
                                >
                                    <LogOut className="h-5 w-5 inline-block mr-1" />
                                    {t("Logout", "ထွက်မည်")}
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className="ml-2 px-4 py-1 rounded-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-accent transition-colors text-sm font-semibold shadow flex items-center gap-2"
                            >
                                <LogIn className="h-5 w-5" />
                                <span>{t("Login", "လော့ဂ်အင်")}</span>
                            </Link>
                        )
                    )}
                </div>
            </div>

            {/* Mobile menu */}
            {typeof window !== "undefined" && (
                <MobileMenu
                    open={mobileOpen}
                    setOpen={setMobileOpen}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    pathname={pathname}
                    t={t}
                    user={user}
                    loading={loading}
                    logout={logout}
                    language={language}
                    handleLanguageChange={handleLanguageChange}
                />
            )}
            <style jsx>{`
                .animate-fade-in { animation: fadeIn 0.15s ease; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px);} to { opacity: 1; transform: none; } }
            `}</style>
        </nav>
    );
};

export default Navbar;
