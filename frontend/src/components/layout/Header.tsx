import { AlertCircle } from 'lucide-react';

interface HeaderProps {
    backendConnected: boolean | null;
    onBackToLanding?: () => void;
}

export default function Header({ backendConnected, onBackToLanding }: HeaderProps) {
    return (
        <div className="text-center mb-4 flex-shrink-0 relative">
            <h1 className="text-4xl font-bold text-white mb-1">KodesCruz</h1>
            <p className="text-lg text-gray-300">AI-Powered Coding Assistant</p>

            {/* Back to Home Button - Top Left */}
            {onBackToLanding && (
                <button
                    onClick={onBackToLanding}
                    className="absolute left-0 top-0 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/50 rounded-lg text-purple-300 hover:text-purple-200 transition-all text-sm"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="hidden sm:inline">Back to Home</span>
                </button>
            )}

            {backendConnected === false && (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 backdrop-blur-sm text-xs">
                    <AlertCircle className="w-3 h-3" />
                    <span>
                        Backend not connected. Please start the backend server: <code className="bg-red-900/30 px-1.5 py-0.5 rounded">uvicorn main:app --reload</code>
                    </span>
                </div>
            )}
            {backendConnected === true && (
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 backdrop-blur-sm text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Backend connected</span>
                </div>
            )}
        </div>
    );
}
