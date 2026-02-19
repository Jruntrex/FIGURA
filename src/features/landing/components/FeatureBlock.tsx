import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureBlockProps {
    icon: LucideIcon;
    title: string;
    desc: string;
    delay: number;
}

export const FeatureBlock = ({ icon: Icon, title, desc, delay }: FeatureBlockProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
        className="relative flex items-start gap-5 p-6 bg-carbon border border-defense/10 hover:border-defense/40 transition-all duration-500 group overflow-hidden"
    >
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-0 w-[1px] h-3 bg-defense" />
            <div className="absolute top-0 right-0 w-3 h-[1px] bg-defense" />
        </div>

        {/* Red Glow */}
        <div className="absolute -top-10 -left-10 w-28 h-28 bg-defense/0 group-hover:bg-defense/8 blur-[60px] transition-all duration-700 rounded-full" />

        {/* Icon */}
        <div className="relative z-10 p-3 bg-defense/5 border border-defense/15 text-defense group-hover:bg-defense/10 group-hover:border-defense/40 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.15)] transition-all duration-500 shrink-0">
            <Icon size={24} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <div className="relative z-10">
            <h3 className="text-xl font-bold font-rajdhani uppercase tracking-wide mb-2 text-white/90 group-hover:text-white transition-colors">{title}</h3>
            <div className="h-[1px] w-8 bg-defense/30 group-hover:w-14 group-hover:bg-defense/60 transition-all duration-500 mb-2" />
            <p className="text-gray-400 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
        </div>

        {/* Bottom Red Line Sweep */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-defense w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

        {/* Left Vertical Accent */}
        <div className="absolute top-0 left-0 w-[2px] bg-defense/50 h-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out delay-100" />
    </motion.div>
);
