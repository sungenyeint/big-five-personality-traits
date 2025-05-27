import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background via-blue-50 to-blue-100">
            <h1 className="text-6xl font-extrabold text-myanmar-red mb-4 drop-shadow-lg">404</h1>
            <p className="text-2xl text-primary mb-2 font-semibold">Page Not Found</p>
            <p className="text-base text-muted-foreground mb-6 text-center max-w-md">
                Sorry, the page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-bold shadow hover:bg-blue-600 transition-colors"
            >
                Go Home
            </Link>
        </div>
    );
}
