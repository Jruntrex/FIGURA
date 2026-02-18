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
        className="flex items-center gap-4 p-4 border border-white/10 hover:border-defense hover:bg-defense-dim/50 transition-all group"
    >
        <div className="text-defense group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1">{label}</span>
            <span className="text-white font-rajdhani font-bold text-lg">{value}</span>
        </div>
        <ExternalLink size={16} className="ml-auto text-gray-600 group-hover:text-defense opacity-0 group-hover:opacity-100 transition-all" />
    </a>
);
