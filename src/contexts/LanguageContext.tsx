"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "my";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (en: string, my: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language");
      if (stored === "en" || stored === "my") return stored;
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  const t = (en: string, my: string): string => {
    return language === "en" ? en : my;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
