"use client";

import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, LogIn, LogOut } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";

import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [settingsDropdown, setSettingsDropdown] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const themeRef = useRef<HTMLDivElement>(null);

    const languageContext = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const { user, loading, logout } = useAuth();
    const pathname = usePathname();

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                settingsDropdown &&
                themeRef.current &&
                !themeRef.current.contains(e.target as Node)
            ) {
                setSettingsDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [settingsDropdown]);

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
                <Link
                    href="/"
                    className="text-2xl font-extrabold tracking-tight flex items-center gap-2"
                >
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Big Five Personality
                    </span>
                </Link>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileOpen((open) => !open)}
                        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-sidebar-primary"
                        aria-label="Open menu"
                    >
                        <svg
                            className="h-7 w-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-2 md:gap-6 pr-2 md:pr-8">
                    <Link
                        href="/"
                        className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/" ? "text-purple-500" : ""
                            }`}
                    >
                        {t("Home", "ပင်မ")}
                    </Link>
                    <Link
                        href="/about"
                        className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/about" ? "text-purple-500" : ""
                            }`}
                    >
                        {t("About", "အကြောင်း")}
                    </Link>
                    {user && (
                        <>
                            <Link
                                href="/test"
                                className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/test" ? "text-purple-500" : ""
                                    }`}
                            >
                                {t("Personality Test", "ကိုယ်ရည်ကိုယ်သွေး စမ်းသပ်မှု")}
                            </Link>
                            <Link
                                href="/my-results"
                                className={`hover:text-sidebar-primary font-medium py-1 rounded transition-colors duration-150 ${pathname === "/my-results" ? "text-purple-500" : ""
                                    }`}
                            >
                                {t("My Results", "ကျွန်ုပ်၏ရလဒ်များ")}
                            </Link>
                            {/* Settings Dropdown */}
                            <div className="relative" ref={themeRef}>
                                <button
                                    onClick={() => {
                                        if (!showLogoutConfirm) {
                                            setSettingsDropdown((v) => !v);
                                        }
                                    }}
                                    className={`flex items-center gap-2 px-2 py-1 rounded ${showLogoutConfirm
                                            ? "bg-sidebar-accent/40"
                                            : "bg-sidebar-accent/60"
                                        } text-sm font-semibold hover:bg-sidebar-primary transition-colors focus:outline-none`}
                                    aria-label="Settings"
                                    disabled={showLogoutConfirm}
                                >
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="avatar"
                                            className="w-7 h-7 rounded-full object-cover border border-sidebar-muted"
                                        />
                                    ) : (
                                        <span className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
                                            {user.displayName?.[0] || "U"}
                                        </span>
                                    )}
                                    <span>{t("Settings", "ဆက်တင်များ")}</span>
                                </button>
                                {settingsDropdown && !showLogoutConfirm && (
                                    <div
                                        className={`${theme === "light" ? "bg-white" : "bg-gray-900"
                                            } absolute right-0 mt-2 w-56 border border-sidebar-muted rounded-lg shadow-lg z-30 animate-fade-in p-2`}
                                    >
                                        <Link
                                            href="/profile"
                                            onClick={() =>
                                                setTimeout(() => setSettingsDropdown(false), 150)
                                            }
                                            className="block px-4 py-2 rounded hover:bg-sidebar-muted transition-colors font-medium mb-1"
                                        >
                                            {t("Profile", "ကိုယ်ရေးအချက်အလက်")}
                                        </Link>
                                        <Link
                                            href="/my-results"
                                            onClick={() =>
                                                setTimeout(() => setSettingsDropdown(false), 150)
                                            }
                                            className="block px-4 py-2 rounded hover:bg-sidebar-muted transition-colors font-medium mb-1"
                                        >
                                            {t("My Results", "ကျွန်ုပ်၏ရလဒ်များ")}
                                        </Link>
                                        <div className="flex items-center justify-between px-4 py-2 mb-1">
                                            <span>{t("Theme", "အပြင်အဆင်")}</span>
                                            <button
                                                onClick={() => {
                                                    toggleTheme();
                                                    setTimeout(() => setSettingsDropdown(false), 150);
                                                }}
                                                className="ml-2 px-2 py-1 rounded bg-sidebar-accent text-sidebar-accent-foreground cursor-pointer hover:bg-sidebar-primary transition-colors text-xl flex items-center justify-center"
                                            >
                                                {theme === "dark" ? (
                                                    <Moon className="h-5 w-5" />
                                                ) : (
                                                    <Sun className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between px-4 py-2 mb-1">
                                            <span>{t("Language", "ဘာသာစကား")}</span>
                                            <div className="flex gap-1">
                                                <button
                                                    onClick={() => {
                                                        handleLanguageChange("en");
                                                        setTimeout(() => setSettingsDropdown(false), 100);
                                                    }}
                                                    className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${language === "en"
                                                            ? "bg-blue-500 text-white"
                                                            : "hover:bg-zinc-100 hover:text-white dark:hover:bg-zinc-800"
                                                        }`}
                                                >
                                                    EN
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        handleLanguageChange("my");
                                                        setTimeout(() => setSettingsDropdown(false), 100);
                                                    }}
                                                    className={`px-2 py-1 rounded text-xs font-semibold cursor-pointer ${language === "my"
                                                            ? "bg-blue-500 text-white"
                                                            : "hover:bg-zinc-100 hover:text-white dark:hover:bg-zinc-800"
                                                        }`}
                                                >
                                                    မြန်မာ
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setShowLogoutConfirm(true);
                                                setTimeout(() => setSettingsDropdown(false), 100);
                                            }}
                                            className="w-full flex items-center gap-2 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors font-semibold mt-2"
                                        >
                                            <LogOut className="h-5 w-5" />
                                            {t("Logout", "ထွက်မည်")}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                    {/* If not logged in, show login button */}
                    {!loading && !user && (
                        <Link
                            href="/login"
                            className="ml-2 px-4 py-1 rounded-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-accent transition-colors text-sm font-semibold shadow flex items-center gap-2"
                        >
                            <LogIn className="h-5 w-5" />
                            <span>{t("Login", "လော့ဂ်အင်")}</span>
                        </Link>
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
            {showLogoutConfirm && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-50"
                    style={{ marginTop: "60px" }}
                >
                    <div
                        className={`border p-6 rounded shadow-lg ${theme === "dark" ? "bg-gray-900" : "bg-white"
                            }`}
                    >
                        <div className="mb-4">
                            {t(
                                "Are you sure you want to log out?",
                                "ထွက်မည်မှာ သေချာပါသလား?"
                            )}
                        </div>
                        <div className="flex gap-4">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded"
                                onClick={() => {
                                    logout();
                                    setShowLogoutConfirm(false);
                                }}
                            >
                                {t("Yes, Logout", "ထွက်မည်")}
                            </button>
                            <button
                                className="bg-gray-300 px-4 py-2 rounded"
                                onClick={() => setShowLogoutConfirm(false)}
                            >
                                {t("Cancel", "မလုပ်တော့ပါ")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.15s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
