import { Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                    <span>Created by</span>
                    <span className="font-semibold text-white">Sujal Kumar</span>
                    <a href="https://www.linkedin.com/in/sujal-kumar-585135289/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors" aria-label="Sujal Kumar's LinkedIn">
                        <Linkedin size={18} className="inline" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
