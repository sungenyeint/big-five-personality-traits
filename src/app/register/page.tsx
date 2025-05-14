"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSignUpValidationSchema } from "../utils/validationSchema";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

interface SignUpFormData {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterPage() {
    const { registerWithEmail, loading, user } = useAuth();
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const schema = getSignUpValidationSchema(t);
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({ resolver: yupResolver(schema) });
    const router = useRouter();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">{t("Loading...", "ဖွင့်နေသည်...")}</div>;
    }

    if (user) {
        if (user) {
            router.push("/");
            return null;
        }
    }

    const onSubmit = async (data: SignUpFormData) => {
        setError("");
        setSuccess("");
        try {
            await registerWithEmail(data.email, data.password);
            setSuccess(t("Registration successful! You are now logged in.", "စာရင်းသွင်းပြီးပါပြီ။ သင်သည်လော့ဂ်အင်ဝင်ပြီးပါပြီ။"));
            setTimeout(() => router.push("/"), 1000); // Redirect to home after 1s
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(t("An error occurred.", "အမှားတစ်ခု ဖြစ်ပွားခဲ့သည်။"));
            }
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}`}>
            <div className={`w-full max-w-md rounded-2xl shadow-xl p-8 ${theme === 'light' ? 'bg-white' : 'bg-gray-800 border border-gray-700'}`}>
                <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {t("Register", "စာရင်းသွင်းမည်")}
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder={t("Email", "အီးမေးလ်")}
                        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 outline-none transition-colors bg-transparent"
                        {...register("email")}
                    />
                    {errors.email && <div className="text-red-500 text-xs pl-1">{errors.email.message}</div>}
                    <input
                        type="password"
                        placeholder={t("Password", "စကားဝှက်")}
                        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 outline-none transition-colors bg-transparent"
                        {...register("password")}
                    />
                    {errors.password && <div className="text-red-500 text-xs pl-1">{errors.password.message}</div>}
                    <input
                        type="password"
                        placeholder={t("Confirm Password", "စကားဝှက်အတည်ပြုပါ")}
                        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 outline-none transition-colors bg-transparent"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && <div className="text-red-500 text-xs pl-1">{errors.confirmPassword.message}</div>}
                    {error && <div className="text-red-500 text-xs pl-1">{error}</div>}
                    {success && <div className="text-green-600 text-xs pl-1">{success}</div>}
                    <button
                        type="submit"
                        className="w-full px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-semibold shadow"
                    >
                        {t("Register", "စာရင်းသွင်းမည်")}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <span className="text-gray-500 text-sm mr-2">{t("Already have an account?", "အကောင့်ရှိပြီးသားလား?")}</span>
                    <a href="/login" className="text-blue-600 hover:underline text-sm font-medium">
                        {t("Login", "လော့ဂ်အင်")}
                    </a>
                </div>
            </div>
        </div>
    );
}
