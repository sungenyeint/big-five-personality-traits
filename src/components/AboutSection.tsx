import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export const AboutSection = () => {
    const { t } = useLanguage();
    const { theme } = useTheme();

    return (
        <div className={`py-10 px-4 sm:px-6 md:px-10 lg:px-16 ${theme === 'light' ? 'bg-gray-50 text-black' : 'bg-gray-700 text-gray-200'}`}>
            <div className="container mx-auto">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About the Myanmar Personality Compass</h2>
                    <p className="text-base sm:text-lg max-w-2xl mx-auto">
                        {t(
                            "Our culturally adapted assessment helps you understand your personality traits within Myanmar's unique cultural context.",
                            "ကျွန်ုပ်တို့၏ ယဉ်ကျေးမှုအရ လိုက်လျောညီထွေဖြစ်အောင် အကဲဖြတ်ခြင်းသည် မြန်မာနိုင်ငံ၏ ထူးခြားသော ယဉ်ကျေးမှုဆိုင်ရာ အကြောင်းအရာများအတွင်းတွင် သင်၏ ကိုယ်ရည်ကိုယ်သွေး စရိုက်များကို နားလည်ရန် ကူညီပေးပါသည်။")}
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg shadow p-6 border bg-white/80">
                        <h3 className="text-lg text-gray-700 sm:text-xl font-bold mb-2">The Science</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {t(
                                "The Big Five personality model is one of the most scientifically validated frameworks for understanding human personality. Our assessment is based on decades of research.",
                                "Big Five ကိုယ်ရည်ကိုယ်သွေး မော်ဒယ်သည် လူသားတို့၏ ကိုယ်ရည်ကိုယ်သွေးကို နားလည်ရန် သိပ္ပံနည်းကျ အတည်ပြုထားသော မူဘောင်များထဲမှ တစ်ခုဖြစ်သည်။ ကျွန်ုပ်တို့၏ အကဲဖြတ်မှုသည် ဆယ်စုနှစ်များစွာ သုတေသနပြုမှုအပေါ် အခြေခံပါသည်။",
                            )}
                        </p>
                    </div>

                    <div className="rounded-lg shadow p-6 border bg-white/80">
                        <h3 className="text-lg text-gray-700 sm:text-xl font-bold mb-2">Cultural Adaptation</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {t(
                                "We've carefully adapted the Big Five assessment to reflect Myanmar's cultural values, social norms, and linguistic nuances, ensuring that results are relevant and meaningful.",
                                "ကျွန်ုပ်တို့သည် မြန်မာနိုင်ငံ၏ ယဉ်ကျေးမှုတန်ဖိုးများ၊ လူမှုရေးစံနှုန်းများနှင့် ဘာသာစကားကွဲလွဲမှုများကို ထင်ဟပ်စေရန် Big Five အကဲဖြတ်ချက်ကို ဂရုတစိုက် ပြုပြင်ပြောင်းလဲထားပြီး ရလဒ်များသည် ဆီလျော်ပြီး အဓိပ္ပါယ်ရှိစေပါသည်။")}
                        </p>
                    </div>

                    <div className="rounded-lg shadow p-6 border bg-white/80">
                        <h3 className="text-lg text-gray-700 sm:text-xl font-bold mb-2">Why It Matters</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {t(
                                "Understanding your personality can help improve self-awareness, enhance relationships, guide career decisions, and provide insights into your strengths and growth areas.",
                                "သင့်ကိုယ်ရည်ကိုယ်သွေးကို နားလည်ခြင်းက မိမိကိုယ်ကိုယ်သိမြင်မှုကို မြှင့်တင်ပေးနိုင်သည်၊ ပေါင်းသင်းဆက်ဆံရေးကို မြှင့်တင်ရန်၊ အသက်မွေးဝမ်းကြောင်းဆိုင်ရာ ဆုံးဖြတ်ချက်များကို လမ်းညွှန်ပေးကာ သင်၏ အားသာချက်များနှင့် တိုးတက်မှုနယ်ပယ်များကို ထိုးထွင်းသိမြင်နိုင်စေရန် ကူညီပေးနိုင်ပါသည်။"
                            )}
                        </p>
                    </div>

                    <div className="rounded-lg shadow p-6 border bg-white/80">
                        <h3 className="text-lg text-gray-700 sm:text-xl font-bold mb-2">How It Works</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {t(
                                "Our assessment uses carefully crafted questions to measure the five major dimensions of personality. Your responses help create a personalized profile that reflects your unique traits.",
                                "ကျွန်ုပ်တို့၏ အကဲဖြတ်မှုသည် ကိုယ်ရည်ကိုယ်သွေး၏ အဓိက အတိုင်းအတာငါးခုကို တိုင်းတာရန် ဂရုတစိုက်ပြုလုပ်ထားသော မေးခွန်းများကို အသုံးပြုပါသည်။ သင်၏တုံ့ပြန်မှုများသည် သင်၏ထူးခြားသောစရိုက်လက္ခဏာများကို ထင်ဟပ်စေသည့် စိတ်ကြိုက်ပရိုဖိုင်ကို ဖန်တီးရန် ကူညီပေးပါသည်။"
                            )}
                        </p>
                    </div>

                    <div className="rounded-lg shadow p-6 border bg-white/80 md:col-span-2 lg:col-span-1">
                        <h3 className="text-lg text-gray-700 sm:text-xl font-bold mb-2">Our Mission</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {t(
                                "We aim to provide accessible, culturally relevant psychological tools that help people in Myanmar better understand themselves and others, fostering greater self-awareness and social harmony.",
                                "ကျွန်ုပ်တို့သည် မြန်မာနိုင်ငံရှိ လူများအား ၎င်းတို့ကိုယ်တိုင်နှင့် အခြားသူများ ပိုမိုနားလည်သဘောပေါက်စေရန်၊ ပိုမိုသိရှိနားလည်မှုနှင့် လူမှုသဟဇာတဖြစ်မှုကို မြှင့်တင်ပေးသည့် လက်လှမ်းမီနိုင်သော၊ ယဉ်ကျေးမှုအရ သက်ဆိုင်သော စိတ်ပိုင်းဆိုင်ရာ ကိရိယာများကို ပံ့ပိုးပေးရန် ရည်ရွယ်ပါသည်။"
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
