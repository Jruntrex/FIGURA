import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    desc: string;
    index: number;
}

export const ServiceCard = ({ icon: Icon, title, desc, index }: ServiceCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="relative group p-8 bg-carbon border border-defense/10 hover:border-defense/40 transition-all duration-500 overflow-hidden"
    >
        {/* Red Scanline Overlay */}
        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity pointer-events-none bg-grid-pattern bg-[length:20px_20px]" />

        {/* Top-Right Corner Accent — always red */}
        <div className="absolute top-0 right-0 w-8 h-8 opacity-30 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-0 right-0 w-[1px] h-4 bg-defense" />
            <div className="absolute top-0 right-0 w-4 h-[1px] bg-defense" />
        </div>

        {/* Top-Left Corner Accent */}
        <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-60 transition-opacity">
            <div className="absolute top-0 left-0 w-[1px] h-3 bg-defense" />
            <div className="absolute top-0 left-0 w-3 h-[1px] bg-defense" />
        </div>

        {/* Bottom-Left Corner Accent */}
        <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-40 transition-opacity">
            <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-defense" />
            <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-defense" />
        </div>

        {/* Red Glow on Hover */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-defense/0 group-hover:bg-defense/8 blur-[80px] transition-all duration-700 rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-defense/0 group-hover:bg-defense/5 blur-[50px] transition-all duration-700 rounded-full" />

        <div className="relative z-10 flex flex-col gap-6">
            {/* Icon Box — red-bordered on hover */}
            <div className="w-14 h-14 flex items-center justify-center bg-defense/5 border border-defense/15 text-defense group-hover:bg-defense/10 group-hover:border-defense/40 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] transition-all duration-500">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <div className="space-y-3">
                <h4 className="text-xl font-bold font-rajdhani uppercase tracking-[0.15em] text-white/90 group-hover:text-white transition-colors leading-tight">
                    {title}
                </h4>
                {/* Red accent divider */}
                <div className="h-[2px] w-10 bg-defense/40 group-hover:w-20 group-hover:bg-defense/70 transition-all duration-500" />
                <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide group-hover:text-gray-300 transition-colors">
                    {desc}
                </p>
            </div>
        </div>

        {/* Bottom Red Line Sweep */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-defense w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

        {/* Left Red Vertical Accent */}
        <div className="absolute top-0 left-0 w-[2px] bg-defense/50 h-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out delay-100" />
    </motion.div>
);
