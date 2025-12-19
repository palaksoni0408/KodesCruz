import { ReactNode } from 'react';
import RainBackground from '../RainBackground';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
    return (
        <div className={`min-h-screen bg-black ${className}`}>
            <RainBackground />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {children}
            </div>
        </div>
    );
}
