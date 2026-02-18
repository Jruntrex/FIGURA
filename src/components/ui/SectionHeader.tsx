import { cn } from '@/app/utils/cn';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => (
    <div className={cn("mb-16 border-l-2 border-defense pl-6 py-2 relative overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-r from-defense-dim to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
        {subtitle && (
            <div className="text-defense font-mono text-sm tracking-widest uppercase mb-2">
                {subtitle}
            </div>
        )}
        <h2 className="text-4xl md:text-5xl font-bold font-rajdhani uppercase leading-tight text-white relative z-10">
            {title}
        </h2>
    </div>
);
