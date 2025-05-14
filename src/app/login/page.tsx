"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLoginValidationSchema } from "../utils/validationSchema";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

interface LoginFormData {
    email: string;
    password: string;
}

export default function LoginPage() {
    const { signInWithGoogle, signInWithEmail, loading, user } = useAuth();
    const { t } = useLanguage();
    const { theme } = useTheme();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const schema = getLoginValidationSchema(t);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema)
    });
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">{t("Loading...", "ဖွင့်နေသည်...")}</div>;
    }

    if (user) {
        return null;
    }

    const onSubmit = async (data: LoginFormData) => {
        setError("");
        setSuccess("");
        try {
            await signInWithEmail(data.email, data.password);
            setSuccess(t("Login successful!", "လော့ဂ်အင်ဝင်ပြီးပါပြီ။"));
            setTimeout(() => router.push("/"), 1000);
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
                    {t("Login", "လော့ဂ်အင်")}
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
                    {error && <div className="text-red-500 text-xs pl-1">{error}</div>}
                    {success && <div className="text-green-600 text-xs pl-1">{success}</div>}
                    <button
                        type="submit"
                        className="w-full px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg font-semibold shadow"
                    >
                        {t("Sign in", "လော့ဂ်အင်")}
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300" />
                    <span className="mx-2 text-gray-500 text-sm">{t("or", "သို့မဟုတ်")}</span>
                    <div className="flex-grow h-px bg-gray-300" />
                </div>
                <button
                    onClick={signInWithGoogle}
                    className="w-full px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors text-lg font-semibold shadow flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C36.2 2.7 30.6 0 24 0 14.8 0 6.7 5.8 2.7 14.1l8.1 6.3C12.7 13.7 17.8 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.6c0-1.6-.1-3.1-.4-4.6H24v9.1h12.4c-.5 2.7-2.1 5-4.4 6.6l7 5.4c4.1-3.8 6.5-9.4 6.5-16.5z"/><path fill="#FBBC05" d="M10.8 28.2c-1-2.7-1-5.7 0-8.4l-8.1-6.3C.9 17.1 0 20.5 0 24c0 3.5.9 6.9 2.7 10.1l8.1-6.3z"/><path fill="#EA4335" d="M24 48c6.6 0 12.1-2.2 16.1-6.1l-7-5.4c-2 1.4-4.5 2.3-7.1 2.3-6.2 0-11.3-4.2-13.2-9.8l-8.1 6.3C6.7 42.2 14.8 48 24 48z"/></g></svg>
                    {t("Sign in with Google", "Google ဖြင့် ဝင်မည်")}
                </button>
                <div className="mt-6 text-center">
                    <Link
                        href="/register"
                        className="text-blue-600 hover:underline text-sm font-medium"
                    >
                        {t("Don't have an account? Register", "အကောင့်မရှိဘူးလား? စာရင်းသွင်းပါ")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
