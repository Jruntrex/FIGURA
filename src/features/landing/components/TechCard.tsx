import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/app/utils/cn';

interface TechCardProps {
    title: string;
    subtitle?: string;
    type?: 'hero' | 'wide' | 'standard';
    className?: string;
    icon?: LucideIcon;
}

const HazardStripes = ({ className = "" }: { className?: string }) => (
    <div className={cn("absolute inset-0 pointer-events-none", className)}
        style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 5px, var(--color-defense) 5px, var(--color-defense) 10px)'
        }}
    />
);

const CornerBrackets = () => (
    <>
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-defense" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-defense" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-defense" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-defense" />
    </>
);

export const TechCard = ({
    title,
    subtitle,
    type = 'standard',
    className = '',
    icon: Icon
}: TechCardProps) => {
    const isHero = type === 'hero';

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={cn(
                "relative bg-card-bg border border-defense-glow/40 overflow-hidden group flex flex-col",
                className
            )}
        >
            {/* Background Tech Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Hero Style (PETG) */}
            {isHero && (
                <>
                    <HazardStripes className="opacity-10" />
                    <div className="absolute inset-4 border border-defense-glow/60 pointer-events-none">
                        <CornerBrackets />
                    </div>
                </>
            )}

            {/* Content Container */}
            <div className={cn(
                "relative z-10 flex flex-col",
                isHero ? 'h-full items-center justify-center py-12' : 'p-6 h-full justify-between'
            )}>

                {/* Icon */}
                {Icon && (
                    <div className={cn(
                        isHero ? 'mb-6 text-defense' : 'mb-4 text-gray-500 group-hover:text-defense transition-colors'
                    )}>
                        <Icon size={isHero ? 64 : 24} />
                    </div>
                )}

                {/* Text */}
                <div className={isHero ? 'text-center' : 'text-left'}>
                    <h3 className={cn(
                        "font-bold font-rajdhani uppercase",
                        isHero ? 'text-6xl text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]' : 'text-2xl text-gray-200 group-hover:text-white'
                    )}>
                        {title}
                    </h3>
                    {subtitle && (
                        <p className={cn(
                            "font-mono text-xs uppercase mt-2",
                            isHero ? 'text-defense bg-black/50 px-2 py-1 inline-block border border-defense-glow' : 'text-gray-600 group-hover:text-defense'
                        )}>
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Standard/Wide Decorations */}
                {!isHero && (
                    <>
                        <div className="absolute top-0 right-0 p-2">
                            <CornerBrackets />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-defense-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </>
                )}
            </div>
        </motion.div>
    );
};
