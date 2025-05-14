
export interface Question {
    id: number;
    text: {
        en: string;
        my: string;
    };
    trait: "openness" | "conscientiousness" | "extraversion" | "agreeableness" | "neuroticism";
    reversed: boolean;
}

export const questions: Question[] = [
    // Openness questions
    {
        id: 1,
        text: {
            en: "I am intrigued by new ideas and enjoy exploring unfamiliar concepts.",
            my: "ကျွန်ုပ်သည် အတွေးအသစ်များကို စိတ်ဝင်စားပြီး ရင်းနှီးခြင်းမရှိသော အယူအဆများကို စူးစမ်းလေ့လာရတာ နှစ်သက်သည်။"
        },
        trait: "openness",
        reversed: false
    },
    {
        id: 2,
        text: {
            en: "I prefer familiar traditions over new ways of doing things.",
            my: "အသစ်ဖြစ်သော နည်းလမ်းများထက် ရိုးရာနည်းလမ်းများကို ကျွန်ုပ်ပိုနှစ်သက်သည်။"
        },
        trait: "openness",
        reversed: true
    },
    {
        id: 3,
        text: {
            en: "I enjoy engaging with art, music, and literature from diverse cultures.",
            my: "ကျွန်ုပ်သည် မတူညီသော ယဉ်ကျေးမှုများမှ အနုပညာ၊ ဂီတနှင့် စာပေများကို ကြည့်ရှုခံစားရတာ နှစ်သက်သည်။"
        },
        trait: "openness",
        reversed: false
    },
    {
        id: 4,
        text: {
            en: "I find philosophical discussions about life's meaning to be interesting.",
            my: "ကျွန်ုပ်သည် ဘဝအဓိပ္ပာယ်အကြောင်း အတွေးအခေါ် ဆွေးနွေးမှုများကို စိတ်ဝင်စားသည်။"
        },
        trait: "openness",
        reversed: false
    },

    // Conscientiousness questions
    {
        id: 5,
        text: {
            en: "I am organized and carefully plan my daily activities.",
            my: "ကျွန်ုပ်သည် ကျွန်ုပ်၏ နေ့စဉ်လုပ်ဆောင်ချက်များကို စနစ်တကျ စီစဉ်သည်။"
        },
        trait: "conscientiousness",
        reversed: false
    },
    {
        id: 6,
        text: {
            en: "I sometimes act without thinking through the consequences.",
            my: "ကျွန်ုပ်သည် တစ်ခါတစ်ရံ အကျိုးဆက်များကို မစဉ်းစားဘဲ ဆောင်ရွက်တတ်သည်။"
        },
        trait: "conscientiousness",
        reversed: true
    },
    {
        id: 7,
        text: {
            en: "I work diligently to complete tasks, even when they are difficult.",
            my: "ကျွန်ုပ်သည် အလုပ်များကို ခက်ခဲသော်လည်း ကြိုးစားပြီးဆုံးအောင် လုပ်တတ်သည်။"
        },
        trait: "conscientiousness",
        reversed: false
    },
    {
        id: 8,
        text: {
            en: "I prioritize my duties before engaging in leisure activities.",
            my: "ကျွန်ုပ်သည် အပန်းဖြေလုပ်ဆောင်မှုများမလုပ်ခင် တာဝန်များကို ဦးစားပေးဆောင်ရွက်သည်။"
        },
        trait: "conscientiousness",
        reversed: false
    },

    // Extraversion questions
    {
        id: 9,
        text: {
            en: "I enjoy socializing with large groups of people.",
            my: "ကျွန်ုပ်သည် လူအများနှင့် ပေါင်းသင်းဆက်ဆံရတာ နှစ်သက်သည်။"
        },
        trait: "extraversion",
        reversed: false
    },
    {
        id: 10,
        text: {
            en: "I prefer spending quiet evenings at home over going to social gatherings.",
            my: "ကျွန်ုပ်သည် လူမှုရေးပွဲများသို့ သွားခြင်းထက် အိမ်တွင်ငြိမ်ငြိမ်နေရတာ ပိုနှစ်သက်သည်။"
        },
        trait: "extraversion",
        reversed: true
    },
    {
        id: 11,
        text: {
            en: "I find it easy to talk to strangers at community events.",
            my: "ကျွန်ုပ်သည် ရပ်ရွာပွဲများတွင် မသိသူများနှင့် စကားပြောရတာ လွယ်ကူသည်။"
        },
        trait: "extraversion",
        reversed: false
    },
    {
        id: 12,
        text: {
            en: "I naturally take leadership roles in group settings.",
            my: "ကျွန်ုပ်သည် အဖွဲ့လိုက်လုပ်ဆောင်ရာတွင် ခေါင်းဆောင်မှုအခန်းကဏ္ဍကို သဘာဝအလျောက် ရယူတတ်သည်။"
        },
        trait: "extraversion",
        reversed: false
    },

    // Agreeableness questions
    {
        id: 13,
        text: {
            en: "I try to be courteous and respectful to everyone I meet.",
            my: "ကျွန်ုပ်သည် တွေ့ဆုံသူ တိုင်းကို ယဉ်ကျေးလေးစားစွာ ဆက်ဆံရန် ကြိုးစားသည်။"
        },
        trait: "agreeableness",
        reversed: false
    },
    {
        id: 14,
        text: {
            en: "I find it difficult to forgive those who have wronged me.",
            my: "ကျွန်ုပ်သည် မှားယွင်းဆက်ဆံသူများကို ခွင့်လွှတ်ရန် ခက်ခဲသည်။"
        },
        trait: "agreeableness",
        reversed: true
    },
    {
        id: 15,
        text: {
            en: "I enjoy helping others, even when there is no direct benefit to myself.",
            my: "ကျွန်ုပ်သည် ကိုယ်ပိုင်အကျိုးအမြတ် မရရှိသော်လည်း သူတစ်ပါးကို ကူညီရတာ နှစ်သက်သည်။"
        },
        trait: "agreeableness",
        reversed: false
    },
    {
        id: 16,
        text: {
            en: "I value harmony and cooperation over competition in my relationships.",
            my: "ကျွန်ုပ်သည် ဆက်ဆံရေးများတွင် ယှဉ်ပြိုင်မှုထက် သဟဇာတဖြစ်မှုနှင့် ပူးပေါင်းဆောင်ရွက်မှုကို ပိုမိုတန်ဖိုးထားသည်။"
        },
        trait: "agreeableness",
        reversed: false
    },

    // Neuroticism questions
    {
        id: 17,
        text: {
            en: "I often worry about things that might go wrong.",
            my: "ကျွန်ုပ်သည် မှားယွင်းနိုင်သော အရာများအကြောင်း မကြာခဏ စိုးရိမ်တတ်သည်။"
        },
        trait: "neuroticism",
        reversed: false
    },
    {
        id: 18,
        text: {
            en: "I am generally calm and not easily upset by stressful events.",
            my: "ကျွန်ုပ်သည် ယေဘူယျအားဖြင့် စိတ်ငြိမ်သက်ပြီး စိတ်ဖိစီးစေသည့်အဖြစ်အပျက်များက လွယ်လင့်တကူ စိတ်ဆိုးစေခြင်းမရှိပါ။"
        },
        trait: "neuroticism",
        reversed: true
    },
    {
        id: 19,
        text: {
            en: "When faced with difficulties, I often feel helpless.",
            my: "အခက်အခဲများနှင့် ရင်ဆိုင်ရသောအခါ ကျွန်ုပ်သည် မကြာခဏ အကူအညီမဲ့သလို ခံစားရသည်။"
        },
        trait: "neuroticism",
        reversed: false
    },
    {
        id: 20,
        text: {
            en: "My mood can change quickly in response to circumstances.",
            my: "ကျွန်ုပ်၏ စိတ်အခြေအနေသည် အခြေအနေများပေါ် မူတည်၍ လျင်မြန်စွာ ပြောင်းလဲနိုင်သည်။"
        },
        trait: "neuroticism",
        reversed: false
    }
];

