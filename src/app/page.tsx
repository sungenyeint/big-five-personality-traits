"use client";

import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function Home() {
    const { t } = useLanguage();

    return (
        <>
            <Hero />
            <AboutSection />

            <div className="py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-myanmar-maroon dark:text-myanmar-gold mb-4">
                            {t(
                                "Ready to Discover Your Personality?",
                                "သင့်ကိုယ်ပိုင်စရိုက်ကို လေ့လာရန် အဆင်သင့်ဖြစ်ပြီလား?"
                            )}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-300 mb-8">
                            {t(
                                "Take our scientifically validated, culturally adapted Big Five personality test designed specifically for Myanmar.",
                                "မြန်မာနိုင်ငံအတွက် ယဉ်ကျေးမှုနှင့် ကိုက်ညီအောင် ဒီဇိုင်းထုတ်ထားသော သိပ္ပံနည်းကျ Big Five ကိုယ်ရည်ကိုယ်သွေး စစ်ဆေးမှုကို ပြုလုပ်ပါ။"
                            )}
                        </p>
                        <Link href="/test" className="inline-block">
                            <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-lg shadow transition-colors duration-200">
                                {t("Start the Test", "စစ်ဆေးမှုစတင်ရန်")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
