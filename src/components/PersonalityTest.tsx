"use client";

import { useState, useEffect } from "react";
import { questions, Question } from "@/data/questions";
import { TestResults } from "./TestResult";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/contexts/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { CheckCircle } from "lucide-react";

interface Result {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
};

export const PersonalityTest = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [testCompleted, setTestCompleted] = useState(false);
    const { user } = useAuth();
    const [hasResults, setHasResults] = useState(false);
    const [latestResult, setLatestResult] = useState<Result | null>(null);
    const [isNew, setIsNew] = useState(false);
    const { language, t } = useLanguage();

    useEffect(() => {
        if (!user) return;
        const checkResults = async () => {

            try {
                const q = query(collection(db, "testResults"), where("userId", "==", user.uid), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);

                const latest = snapshot.docs.map(doc => {
                    const data = doc.data() as { results: Result };
                    return { id: doc.id, ...data };
                });
                if (latest.length > 0 && latest[0].results) {
                    setHasResults(true);
                    setLatestResult(latest[0].results);
                }
            } catch (error) {
                console.error("Error fetching results:", error);
                setHasResults(false);
            }
        };

        checkResults();
    }, [user]);

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;

    const handleAnswer = (value: string) => {
        const answerValue = parseInt(value);
        setAnswers({ ...answers, [currentQuestion.id]: answerValue });
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setTestCompleted(true);
            setIsNew(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateResults = () => {
        const traits = {
            openness: { score: 0, count: 0 },
            conscientiousness: { score: 0, count: 0 },
            extraversion: { score: 0, count: 0 },
            agreeableness: { score: 0, count: 0 },
            neuroticism: { score: 0, count: 0 }
        };

        questions.forEach((question: Question) => {
            if (answers[question.id] !== undefined) {
                // Scale is 1-5, but reversed questions need to be inverted (6 - value)
                const score = question.reversed ? 6 - answers[question.id] : answers[question.id];
                traits[question.trait].score += score;
                traits[question.trait].count += 1;
            }
        });

        // Calculate average for each trait (on a scale of 1-5)
        return {
            openness: traits.openness.count > 0 ? traits.openness.score / traits.openness.count : 0,
            conscientiousness: traits.conscientiousness.count > 0 ? traits.conscientiousness.score / traits.conscientiousness.count : 0,
            extraversion: traits.extraversion.count > 0 ? traits.extraversion.score / traits.extraversion.count : 0,
            agreeableness: traits.agreeableness.count > 0 ? traits.agreeableness.score / traits.agreeableness.count : 0,
            neuroticism: traits.neuroticism.count > 0 ? traits.neuroticism.score / traits.neuroticism.count : 0
        };
    };

    const resetTest = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setTestCompleted(false);
    };

    const handleResults = () => {
        setTestCompleted(true);
        setIsNew(false);
    };

    if (testCompleted) {
        const results =
            isNew
                ? calculateResults()
                : latestResult ?? {
                    openness: 0,
                    conscientiousness: 0,
                    extraversion: 0,
                    agreeableness: 0,
                    neuroticism: 0
                };
        return <TestResults results={results} onReset={resetTest} language={language} isNew={isNew} />;
    }

    const isCurrentQuestionAnswered = answers[currentQuestion.id] !== undefined;

    return (
        <div className="test-container mx-2 sm:mx-8 md:mx-20 lg:mx-30 my-6 sm:my-10 p-4 sm:p-6 rounded-lg shadow-md border border-myanmar-gold dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-myanmar-maroon dark:text-myanmar-gold transition-colors duration-300 sm:mb-0 mb-2">
                    {t("Big Five Personality Test", "ကိုယ်ရည်ကိုယ်သွေး ဆန်းစစ်မှု")}
                </h2>
                {user && hasResults && (
                    <button
                        onClick={handleResults}
                        className="px-4 py-2 rounded font-semibold shadow transition-colors flex items-center"
                    >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>{t("See My Latest Results", "ကျွန်ုပ်၏နောက်ဆုံးရလဒ် ကြည့်ရန်")}</span>
                    </button>
                )}
            </div>

            <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm mb-1 sm:mb-2">
                    <span>
                        {t(
                            `Question ${currentQuestionIndex + 1} of ${totalQuestions}`,
                            `မေးခွန်း ${currentQuestionIndex + 1} မှ ${totalQuestions}`
                        )}
                    </span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                        className={`h-2 rounded transition-all duration-300 ${progress > 0
                            ? "bg-blue-500"
                            : "bg-myanmar-gold"
                            }`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="rounded-lg shadow-lg p-4 sm:p-6 transition-colors duration-300">
                <p className="text-base sm:text-lg font-medium mb-4 sm:mb-6">
                    {currentQuestion.text[language]}
                </p>

                <div className="grid gap-3 sm:gap-4">
                    {[1, 2, 3, 4, 5].map(value => (
                        <label
                            key={value}
                            htmlFor={`option-${value}`}
                            className={`flex items-center space-x-2 sm:space-x-3 border p-2 sm:p-3 rounded-md cursor-pointer transition-colors duration-300
                    ${answers[currentQuestion.id] === value
                                    ? "bg-myanmar-yellow/20 border-myanmar-gold"
                                    : "hover:bg-myanmar-yellow/10 border-gray-200"
                                }`
                            }
                        >
                            <input
                                type="radio"
                                id={`option-${value}`}
                                name={`question-${currentQuestion.id}`}
                                value={value}
                                checked={answers[currentQuestion.id] === value}
                                onChange={() => handleAnswer(value.toString())}
                                className="form-radio h-4 w-4 sm:h-5 sm:w-5 text-myanmar-gold focus:ring-myanmar-gold"
                            />
                            <span className="flex-grow text-xs sm:text-base">{getLikertLabel(value, language)}</span>
                        </label>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-6 gap-2 sm:gap-0">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                        className="border border-myanmar-gold text-myanmar-gold px-3 sm:px-4 py-2 rounded hover:bg-myanmar-gold/10 hover:text-myanmar-maroon transition-colors duration-300 disabled:opacity-50"
                    >
                        {t("Previous", "နောက်သို့")}
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!isCurrentQuestionAnswered}
                        className="border bg-myanmar-gold text-myanmar-maroon px-3 sm:px-4 py-2 rounded hover:bg-myanmar-gold/90 transition-colors duration-300 disabled:opacity-50"
                    >
                        {currentQuestionIndex < totalQuestions - 1
                            ? t("Next", "ရှေ့သို့")
                            : t("Complete", "အပြီးသတ်ရန်")
                        }
                    </button>
                </div>
            </div>

        </div>
    );
};

// Helper function to get labels for Likert scale
function getLikertLabel(value: number, language: Language): string {
    if (language === "en") {
        switch (value) {
            case 1: return "Strongly Disagree";
            case 2: return "Disagree";
            case 3: return "Neutral";
            case 4: return "Agree";
            case 5: return "Strongly Agree";
            default: return "";
        }
    } else {
        switch (value) {
            case 1: return "လုံးဝ သဘောမတူပါ";
            case 2: return "သဘောမတူပါ";
            case 3: return "ကြားနေ";
            case 4: return "သဘောတူပါသည်";
            case 5: return "လုံးဝ သဘောတူပါသည်";
            default: return "";
        }
    }
}

export default PersonalityTest;
