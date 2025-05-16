import { Language, traitDescriptions } from "@/data/questions";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { ArrowUpCircle, ArrowDownCircle, MinusCircle, RefreshCcw, Download } from "lucide-react";
import { db } from "@/contexts/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

interface TraitScore {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
}

interface TestResultsProps {
    results: TraitScore;
    onReset: () => void;
    language: Language;
    isNew: boolean;
}

export const TestResults = ({ results, onReset, language, isNew }: TestResultsProps) => {
    const { user } = useAuth();

    const [saving, setSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);

    const handleSaveResults = async () => {
        if (!user || !isNew) return;
        setSaving(true);
        setSaveSuccess(false);
        setSaveError(null);
        try {
            await addDoc(collection(db, "testResults"), {
                userId: user.uid,
                email: user.email,
                displayName: user.displayName,
                results,
                language,
                createdAt: Timestamp.now(),
            });
            setSaveSuccess(true);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setSaveError(err.message);
            } else {
                setSaveError("Error saving results");
            }
        } finally {
            setSaving(false);
        }
    };

    // Prepare data for chart
    const chartData = [
        {
            name: language === "en" ? "Openness" : "လက်ခံနိုင်မှု",
            score: results.openness,
            full: 5,
        },
        {
            name: language === "en" ? "Conscientiousness" : "တာဝန်သိမှု",
            score: results.conscientiousness,
            full: 5,
        },
        {
            name: language === "en" ? "Extraversion" : "ပြင်ပဆက်ဆံမှု",
            score: results.extraversion,
            full: 5,
        },
        {
            name: language === "en" ? "Agreeableness" : "သဟဇာတဖြစ်မှု",
            score: results.agreeableness,
            full: 5,
        },
        {
            name: language === "en" ? "Emotional Stability" : "စိတ်ခံစားမှုတည်ငြိမ်မှု",
            score: 6 - results.neuroticism, // Invert neuroticism to represent as emotional stability
            full: 5,
        },
    ];

    const handleDownloadResults = () => {
        const fileName = "myanmar-personality-results.json";
        const json = JSON.stringify(results, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = href;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    };

    // Function to get trait level description
    const getTraitLevel = (trait: keyof TraitScore) => {
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

                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <button
                        onClick={onReset}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-myanmar-teal text-myanmar-teal font-semibold shadow transition"
                    >
                        <RefreshCcw className="h-5 w-5" />
                        {language === "en" ? "Take Test Again" : "စစ်ဆေးမှု ပြန်လုပ်ရန်"}
                    </button>
                    <button
                        onClick={handleDownloadResults}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-myanmar-teal text-myanmar-teal font-semibold shadow transition"
                    >
                        <Download className="h-5 w-5" />
                        {language === "en" ? "Download Results" : "ရလဒ်များကို ဒေါင်းလုဒ်လုပ်ရန်"}
                    </button>
                    {user && isNew && (
                        <button
                            onClick={handleSaveResults}
                            disabled={saving}
                            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-blue-500 text-blue-500 font-semibold shadow transition disabled:opacity-50"
                        >
                            {saving ? (
                                <span className="animate-spin mr-2 w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></span>
                            ) : (
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            )}
                            {language === "en" ? "Save to Profile" : "ကိုယ်ရေးအချက်အလက်သို့ သိမ်းမည်"}
                        </button>
                    )}
                </div>
                {saveSuccess && (
                    <div className="mt-4 text-green-600 text-center text-sm font-semibold">
                        {language === "en" ? "Results saved to your profile!" : "ရလဒ်များကို ကိုယ်ရေးအချက်အလက်သို့ သိမ်းပြီးပါပြီ။"}
                    </div>
                )}
                {saveError && (
                    <div className="mt-4 text-red-600 text-center text-sm font-semibold">
                        {saveError}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestResults;
