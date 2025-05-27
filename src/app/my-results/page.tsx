"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/contexts/firebase";
import {
    collection,
    query,
    where,
    orderBy,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

interface Result {
    id: string;
    createdAt: { seconds: number; nanoseconds: number };
    results: {
        openness?: number;
        conscientiousness?: number;
        extraversion?: number;
        agreeableness?: number;
        neuroticism?: number;
    };
}

export default function MyResultsPage() {
    const { user, loading } = useAuth();
    const [results, setResults] = useState<Result[]>([]);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [confirmOpen, setConfirmOpen] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const languageContext = useLanguage();
    const { t } = languageContext;
    const router = useRouter();
    const { theme } = useTheme();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    useEffect(() => {
        if (!user) return;
        const fetchResults = async () => {
            try {
                const q = query(
                    collection(db, "testResults"),
                    where("userId", "==", user.uid),
                    orderBy("createdAt", "desc")
                );
                const snap = await getDocs(q);
                setResults(
                    snap.docs.map((doc) => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            createdAt: data.createdAt,
                            results: data.results,
                        } as Result;
                    })
                );
            } catch (e) {
                setError("Failed to load results");
                console.error("Error fetching results:", e);
            }
        };
        fetchResults();
    }, [user]);

    const handleDelete = async (id: string) => {
        setDeleteId(id);
        setConfirmOpen(true);
    };

    const confirmDelete = async () => {
        if (!deleteId) return;
        try {
            await deleteDoc(doc(db, "testResults", deleteId));
            setResults(results.filter((r) => r.id !== deleteId));
            setConfirmOpen(false);
            setDeleteId(null);
        } catch (e) {
            setError("Failed to delete result");
            console.error("Error deleting result:", e);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                {t("Loading...", "ဖွင့်နေသည်...")}
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className={`mx-10 p-4 sm:p-8 rounded-2xl shadow-lg my-8 sm:my-16 ${theme === "light" ? "bg-white" : "bg-gray-800 border border-gray-700"}`}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
                {t("My Test Results", "ကျွန်ုပ်၏ရလဒ်များ")}
            </h2>

            {error && (
                <div className="text-red-600 mb-4 p-3 bg-red-50 rounded text-center font-semibold">
                    {error}
                </div>
            )}

            <div className="grid gap-6">
                {results.map((r) => (
                    <div
                        key={r.id}
                        className="border dark:border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50/60 via-white to-purple-50/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">
                                        {new Date(r.createdAt.seconds * 1000).toLocaleString()}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-xs sm:text-sm">
                                    <div className="p-3 rounded-lg flex flex-col items-center bg-blue-100 dark:bg-blue-900/30">
                                        <span className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{t("Openness", "ပွင့်လင်းမှု")}</span>
                                        <span className="text-lg font-bold text-blue-600 dark:text-blue-200">{r.results.openness?.toFixed(2)}</span>
                                    </div>
                                    <div className="p-3 rounded-lg flex flex-col items-center bg-green-100 dark:bg-green-900/30">
                                        <span className="font-semibold text-green-700 dark:text-green-300 mb-1">{t("Conscientiousness", "စိတ်ရင်းစေတနာ")}</span>
                                        <span className="text-lg font-bold text-green-600 dark:text-green-200">{r.results.conscientiousness?.toFixed(2)}</span>
                                    </div>
                                    <div className="p-3 rounded-lg flex flex-col items-center bg-yellow-100 dark:bg-yellow-900/30">
                                        <span className="font-semibold text-yellow-700 dark:text-yellow-300 mb-1">{t("Extraversion", "ပွင့်လင်းပြောင်လင်မှု")}</span>
                                        <span className="text-lg font-bold text-yellow-600 dark:text-yellow-200">{r.results.extraversion?.toFixed(2)}</span>
                                    </div>
                                    <div className="p-3 rounded-lg flex flex-col items-center bg-purple-100 dark:bg-purple-900/30">
                                        <span className="font-semibold text-purple-700 dark:text-purple-300 mb-1">{t("Agreeableness", "သဘောတူညီမှု")}</span>
                                        <span className="text-lg font-bold text-purple-600 dark:text-purple-200">{r.results.agreeableness?.toFixed(2)}</span>
                                    </div>
                                    <div className="p-3 rounded-lg flex flex-col items-center bg-red-100 dark:bg-red-900/30">
                                        <span className="font-semibold text-red-700 dark:text-red-300 mb-1">{t("Neuroticism", "စိတ်ခံစားမှု")}</span>
                                        <span className="text-lg font-bold text-red-600 dark:text-red-200">{r.results.neuroticism?.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 justify-end min-w-[140px]">
                                <Link
                                    href={`/result/${r.id}`}
                                    className="px-4 py-2 bg-blue-500 text-center text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm shadow"
                                >
                                    {t("View Details", "အသေးစိတ်ကြည့်ရန်")}
                                </Link>
                                <button
                                    onClick={() => handleDelete(r.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm shadow"
                                >
                                    {t("Delete", "ဖျက်မည်")}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {results.length === 0 && (
                    <div className="text-center py-16 text-gray-400 dark:text-gray-500 text-lg font-medium">
                        {t("No test results found", "စမ်းသပ်မှုရလဒ်များ မရှိသေးပါ")}
                    </div>
                )}
            </div>

            {/* Delete Confirmation Dialog */}
            {confirmOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-red-200 dark:border-red-700">
                        <h3 className="text-lg font-bold mb-4 text-red-600 dark:text-red-400">
                            {t("Delete Confirmation", "ဖျက်ရန် အတည်ပြုခြင်း")}
                        </h3>
                        <p className="mb-6 text-gray-600 dark:text-gray-300">
                            {t(
                                "Are you sure you want to delete this result? This action cannot be undone.",
                                "ဤရလဒ်ကို ဖျက်ရန် သေချာပါသလား? ဤလုပ်ဆောင်ချက်ကို ပြန်လည်ပြင်ဆင်၍မရပါ။"
                            )}
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                onClick={() => setConfirmOpen(false)}
                            >
                                {t("Cancel", "မလုပ်တော့ပါ")}
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                onClick={confirmDelete}
                            >
                                {t("Yes, Delete", "ဖျက်မည်")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
