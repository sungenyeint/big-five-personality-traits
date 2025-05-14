"use client";

import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, LogIn, LogOut } from "lucide-react";

const Navbar = () => {
    const languageContext = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const { user, loading, logout } = useAuth();
    const pathname = usePathname();

    if (!languageContext) {
        // Optionally, render nothing or a fallback UI
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

                <div className="flex items-center gap-2 md:gap-6 pr-2 md:pr-8">
                    {/* Theme Toggle */}
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

                    {/* Language Switcher */}
                    <div className="flex items-center gap-1 bg-sidebar-accent/60 rounded px-1 py-1">
                        <button
                            onClick={() => handleLanguageChange("en")}
                            className={`px-2 py-0.5 rounded text-sm font-semibold transition-colors flex items-center gap-1 ${
                                language === "en"
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground ring-2 ring-sidebar-primary"
                                    : "hover:bg-sidebar-muted"
                            }`}
                            aria-label="Switch to English"
                        >
                            EN
                            {language === "en" && (
                                <span className="ml-1 inline-block w-2 h-2 rounded-full bg-green-400" title="Active"></span>
                            )}
                        </button>
                        <button
                            onClick={() => handleLanguageChange("my")}
                            className={`px-2 py-0.5 rounded text-sm font-semibold transition-colors flex items-center gap-1 ${
                                language === "my"
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground ring-2 ring-sidebar-primary"
                                    : "hover:bg-sidebar-muted"
                            }`}
                            aria-label="Switch to Myanmar"
                        >
                            မြန်မာ
                            {language === "my" && (
                                <span className="ml-1 inline-block w-2 h-2 rounded-full bg-green-400" title="Active"></span>
                            )}
                        </button>
                    </div>

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
        </nav>
    );
};

export default Navbar;
