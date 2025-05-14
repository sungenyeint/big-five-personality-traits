"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/contexts/firebase";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
    registerWithEmail: (email: string, password: string) => Promise<void>;
    signInWithEmail: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error: unknown) {
            console.error(error);
            throw error;
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    const registerWithEmail = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error: unknown) {
            // Handle or log error as needed
            console.error(error);
            throw error;
        }
    };

    const signInWithEmail = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error: unknown) {
            // Handle or log error as needed
            console.error(error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout, registerWithEmail, signInWithEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
