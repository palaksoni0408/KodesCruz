import { Code, Sparkles, Users, Zap, ArrowRight, Github } from 'lucide-react';

interface LandingPageProps {
    onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-auto">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6" />
                            </div>
                            <h1 className="text-2xl font-bold">KodesCruz</h1>
                        </div>
                        <a
                            href="https://github.com/palaksoni0408/KodesCruz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <Github size={20} />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    </div>

                    {/* Hero Content */}
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300">Powered by Groq AI - Lightning Fast Inference</span>
                        </div>

                        <h2 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                            AI-Powered Coding Assistant
                        </h2>

                        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                            Explain code, debug errors, generate solutions, and collaborate in real-time.
                            All powered by cutting-edge AI technology.
                        </p>

                        <button
                            onClick={onGetStarted}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 hover:scale-105"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* AI Features */}
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                            <Sparkles className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">AI-Powered Features</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Explain code, debug errors, generate solutions, analyze complexity, and review code quality with advanced AI.
                        </p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-purple-300">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                Code Explanation
                            </div>
                            <div className="flex items-center gap-2 text-sm text-purple-300">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                Smart Debugging
                            </div>
                            <div className="flex items-center gap-2 text-sm text-purple-300">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                                Code Generation
                            </div>
                        </div>
                    </div>

                    {/* Collaboration */}
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
                            <Users className="w-6 h-6 text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Real-Time Collaboration</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Create rooms, code together, chat with your team, and share ideas in real-time with voice support.
                        </p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-pink-300">
                                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                Live Code Editing
                            </div>
                            <div className="flex items-center gap-2 text-sm text-pink-300">
                                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                Voice Chat
                            </div>
                            <div className="flex items-center gap-2 text-sm text-pink-300">
                                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                Team Messaging
                            </div>
                        </div>
                    </div>

                    {/* Code Execution */}
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                            <Zap className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Code Playground</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Execute code in 50+ programming languages instantly. Test your ideas without any setup.
                        </p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-blue-300">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                50+ Languages
                            </div>
                            <div className="flex items-center gap-2 text-sm text-blue-300">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                Instant Execution
                            </div>
                            <div className="flex items-center gap-2 text-sm text-blue-300">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                No Setup Required
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Creator Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built By</h2>
                    <p className="text-gray-400 text-lg">Meet the creator behind KodesCruz</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/40 via-pink-900/20 to-purple-900/40 border border-purple-500/30 p-8 md:p-12 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

                        <div className="relative flex flex-col md:flex-row gap-8 items-center">
                            {/* Profile Picture */}
                            <div className="flex-shrink-0">
                                <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/30">
                                    <img
                                        src="/palak-profile.jpg"
                                        alt="Palak Soni"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-bold text-white mb-2">Palak Soni</h3>
                                <p className="text-purple-300 text-lg mb-4 font-medium">
                                    Aspiring Data Scientist | Oracle Certified
                                </p>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start">
                                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">B.Tech Mathematics & Computing @ RGIPT</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-300 justify-center md:justify-start">
                                        <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">Mancherial, Telangana, India</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
                                    Passionate about Machine Learning, Data Science, and AI Applications.
                                    Experienced in building analytical frameworks and AI-driven solutions using
                                    Python, LangChain, and cutting-edge technologies. Oracle Data Science Professional
                                    Certified with a strong foundation in computational methods and research.
                                </p>

                                {/* Contact Links */}
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <a
                                        href="mailto:23mc3035@rgipt.ac.in"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/50 rounded-lg text-purple-300 hover:text-purple-200 transition-all"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Email: 23mc3035@rgipt.ac.in
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/palak-soni-292280288"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-lg text-blue-300 hover:text-blue-200 transition-all"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="mt-8 pt-8 border-t border-purple-500/20">
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                                    Machine Learning
                                </span>
                                <span className="px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-xs text-pink-300">
                                    Data Science
                                </span>
                                <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                                    AI Applications
                                </span>
                                <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-300">
                                    Python & LangChain
                                </span>
                                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">
                                    Oracle Certified
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-12 text-center">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                    <div className="relative">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                            Ready to supercharge your coding?
                        </h3>
                        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                            Join developers who are coding smarter with AI assistance
                        </p>
                        <button
                            onClick={onGetStarted}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Start Coding Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2024 KodesCruz. Powered by Groq AI.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Terms
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Docs
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </div>
    );
}
