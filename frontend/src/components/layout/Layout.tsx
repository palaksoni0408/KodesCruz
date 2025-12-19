import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
    return (
        <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 ${className}`}>
            {/* Animated background grid */}
            <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {children}
            </div>
        </div>
    );
}
