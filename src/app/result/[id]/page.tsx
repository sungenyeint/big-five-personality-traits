"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/contexts/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { traitDescriptions } from "@/data/questions";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowUpCircle, ArrowDownCircle, MinusCircle } from "lucide-react";

interface TraitScore {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
}

interface ResultType {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
}

export default function TestResultPage() {
    const params = useParams();
    const id = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
    const { user, loading } = useAuth();
    const [results, setResults] = useState<ResultType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { t, language } = useLanguage();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    useEffect(() => {
        const fetchResult = async () => {
            if (!user || !id) return;
            try {
                const docRef = doc(db, "testResults", id);
                const docSnap = await getDoc(docRef);

                if (!docSnap.exists()) {
                    setError(t("Result not found", "ရလဒ်ကို ရှာမတွေ့ပါ"));
                    return;
                }

                const data = docSnap.data();
                if (data.userId !== user.uid) {
                    setError(
                        t(
                            "You don't have permission to view this result",
                            "ဤရလဒ်ကို ကြည့်ရှုခွင့် မရှိပါ"
                        )
                    );
                    return;
                }

                setResults(data.results as ResultType);
            } catch (e) {
                setError(t("Failed to load result", "ရလဒ်ကို ဖတ်၍မရပါ"));
                console.error("Error fetching result:", e);
            }
        };
        fetchResult();
    }, [id, user, t]);

    // Prepare data for chart
    const chartData = [
        {
            name: language === "en" ? "Openness" : "လက်ခံနိုင်မှု",
            score: results?.openness,
            full: 5,
        },
        {
            name: language === "en" ? "Conscientiousness" : "တာဝန်သိမှု",
            score: results?.conscientiousness,
            full: 5,
        },
        {
            name: language === "en" ? "Extraversion" : "ပြင်ပဆက်ဆံမှု",
            score: results?.extraversion,
            full: 5,
        },
        {
            name: language === "en" ? "Agreeableness" : "သဟဇာတဖြစ်မှု",
            score: results?.agreeableness,
            full: 5,
        },
        {
            name: language === "en" ? "Emotional Stability" : "စိတ်ခံစားမှုတည်ငြိမ်မှု",
            score: results?.neuroticism ? 6 - results.neuroticism : 0, // Invert neuroticism to represent as emotional stability
            full: 5,
        },
    ];

    // Function to get trait level description
    const getTraitLevel = (trait: keyof TraitScore) => {
        if (!results) return "low";
        const score = trait === "neuroticism" ? results[trait] : results[trait]; // Already inverted for display

        if (score >= 4) {
            return "high";
        } else if (score >= 2.5) {
            return "moderate";
        } else {
            return "low";
        }
    };

    const getTraitIcon = (trait: keyof TraitScore) => {
        const level = getTraitLevel(trait);

        if (level === "high") {
            return <ArrowUpCircle className="h-6 w-6 text-myanmar-green" />;
        } else if (level === "moderate") {
            return <MinusCircle className="h-6 w-6 text-myanmar-gold" />;
        } else {
            return <ArrowDownCircle className="h-6 w-6 text-myanmar-red" />;
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                {t("Loading...", "ဖွင့်နေသည်...")}
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-3xl mx-auto p-6 my-12">
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 p-4 rounded mb-4">
                    {error}
                </div>
                <Link
                    href="/my-results"
                    className="text-myanmar-maroon hover:text-myanmar-gold transition-colors"
                >
                    ← {t("Back to My Results", "ရလဒ်များစာရင်းသို့ ပြန်သွားမည်")}
                </Link>
            </div>
        );
    }

    if (!results) return null;

    return (
        <div className="bg-background min-h-screen py-8 px-2 sm:px-4 md:mx-10 lg:mx-20">
            <h2 className="text-2xl font-bold text-primary text-center mb-6">
                {language === "en" ? "Your Personality Results" : "သင့်ကိုယ်ရည်ကိုယ်သွေး ဆန်းစစ်ရလဒ်များ"}
            </h2>

            <div className="bg-card shadow-lg rounded-lg p-4 sm:p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary text-center">
                    {language === "en" ? "Your Big Five Personality Profile" : "သင့်ကိုယ်ရည်ကိုယ်သွေး ပရိုဖိုင်"}
                </h3>

                <div className="mb-8">
                    <div className="w-full overflow-x-auto">
                        <div style={{ minWidth: 400, width: "100%", maxWidth: 700, margin: "0 auto" }}>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                    <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
                                    <Tooltip formatter={(value: number) => [value, ""]} />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#CE1126"
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: "#CE1126" }}
                                        activeDot={{ r: 8, fill: "#CE1126" }}
                                        name={language === "en" ? "Your Score" : "သင့်ရမှတ်"}
                                    />
                                    <Legend />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.keys(results).map((trait) => {
                        const traitKey = trait as keyof TraitScore;
                        const traitInfo = traitDescriptions[traitKey];
                        const traitLevel = getTraitLevel(traitKey);

                        return (
                            <div
                                key={trait}
                                className="bg-card rounded-lg shadow border border-myanmar-gold/40 p-4 flex flex-col justify-between"
                            >
                                <div className="flex flex-row items-center justify-between mb-2">
                                    <span className="text-lg font-bold text-primary">{traitInfo.title[language]}</span>
                                    {getTraitIcon(traitKey)}
                                </div>
                                <div className="mb-2">
                                    <span className="text-3xl font-bold text-primary">
                                        {traitKey === "neuroticism"
                                            ? (6 - results[traitKey]).toFixed(1)
                                            : results[traitKey].toFixed(1)}
                                    </span>
                                    <span className="text-sm text-muted-foreground ml-2">/ 5.0</span>
                                </div>
                                <p className="text-sm mt-2 text-primary">
                                    {traitInfo[traitLevel][language]}
                                </p>
                                <p className="text-xs mt-4 text-muted-foreground">
                                    {traitInfo.cultural[language]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

