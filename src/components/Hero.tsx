import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

export const Hero = () => {
    const { t } = useLanguage();

    const { theme } = useTheme();

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-myanmar-yellow to-amber-50 px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="absolute inset-0 myanmar-pattern opacity-10"></div>
            <div className="container mx-auto px-0 sm:px-4 py-10 sm:py-16 md:py-24 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <div className="flex items-center mb-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-myanmar-maroon">
                                {t("Myanmar Personality Compass", "မြန်မာ ကိုယ်ရည်ကိုယ်သွေး လမ်းညွှန်")}
                            </h1>
                        </div>
                        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
                            {t(
                                "Discover your personality traits through our culturally adapted Big Five personality assessment, designed specifically for Myanmar's cultural context.",
                                "မြန်မာ့ယဉ်ကျေးမှုနှင့် ကိုက်ညီအောင် ဒီဇိုင်းထုတ်ထားသော Big Five ကိုယ်ရည်ကိုယ်သွေး စစ်ဆေးမှုမှတစ်ဆင့် သင့်ကိုယ်ပိုင်စရိုက်လက္ခဏာများကို ရှာဖွေလေ့လာပါ။"
                            )}
                        </p>
                        <div className={`mb-8 p-4 rounded-lg border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80 backdrop-blur-sm border-myanmar-gold/30"}`}>
                            <h3 className={`font-bold mb-2 ${theme === "dark" ? "text-white" : "text-myanmar-maroon"}`}>
                                {t("The Big Five Personality Traits:", "Big Five ကိုယ်ရည်ကိုယ်သွေး လက္ခဏာများ：")}
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-red-500`}></span>
                                    <span>
                                        <strong>{t("Openness:", "ပွင့်လင်းမှု:")}</strong>
                                        {" " + t("Curiosity about new experiences and ideas", "အတွေ့အကြုံနှင့် အယူအဆအသစ်များအပေါ် စိတ်ဝင်စားမှု")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-green-500`}></span>
                                    <span>
                                        <strong>{t("Conscientiousness:", "စိတ်ရှည်သည်းခံမှု:")}</strong>
                                        {" " + t("Organization and responsibility", "စနစ်တကျရှိခြင်းနှင့် တာဝန်သိမှု")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-blue-500`}></span>
                                    <span>
                                        <strong>{t("Extraversion:", "ပြင်ပဆက်ဆံရေး:")}</strong>
                                        {" " + t("Sociability and energy in social settings", "လူမှုရေးဆက်ဆံမှုတွင် ပွင့်လင်းမှုနှင့် စွမ်းအင်")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-teal-500`}></span>
                                    <span>
                                        <strong>{t("Agreeableness:", "သဘောထားကောင်းမှု:")}</strong>
                                        {" " + t("Compassion and cooperation", "ကရုဏာထားမှုနှင့် ပူးပေါင်းဆောင်ရွက်မှု")}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 bg-yellow-500`}></span>
                                    <span>
                                        <strong>{t("Emotional Stability:", "စိတ်ခံစားမှု တည်ငြိမ်မှု:")}</strong>
                                        {" " + t("Resilience to stress and negative emotions", "စိတ်ဖိစီးမှုများနှင့် အဆိုးမြင်စိတ်ခံစားမှုများကို ခံနိုင်ရည်ရှိမှု")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto`}>
                            <Link href="/test" className={`flex-1 sm:flex-none border hover:text-gray-400 px-4 py-2 rounded transition-colors font-semibold text-center ${theme === 'light' ? 'text-gray-700' : 'bg-gray-700 text-gray-200'}`}>
                                {t("Take the Test", "စစ်ဆေးမှု ပြုလုပ်ရန်")}
                            </Link>
                            <Link href="/about" className={`flex-1 sm:flex-none border hover:text-gray-400 px-4 py-2 rounded transition-colors font-semibold text-center ${theme === 'light' ? 'text-gray-700' : 'bg-gray-700 text-gray-200'}`}>
                                {t("Learn More", "ပိုမိုလေ့လာရန်")}
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                            <div className="absolute inset-0 bg-myanmar-yellow rounded-full blur-3xl opacity-20 transform -rotate-6"></div>
                            <div
                                className={`rounded-2xl shadow-lg p-6 border-2 relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500 ${theme === "dark"
                                    ? "bg-gray-800 border-gray-700"
                                    : "bg-white border-myanmar-gold"
                                    }`}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3
                                        className={`text-lg font-semibold ${theme === "dark" ? "text-white" : "text-myanmar-maroon"
                                            }`}
                                    >
                                        {t("Personality Score", "ကိုယ်ရည်ကိုယ်သွေး အမှတ်")}
                                    </h3>
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${theme === "dark"
                                            ? "bg-red-500/10 text-red-500"
                                            : "bg-myanmar-red/10 text-myanmar-red"
                                            }`}
                                    >
                                        {t("Sample", "နမူနာ")}
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { en: "Openness", my: "ပွင့်လင်းမှု" },
                                        { en: "Conscientiousness", my: "စိတ်ရှည်သည်းခံမှု" },
                                        { en: "Extraversion", my: "ပြင်ပဆက်ဆံရေး" },
                                        { en: "Agreeableness", my: "သဘောထားကောင်းမှု" },
                                        { en: "Emotional Stability", my: "စိတ်ခံစားမှု တည်ငြိမ်မှု" },
                                    ].map((trait, index) => (
                                        <div key={trait.en} className="flex items-center">
                                            <span
                                                className={`text-sm w-40 font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                                                    }`}
                                            >
                                                {t(trait.en, trait.my)}
                                            </span>
                                            <div
                                                className={`h-2 flex-grow rounded-full overflow-hidden ${theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                                                    }`}
                                            >
                                                <div
                                                    className={`h-full rounded-full ${getBarColor(index)}`}
                                                    style={{ width: `${Math.round(65 + Math.random() * 25)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 text-center">
                                    <p
                                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                            }`}
                                    >
                                        {t(
                                            "Get your detailed personality assessment today",
                                            "သင့်ကိုယ်ရည်ကိုယ်သွေး အသေးစိတ်အကဲဖြတ်မှုကို ယနေ့ရယူပါ"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const getBarColor = (index: number): string => {
    const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-teal-500",
        "bg-yellow-500"
    ];
    return colors[index % colors.length];
};

export default Hero;
