import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30">
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold">F</div>
                        <span className="text-xl font-bold tracking-tight">FIGURA</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="#" className="hover:text-white transition-colors">Features</a>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                    </div>
                    <button className="px-4 py-2 rounded-full bg-white text-slate-950 text-sm font-semibold hover:bg-slate-200 transition-colors">
                        Get Started
                    </button>
                </div>
            </nav>
            <main className="pt-16">
                {children}
            </main>
            <footer className="border-t border-white/10 py-12 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} FIGURA. All rights reserved.
                </div>
            </footer>
        </div>
    );
};
