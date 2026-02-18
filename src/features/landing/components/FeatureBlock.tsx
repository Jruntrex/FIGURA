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
        className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-defense-glow/50 hover:bg-black/80 transition-all group"
    >
        <div className="p-3 bg-white/5 rounded-sm text-defense group-hover:bg-defense group-hover:text-white transition-colors">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-xl font-bold font-rajdhani uppercase tracking-wide mb-2 text-white group-hover:text-defense transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);
