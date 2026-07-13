"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProfilePage() {
    const { user, loading } = useAuth();
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { t } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
        if (user) {
            setDisplayName(user.displayName || "");
            setEmail(user.email || "");
        }
    }, [user, loading, router]);

    const handleSave = async () => {
        setSaving(true);
        setSuccess("");
        setError("");
        try {
            if (user) {
                // Update display name
                if (displayName.trim() && displayName !== user.displayName) {
                    await updateProfile(user, { displayName: displayName.trim() });
                }
                // Update email
                if (email.trim() && email !== user.email) {
                    await updateEmail(user, email.trim());
                }
                // Update password
                if (password.trim()) {
                    await updatePassword(user, password.trim());
                }
                setSuccess(t("Profile updated successfully!", "ပရိုဖိုင်ကို အောင်မြင်စွာ ပြင်ဆင်ပြီးပါပြီ!"));
                setPassword("");
            }
        } catch (err: unknown) {
            const errorMessage =
                err && typeof err === "object" && "message" in err
                    ? (err as { message?: string }).message
                    : t("Failed to update profile", "ပရိုဖိုင်ကို ပြင်ဆင်ရန် မအောင်မြင်ပါ");
            setError(errorMessage || t("Failed to update profile", "ပရိုဖိုင်ကို ပြင်ဆင်ရန် မအောင်မြင်ပါ"));
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                {t("Loading...", "ဖွင့်နေသည်...")}
            </div>
        );
    }
    if (!user) return null;

    return (
        <div className={`${theme === "light" ? "bg-white" : "bg-gray-900"} max-w-md mx-auto p-6 rounded shadow my-12`}>
            <h2 className="text-2xl font-bold mb-4">{t("Profile", "ပရိုဖိုင်")}</h2>
            <div className="mb-4">
                <label className="block mb-1 font-medium">{t("Display Name", "အမည်")}</label>
                <input
                    className={`${theme === "light" ? "bg-white" : "dark:bg-gray-800 dark:border-gray-700"} w-full border rounded px-3 py-2`}
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    placeholder={t("Enter your name", "သင့်အမည်ကို ထည့်သွင်းပါ")}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">{t("Email", "အီးမေးလ်")}</label>
                <input
                    className={`${theme === "light" ? "bg-white" : "dark:bg-gray-800 dark:border-gray-700"} w-full border rounded px-3 py-2`}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t("Enter your email", "သင့်အီးမေးလ်ထည့်ပါ")}
                    type="email"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">{t("New Password", "စကားဝှက်အသစ်")}</label>
                <input
                    className={`${theme === "light" ? "bg-white" : "dark:bg-gray-800 dark:border-gray-700"} w-full border rounded px-3 py-2`}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t("Enter new password", "စကားဝှက်အသစ်ထည့်ပါ")}
                    type="password"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{t("Leave blank to keep current password", "မပြောင်းလဲလိုပါက ဗလာထားနိုင်သည်")}</p>
            </div>
            <button
                className="w-full bg-myanmar-gold text-myanmar-maroon px-4 py-2 rounded font-semibold hover:bg-myanmar-gold/90 transition-colors"
                onClick={handleSave}
                disabled={saving}
            >
                {saving ? t("Saving...", "သိမ်းဆည်းနေသည်...") : t("Save Changes", "ပြောင်းလဲမှုများကို သိမ်းမည်")}
            </button>
            {success && <div className="text-green-600 dark:text-green-400 text-center mt-2">{success}</div>}
            {error && <div className="text-red-600 dark:text-red-400 text-center mt-2">{error}</div>}
        </div>
    );
}