export const traitDescriptions = {
    openness: {
        title: {
            en: "Openness to Experience",
            my: "အတွေ့အကြုံအသစ်များကို လက်ခံမှု"
        },
        description: {
            en: "Reflects a person's willingness to embrace new ideas, experiences, and artistic pursuits. Those high in openness tend to be creative, curious, and appreciative of beauty.",
            my: "လူတစ်ဦး၏ အတွေးအခေါ်အသစ်များ၊ အတွေ့အကြုံများနှင့် အနုပညာဆိုင်ရာ လုပ်ဆောင်မှုများကို လက်ခံလိုစိတ်ကို ညွှန်ပြသည်။ ဤသွင်ပြင်လက္ခဏာ မြင့်မားသူများသည် ဖန်တီးနိုင်စွမ်းရှိ၊ စူးစမ်းလိုစိတ်ရှိပြီး အလှအပကို နှစ်သက်တတ်ကြသည်။"
        },
        high: {
            en: "You have a high level of openness, suggesting you're intellectually curious, imaginative, and open to new experiences. You likely appreciate art, creativity, and diverse perspectives.",
            my: "သင့်တွင် အတွေ့အကြုံအသစ်များကို လက်ခံမှုအဆင့် မြင့်မားသည်၊ ဥာဏ်ရည်ဥာဏ်သွေးဖြင့် စူးစမ်းလိုစိတ်ရှိခြင်း၊ စိတ်ကူးယဉ်ခြင်းနှင့် အတွေ့အကြုံအသစ်များကို လက်ခံလိုခြင်းကို ညွှန်ပြသည်။ သင်သည် အနုပညာ၊ ဖန်တီးမှုနှင့် မတူကွဲပြားသော အမြင်များကို အသိအမှတ်ပြုနိုင်ပါသည်။"
        },
        moderate: {
            en: "You have a moderate level of openness, balancing traditional perspectives with occasional interest in new ideas and experiences.",
            my: "သင့်တွင် အတွေ့အကြုံအသစ်များကို လက်ခံမှု အလယ်အလတ်အဆင့်ရှိသည်၊ ရိုးရာအမြင်များနှင့် အတွေးအခေါ်အသစ်များ၊ အတွေ့အကြုံအသစ်များအပေါ် စိတ်ဝင်စားမှုတို့ကို ဟန်ချက်ညီအောင် ထိန်းညှိလုပ်ဆောင်သည်။"
        },
        low: {
            en: "You have a lower level of openness, suggesting you favor tradition, practicality, and conventional approaches over novelty and abstract ideas.",
            my: "သင့်တွင် အတွေ့အကြုံအသစ်များကို လက်ခံမှုအဆင့် နည်းပါးသည်၊ ဆန်းသစ်တီထွင်မှုနှင့် အမြင်ဆန်းအတွေးအခေါ်များထက် ရိုးရာ၊ လက်တွေ့ကျမှုနှင့် ရိုးရိုးရှင်းရှင်းချဉ်းကပ်နည်းများကို ပို၍နှစ်သက်ကြောင်း ညွှန်ပြသည်။"
        },
        cultural: {
            en: "In Myanmar culture, openness is often expressed through appreciation of traditional arts and crafts alongside willingness to learn modern approaches and international perspectives.",
            my: "မြန်မာ့ယဉ်ကျေးမှုတွင်၊ အတွေ့အကြုံသစ်များကိုလက်ခံမှုကို ရိုးရာအနုပညာနှင့် လက်မှုပညာများကို နှစ်သက်မြတ်နိုးခြင်းအပြင် ခေတ်မီချဉ်းကပ်နည်းများနှင့် နိုင်ငံတကာအမြင်များကို လေ့လာလိုစိတ်ရှိခြင်းဖြင့် ဖော်ပြလေ့ရှိသည်။"
        }
    },
    conscientiousness: {
        title: {
            en: "Conscientiousness",
            my: "တာဝန်သိစိတ်"
        },
        description: {
            en: "Reflects a person's organization, persistence, and motivation in goal-directed behavior. Those high in conscientiousness tend to be organized, responsible, and hardworking.",
            my: "လူတစ်ဦး၏ စုဖွဲ့မှု၊ ဇွဲလုံ့လဝီရိယနှင့် ရည်မှန်းချက်ဦးတည်သော အပြုအမူတွင် လှုံ့ဆော်မှုတို့ကို ညွှန်ပြသည်။ ဤသွင်ပြင်လက္ခဏာ မြင့်မားသူများသည် စနစ်တကျရှိ၊ တာဝန်သိတတ်ပြီး ကြိုးစားအလုပ်လုပ်တတ်ကြသည်။"
        },
        high: {
            en: "You have a high level of conscientiousness, indicating you're organized, reliable, and disciplined. You likely plan ahead, follow through on commitments, and strive for achievement.",
            my: "သင့်တွင် တာဝန်သိစိတ်အဆင့် မြင့်မားသည်၊ စနစ်တကျရှိခြင်း၊ ယုံကြည်စိတ်ချရခြင်းနှင့် စည်းကမ်းရှိခြင်းကို ညွှန်ပြသည်။ သင်သည် ကြိုတင်စီစဉ်ခြင်း၊ ကတိကဝတ်များကို တည်မြဲစွာလိုက်နာခြင်းနှင့် အောင်မြင်မှုအတွက် ကြိုးပမ်းခြင်းတို့ကို ပြုလုပ်နိုင်ပါသည်။"
        },
        moderate: {
            en: "You have a moderate level of conscientiousness, showing a balanced approach to organization and reliability without being overly rigid.",
            my: "သင့်တွင် တာဝန်သိစိတ်အဆင့် အလယ်အလတ်ရှိသည်၊ အလွန်တင်းကြပ်ခြင်းမရှိဘဲ စုစည်းမှုနှင့် ယုံကြည်စိတ်ချရမှုတို့အပေါ် ဟန်ချက်ညီသော ချဉ်းကပ်နည်းကို ပြသည်။"
        },
        low: {
            en: "You have a lower level of conscientiousness, suggesting you prefer spontaneity and flexibility over rigid planning and organization.",
            my: "သင့်တွင် တာဝန်သိစိတ်အဆင့် နည်းပါးသည်၊ တင်းကြပ်သော အစီအစဉ်ဆွဲခြင်းနှင့် စုစည်းခြင်းများထက် ရုတ်တရက်ဆောင်ရွက်မှုနှင့် ပြောင်းလွယ်ပြင်လွယ်ရှိမှုကို ပို၍နှစ်သက်ကြောင်း ညွှန်ပြသည်။"
        },
        cultural: {
            en: "In Myanmar culture, conscientiousness is often demonstrated through respect for elders, fulfilling family obligations, and maintaining community responsibilities.",
            my: "မြန်မာ့ယဉ်ကျေးမှုတွင်၊ တာဝန်သိစိတ်ကို အကြီးအကဲများကို လေးစားခြင်း၊ မိသားစုတာဝန်များကို ဖြည့်ဆည်းခြင်းနှင့် လူမှုအသိုင်းအဝိုင်းအပေါ် တာဝန်သိမှုများကို ထိန်းသိမ်းခြင်းဖြင့် ဖော်ပြလေ့ရှိသည်။"
        }
    },
    extraversion: {
        title: {
            en: "Extraversion",
            my: "ပြင်ပဆက်ဆံမှု"
        },
        description: {
            en: "Reflects a person's energy and tendency to seek stimulation in the external world, particularly in social settings. Those high in extraversion tend to be outgoing, energetic, and sociable.",
            my: "လူတစ်ဦး၏ စွမ်းအင်နှင့် အထူးသဖြင့် လူမှုရေးဝန်းကျင်များတွင် ပြင်ပကမ္ဘာတွင် လှုံ့ဆော်မှုရှာဖွေရန် ဦးတည်ချက်ကို ညွှန်ပြသည်။ ဤသွင်ပြင်လက္ခဏာ မြင့်မားသူများသည် ပြင်ပသို့ ထွက်တတ်၊ စွမ်းအင်ပြည့်ဝပြီး လူမှုဆက်ဆံရေးကောင်းမွန်တတ်ကြသည်။"
        },
        high: {
            en: "You have a high level of extraversion, suggesting you're sociable, outgoing, and energized by social interactions. You likely enjoy group activities and seek out opportunities to connect with others.",
            my: "သင့်တွင် ပြင်ပဆက်ဆံမှုအဆင့် မြင့်မားသည်၊ လူမှုဆက်ဆံရေးကောင်းမွန်ခြင်း၊ ပြင်ပသို့ထွက်တတ်ခြင်းနှင့် လူမှုဆက်ဆံရေးများမှ စွမ်းအင်ရရှိခြင်းကို ညွှန်ပြသည်။ သင်သည် အုပ်စုလိုက်လုပ်ဆောင်မှုများကို နှစ်သက်ပြီး အခြားသူများနှင့် ဆက်သွယ်ရန် အခွင့်အလမ်းများကို ရှာဖွေနိုင်ပါသည်။"
        },
        moderate: {
            en: "You have a moderate level of extraversion, comfortably engaging in social activities while also valuing your alone time.",
            my: "သင့်တွင် ပြင်ပဆက်ဆံမှုအဆင့် အလယ်အလတ်ရှိသည်၊ လူမှုဆက်ဆံရေးလုပ်ဆောင်မှုများတွင် သက်တောင့်သက်တာပါဝင်နိုင်သော်လည်း တစ်ဦးတည်းနေချိန်ကိုလည်း တန်ဖိုးထားသည်။"
        },
        low: {
            en: "You have a lower level of extraversion, indicating you may prefer solitary activities and find social gatherings draining rather than energizing.",
            my: "သင့်တွင် ပြင်ပဆက်ဆံမှုအဆင့် နည်းပါးသည်၊ လူမှုပွဲများသည် စွမ်းအင်ဖြည့်ပေးမည့်အစား ကုန်ခန်းစေသောကြောင့် တစ်ဦးတည်းလုပ်ဆောင်မည့် လုပ်ငန်းများကို ပိုမိုနှစ်သက်ကြောင်း ညွှန်ပြသည်။"
        },
        cultural: {
            en: "In Myanmar culture, extraversion may be expressed differently than in Western contexts, often balanced with a cultural emphasis on modesty and group harmony.",
            my: "မြန်မာ့ယဉ်ကျေးမှုတွင်၊ ပြင်ပဆက်ဆံမှုကို အနောက်တိုင်းအခြေအနေများနှင့် မတူညီစွာ ဖော်ပြနိုင်ပြီး၊ မကြာခဏဆိုသလို ယဉ်ကျေးသိမ်မွေ့မှုနှင့် အုပ်စုသဟဇာတဖြစ်မှုအပေါ် ယဉ်ကျေးမှုအလေးပေးမှုနှင့် ဟန်ချက်ညီအောင် လုပ်ဆောင်လေ့ရှိသည်။"
        }
    },
    agreeableness: {
        title: {
            en: "Agreeableness",
            my: "သဟဇာတဖြစ်မှု"
        },
        description: {
            en: "Reflects a person's concern with cooperation and social harmony. Those high in agreeableness tend to be compassionate, cooperative, and considerate.",
            my: "လူတစ်ဦး၏ ပူးပေါင်းဆောင်ရွက်မှုနှင့် လူမှုရေးသဟဇာတဖြစ်မှုအပေါ် စိုးရိမ်မှုကို ညွှန်ပြသည်။ ဤသွင်ပြင်လက္ခဏာ မြင့်မားသူများသည် ကရုဏာရှိ၊ ပူးပေါင်းဆောင်ရွက်တတ်ပြီး ထည့်သွင်းစဉ်းစားတတ်ကြသည်။"
        },
        high: {
            en: "You have a high level of agreeableness, suggesting you're compassionate, cooperative, and concerned with others' wellbeing. You likely prioritize harmony in relationships and are willing to compromise.",
            my: "သင့်တွင် သဟဇာတဖြစ်မှုအဆင့် မြင့်မားသည်၊ ကရုဏာရှိခြင်း၊ ပူးပေါင်းဆောင်ရွက်တတ်ခြင်းနှင့် အခြားသူများ၏ ကောင်းကျိုးချမ်းသာကို ဂရုစိုက်ခြင်းကို ညွှန်ပြသည်။ သင်သည် ဆက်ဆံရေးများတွင် သဟဇာတဖြစ်မှုကို ဦးစားပေးပြီး အလျှော့ပေးရန် ဆန္ဒရှိနိုင်ပါသည်။"
        },
        moderate: {
            en: "You have a moderate level of agreeableness, balancing cooperation with self-advocacy when needed.",
            my: "သင့်တွင် သဟဇာတဖြစ်မှုအဆင့် အလယ်အလတ်ရှိသည်၊ လိုအပ်သည့်အခါ ကိုယ်ပိုင်ရပ်တည်ချက်နှင့် ပူးပေါင်းဆောင်ရွက်မှုကို ဟန်ချက်ညီအောင် လုပ်ဆောင်သည်။"
        },
        low: {
            en: "You have a lower level of agreeableness, indicating you may prioritize your own interests and be willing to challenge others' views when you disagree.",
            my: "သင့်တွင် သဟဇာတဖြစ်မှုအဆင့် နည်းပါးသည်၊ သင့်ကိုယ်ပိုင်အကျိုးစီးပွားကို ဦးစားပေးပြီး သင်သဘောမတူသည့်အခါ အခြားသူများ၏ အမြင်များကို စိန်ခေါ်ရန် ဆန္ဒရှိနိုင်ကြောင်း ညွှန်ပြသည်။"
        },
        cultural: {
            en: "In Myanmar culture, agreeableness is highly valued and often expressed through concepts like 'ahnaday' (empathy) and community-minded practices.",
            my: "မြန်မာ့ယဉ်ကျေးမှုတွင်၊ သဟဇာတဖြစ်မှုကို အလွန်တန်ဖိုးထားပြီး မကြာခဏဆိုသလို 'အနတ္တေ' (စာနာနားလည်မှု) နှင့် အသိုင်းအဝိုင်းအခြေပြု အလေ့အထများမှတဆင့် ဖော်ပြလေ့ရှိသည်။"
        }
    },
    neuroticism: {
        title: {
            en: "Emotional Stability",
            my: "စိတ်ခံစားမှုတည်ငြိမ်မှု"
        },
        description: {
            en: "Reflects a person's emotional stability and tendency to experience negative emotions. Those high in neuroticism tend to experience more stress, anxiety, and emotional ups and downs.",
            my: "လူတစ်ဦး၏ စိတ်ခံစားမှုတည်ငြိမ်မှုနှင့် အပျက်သဘောဆောင်သော စိတ်ခံစားမှုများကို ခံစားရန် ဦးတည်ချက်ကို ညွှန်ပြသည်။ ဤသွင်ပြင်လက္ခဏာ မြင့်မားသူများသည် စိတ်ဖိစီးမှု၊ စိုးရိမ်ပူပန်မှု၊ စိတ်ခံစားမှုအတက်အကျများကို ပိုမိုခံစားရလေ့ရှိသည်။"
        },
        high: {
            en: "You score higher on emotional reactivity (neuroticism), suggesting you may experience stronger emotional responses to stress and changes. You may be more sensitive to subtle emotional cues in your environment.",
            my: "သင်သည် စိတ်ခံစားမှုပြန်လည်တုံ့ပြန်မှု (neuroticism) တွင် အမှတ်ပိုမိုမြင့်မားသည်၊ စိတ်ဖိစီးမှုနှင့် ပြောင်းလဲမှုများအပေါ် ပိုမိုပြင်းထန်သော စိတ်ခံစားမှုတုံ့ပြန်မှုများကို သင်ခံစားရနိုင်ကြောင်း ညွှန်ပြသည်။ သင်သည် သင့်ပတ်ဝန်းကျင်ရှိ သိမ်မွေ့သော စိတ်ခံစားမှုအချက်ပြမှုများကို ပိုမိုသိရှိနားလည်နိုင်ပါသည်။"
        },
        moderate: {
            en: "You score moderately on emotional stability, showing a balanced approach to handling stress and emotional challenges.",
            my: "သင်သည် စိတ်ခံစားမှုတည်ငြိမ်မှုတွင် အလယ်အလတ်အဆင့် ရမှတ်ရရှိသည်၊ စိတ်ဖိစီးမှုနှင့် စိတ်ခံစားမှုဆိုင်ရာ စိန်ခေါ်မှုများကို ကိုင်တွယ်ရာတွင် ဟန်ချက်ညီသော ချဉ်းကပ်မှုကို ပြသည်။"
        },
        low: {
            en: "You score lower on emotional reactivity, suggesting you tend to remain calm under pressure and are less easily upset by stressful situations.",
            my: "သင်သည် စိတ်ခံစားမှုပြန်လည်တုံ့ပြန်မှုတွင် အမှတ်နည်းပါးသည်၊ ဖိအားအောက်တွင် စိတ်ငြိမ်သက်စွာနေတတ်ပြီး စိတ်ဖိစီးစေသော အခြေအနေများကြောင့် စိတ်ဆိုးရန် မလွယ်ကူကြောင်း ညွှန်ပြသည်။"
        },
        cultural: {
            en: "In Myanmar culture, emotional regulation is often informed by Buddhist practices of mindfulness and equanimity, influencing how emotional stability is expressed and valued.",
            my: "မြန်မာ့ယဉ်ကျေးမှုတွင်၊ စိတ်ခံစားမှုထိန်းညှိခြင်းကို ဗုဒ္ဓဘာသာ၏ သတိပဋ္ဌာန်နှင့် ဥပေက္ခာကျင့်စဉ်များမှ မကြာခဏ လမ်းညွှန်မှု ရရှိပြီး၊ စိတ်ခံစားမှုတည်ငြိမ်မှုကို မည်သို့ဖော်ပြပြီး တန်ဖိုးထားသည်ကို လွှမ်းမိုးသည်။"
        }
    }
};

export type Language = "en" | "my";
