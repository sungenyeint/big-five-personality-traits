"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

export default function About() {
    const { theme } = useTheme();

    return (
        <div className={`py-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} min-h-screen transition-colors duration-300`}>
            <div className="container">
                <div className="mx-30 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-myanmar-maroon dark:text-myanmar-gold mb-6">
                        About the Myanmar Personality Compass
                    </h1>

                    <div className="prose prose-lg max-w-none mb-12 dark:prose-invert">
                        <p>
                            The Myanmar Personality Compass is a culturally adapted version of the Big Five personality assessment,
                            specifically designed to reflect Myanmar&apos;s unique cultural context, values, and social norms.
                        </p>

                        <h2 className="text-2xl font-bold text-myanmar-maroon dark:text-myanmar-gold mt-8 mb-4">The Big Five Personality Traits</h2>

                        <p>
                            The Big Five personality model is one of the most scientifically validated frameworks for understanding
                            human personality. It measures five key dimensions:
                        </p>

                        <div className="my-6 grid gap-4 md:grid-cols-2">
                            <div className="bg-myanmar-red/5 dark:bg-myanmar-red/10 border border-myanmar-red/30 rounded-lg p-6">
                                <h3 className="font-bold text-myanmar-red dark:text-myanmar-orange mb-2">Openness to Experience</h3>
                                <p className="text-sm">
                                    Reflects curiosity, imagination, and willingness to embrace new ideas. People high in openness often
                                    appreciate art, adventure, and unconventional ideas.
                                </p>
                            </div>

                            <div className="bg-myanmar-green/5 dark:bg-myanmar-green/10 border border-myanmar-green/30 rounded-lg p-6">
                                <h3 className="font-bold text-myanmar-green dark:text-myanmar-lime mb-2">Conscientiousness</h3>
                                <p className="text-sm">
                                    Reflects organization, responsibility, and self-discipline. People high in conscientiousness tend to
                                    plan ahead, be dutiful, and strive for achievement.
                                </p>
                            </div>

                            <div className="bg-myanmar-gold/5 dark:bg-myanmar-gold/10 border border-myanmar-gold/30 rounded-lg p-6">
                                <h3 className="font-bold text-myanmar-gold dark:text-myanmar-yellow mb-2">Extraversion</h3>
                                <p className="text-sm">
                                    Reflects sociability, assertiveness, and emotional expressiveness. People high in extraversion gain
                                    energy from social interactions and tend to be outgoing.
                                </p>
                            </div>

                            <div className="bg-myanmar-teal/5 dark:bg-myanmar-teal/10 border border-myanmar-teal/30 rounded-lg p-6">
                                <h3 className="font-bold text-myanmar-teal dark:text-myanmar-cyan mb-2">Agreeableness</h3>
                                <p className="text-sm">
                                    Reflects compassion, cooperation, and concern for social harmony. People high in agreeableness tend
                                    to be kind, helpful, and willing to compromise.
                                </p>
                            </div>

                            <div className="md:col-span-2 bg-myanmar-maroon/5 dark:bg-myanmar-maroon/10 border border-myanmar-maroon/30 rounded-lg p-6">
                                <h3 className="font-bold text-myanmar-maroon dark:text-myanmar-orange mb-2">Emotional Stability</h3>
                                <p className="text-sm">
                                    Reflects resilience to stress and negative emotions. People high in emotional stability (low in neuroticism)
                                    tend to be calm under pressure and less prone to persistent negative emotions.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-myanmar-maroon dark:text-myanmar-gold mt-8 mb-4">Cultural Adaptation</h2>

                        <p>
                            Our assessment has been carefully adapted to ensure it&apos;s relevant and meaningful within Myanmar&apos;s cultural context:
                        </p>

                        <ul className="space-y-3 my-6">
                            <li className="flex items-start">
                                <span>Questions reflect Myanmar social norms, relationships, and everyday scenarios</span>
                            </li>
                            <li className="flex items-start">
                                <span>Available in both English and Myanmar language for accessibility</span>
                            </li>
                            <li className="flex items-start">
                                <span>Results are contextualized within Myanmar cultural perspectives</span>
                            </li>
                            <li className="flex items-start">
                                <span>Interpretation considers Myanmar&apos;s collectivist values and social structures</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-myanmar-maroon dark:text-myanmar-gold mt-8 mb-4">How to Use Your Results</h2>

                        <p>
                            Your personality assessment results can be valuable for:
                        </p>

                        <ul className="space-y-3 my-6">
                            <li className="flex items-start">
                                <span>Self-awareness and personal development</span>
                            </li>
                            <li className="flex items-start">
                                <span>Understanding your natural strengths and potential growth areas</span>
                            </li>
                            <li className="flex items-start">
                                <span>Improving communication and relationships with others</span>
                            </li>
                            <li className="flex items-start">
                                <span>Making career and educational choices aligned with your personality</span>
                            </li>
                        </ul>

                        <div className="mt-12 text-center">
                            <button className="border border-myanmar-red bg-myanmar-red px-4 py-2 rounded-lg shadow hover:bg-myanmar-red/90 transition duration-300">
                                <Link href="/test">
                                    Take the Test
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
