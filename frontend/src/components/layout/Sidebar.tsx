import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
    features: any[];
    activeFeature: string;
    setActiveFeature: (id: string) => void;
    onFeatureChange?: () => void;
}

export default function Sidebar({ features, activeFeature, setActiveFeature, onFeatureChange }: SidebarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleFeatureClick = (featureId: string) => {
        setActiveFeature(featureId);
        if (onFeatureChange) onFeatureChange();
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="lg:col-span-1">
            {/* Mobile Header Bar */}
            <div className="lg:hidden flex items-center justify-between bg-slate-900/80 backdrop-blur-md p-4 sticky top-0 z-40 border-b border-white/10 mb-4 rounded-xl">
                <span className="font-bold text-white text-lg">Menu</span>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Container */}
            <div className={`
        fixed inset-0 z-50 lg:static lg:z-auto lg:inset-auto
        flex flex-col gap-4 transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0 bg-slate-950/95 backdrop-blur-xl p-4' : '-translate-x-full lg:translate-x-0 lg:bg-transparent lg:p-0'}
      `}>
                {/* Mobile Close Button */}
                <div className="lg:hidden flex justify-end mb-2">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-white p-2"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-lg rounded-xl p-2 space-y-1 border border-purple-500/20 flex-1 overflow-y-auto custom-scrollbar shadow-xl">
                    {features.map((feature: any) => {
                        const isActive = activeFeature === feature.id;
                        const Icon = feature.icon;

                        return (
                            <button
                                key={feature.id}
                                onClick={() => handleFeatureClick(feature.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm group ${isActive
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 translate-x-1'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-1'
                                    }`}
                            >
                                <Icon
                                    size={20}
                                    className={`flex-shrink-0 transition-all duration-200 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-purple-400'
                                        }`}
                                />
                                <span className="font-medium truncate">{feature.label}</span>
                                {isActive && (
                                    <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0"></div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
