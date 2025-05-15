"use client";

import { LogIn, LogOut, Sun, Moon, X, UserCircle2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Language } from "@/contexts/LanguageContext";
import { User } from "firebase/auth";

interface MobileMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    theme: string;
    toggleTheme: () => void;
    pathname: string;
    t: (en: string, my: string) => string;
    user: User | null;
    loading: boolean;
    logout: () => void;
    language: Language;
    handleLanguageChange: (lang: Language) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    open,
    setOpen,
    theme,
    toggleTheme,
    pathname,
    t,
    user,
    loading,
    logout,
    language,
    handleLanguageChange,
}) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-end md:hidden" onClick={() => setOpen(false)}>
            <div
                className={`relative w-120 max-w-full h-full shadow-2xl flex flex-col animate-slide-in ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'} transition-transform duration-300`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-6">
                    <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight">
                        Big Five Personality
                    </span>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl px-2 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label="Close menu"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'} p-4 rounded-lg shadow-md`}>
                    {!loading && user && (
                        <div className="flex items-center gap-3 mb-4 px-2">
                            {user.photoURL ? (
                                <span className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 shadow-sm overflow-hidden flex items-center justify-center bg-zinc-200 dark:bg-zinc-700">
                                    <img
                                        src={user.photoURL}
                                        alt="avatar"
                                        className="w-10 h-10 object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </span>
                            ) : (
                                <UserCircle2Icon className="w-10 h-10 text-zinc-400 dark:text-zinc-600" />
                            )}
                            <span className="text-base font-semibold max-w-[140px] truncate" title={(user.displayName || user.email) ?? undefined}>
                                {user.displayName || user.email}
                            </span>
                        </div>
                    )}
                    <nav className="flex flex-col gap-2">
                        <Link
                            href="/"
                            className={`py-2 px-4 rounded-lg text-base font-medium transition-colors ${pathname === "/" ? "bg-blue-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("Home", "ပင်မ")}
                        </Link>
                        <Link
                            href="/about"
                            className={`py-2 px-4 rounded-lg text-base font-medium transition-colors ${pathname === "/about" ? "bg-blue-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("About", "အကြောင်း")}
                        </Link>
                        {user && (
                            <Link
                                href="/test"
                                className={`py-2 px-4 rounded-lg text-base font-medium transition-colors ${pathname === "/test" ? "bg-blue-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                                onClick={() => setOpen(false)}
                            >
                                {t("Personality Test", "ကိုယ်ရည်ကိုယ်သွေး စမ်းသပ်မှု")}
                            </Link>
                        )}
                    </nav>
                    <div className="flex gap-2 mt-2 items-center justify-between border-t border-zinc-200 dark:border-zinc-800 pt-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 transition-colors text-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-label="Toggle dark/light mode"
                        >
                            {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5 bg-white" />}
                        </button>
                        <div className="flex gap-1">
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${language === "en" ? "bg-blue-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => handleLanguageChange("my")}
                                className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${language === "my" ? "bg-blue-500 text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
                            >
                                မြန်မာ
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-2 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                        {!loading && (
                            user ? (
                                <button
                                    onClick={() => {
                                        logout();
                                        setOpen(false);
                                    }}
                                    className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-red-400"
                                >
                                    <LogOut className="h-5 w-5" />
                                    {t("Logout", "ထွက်မည်")}
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <LogIn className="h-5 w-5" />
                                    {t("Login", "လော့ဂ်အင်")}
                                </Link>
                            )
                        )}
                    </div>
                    <div className="mt-auto text-xs text-zinc-400 text-center pt-8">
                        &copy; {new Date().getFullYear()} Myanmar Personality Compass
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MobileMenu;
