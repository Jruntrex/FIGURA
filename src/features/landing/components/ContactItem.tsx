import { ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ContactItemProps {
    icon: LucideIcon;
    label: string;
    value: string;
    href: string;
}

export const ContactItem = ({ icon: Icon, label, value, href }: ContactItemProps) => (
    <a
        href={href}
        className="relative flex items-center gap-4 p-4 bg-carbon border border-defense/10 hover:border-defense/40 transition-all duration-500 group overflow-hidden"
    >
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-0 w-[1px] h-3 bg-defense" />
            <div className="absolute top-0 right-0 w-3 h-[1px] bg-defense" />
        </div>

        {/* Red Glow */}
        <div className="absolute -top-8 -left-8 w-20 h-20 bg-defense/0 group-hover:bg-defense/8 blur-[50px] transition-all duration-700 rounded-full" />

        {/* Icon */}
        <div className="relative z-10 text-defense group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">{label}</span>
            <span className="text-white font-rajdhani font-bold text-lg">{value}</span>
        </div>

        <ExternalLink size={16} className="relative z-10 ml-auto text-gray-600 group-hover:text-defense opacity-0 group-hover:opacity-100 transition-all" />

        {/* Bottom Red Line Sweep */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-defense w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

        {/* Left Vertical Accent */}
        <div className="absolute top-0 left-0 w-[2px] bg-defense/50 h-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out delay-100" />
    </a>
);
