"use client";

import { useState } from "react";
import { questions, Question } from "@/data/questions";
// import { useToast } from "@/hooks/use-toast";
import { TestResults } from "./TestResult";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export const PersonalityTest = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [testCompleted, setTestCompleted] = useState(false);
    // const { toast } = useToast();
    const { language, t } = useLanguage();

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
            // toast({
            //     title: t("Test Completed!", "အစစ်ဆေးခံယူခြင်း ပြီးပါပြီ!"),
            //     description: t(
            //         "Your Big Five personality assessment is ready.",
            //         "သင့်၏ ပင်ကိုယ်စရိုက် ဆန်းစစ်မှု ရလဒ်များ အဆင်သင့်ဖြစ်ပါပြီ။"
            //     ),
            // });
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

    if (testCompleted) {
        const results = calculateResults();
        return <TestResults results={results} onReset={resetTest} language={language} />;
    }

    const isCurrentQuestionAnswered = answers[currentQuestion.id] !== undefined;

    return (
        <div className="test-container mx-2 sm:mx-8 md:mx-20 lg:mx-30 my-6 sm:my-10 p-4 sm:p-6 rounded-lg shadow-md border border-myanmar-gold dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-myanmar-maroon dark:text-myanmar-gold transition-colors duration-300">
                {t("Big Five Personality Test", "ကိုယ်ရည်ကိုယ်သွေး ဆန်းစစ်မှု")}
            </h2>
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
                className={`h-2 rounded transition-all duration-300 ${
                    progress > 0
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
