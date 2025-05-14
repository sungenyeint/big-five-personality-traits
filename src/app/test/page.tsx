"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import PersonalityTest from "@/components/PersonalityTest";
import { useTheme } from "@/contexts/ThemeContext";

export default function TestPage() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const { t } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">{t("Loading...", "ဖွင့်နေသည်...")}</div>;
    }

    if (!user) {
        // Optionally show a message while redirecting
        return null;
    }

    return (
        <div className={`py-8 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} min-h-screen transition-colors duration-300`}>
            <PersonalityTest />
        </div>
    );
}
