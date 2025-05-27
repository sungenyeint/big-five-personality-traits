export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
            <div className="relative mb-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-blue-200"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="h-8 w-8 text-blue-400 opacity-80" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
            </div>
            </div>
            <p className="text-xl text-blue-700 font-bold tracking-wide animate-pulse">Loading...</p>
            <span className="text-sm text-blue-400 mt-2">Please wait while we prepare your experience</span>
        </div>
    );
}
