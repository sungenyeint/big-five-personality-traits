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

            <div className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-myanmar-maroon dark:text-myanmar-gold mb-4">
                            {t(
                                "Ready to Discover Your Personality?",
                                "သင့်ကိုယ်ပိုင်စရိုက်ကို လေ့လာရန် အဆင်သင့်ဖြစ်ပြီလား?"
                            )}
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t(
                                "Take our scientifically validated, culturally adapted Big Five personality test designed specifically for Myanmar.",
                                "မြန်မာနိုင်ငံအတွက် ယဉ်ကျေးမှုနှင့် ကိုက်ညီအောင် ဒီဇိုင်းထုတ်ထားသော သိပ္ပံနည်းကျ Big Five ကိုယ်ရည်ကိုယ်သွေး စစ်ဆေးမှုကို ပြုလုပ်ပါ။"
                            )}
                        </p>
                        <button className="bg-myanmar-red hover:bg-myanmar-red/90">
                            <Link href="/test" className="text-white">
                                {t("Start the Test", "စစ်ဆေးမှုစတင်ရန်")}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
