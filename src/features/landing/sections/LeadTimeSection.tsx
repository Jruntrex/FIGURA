import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import { TechDivider } from '@/components/visuals/TechDivider';
import { LEAD_TIME_FEATURES } from '@/app/data/landing-content';

export const LeadTimeSection = () => {
    return (
        <section className="relative w-full py-24 bg-carbon-light overflow-hidden">
            <TechDivider />
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-defense-dim/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 flex flex-col items-center text-center">
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-3 text-defense font-mono mb-4">
                        <Timer className="animate-pulse" />
                        <span className="uppercase tracking-[0.2em]">Efficiency Protocol</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold font-rajdhani uppercase text-white mb-8">
                        Прозорий Lead Time
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full p-px bg-gradient-to-r from-transparent via-defense-glow to-transparent mb-12"
                >
                    <div className="bg-black/80 border border-white/10 p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl font-mono font-bold">
                            <span className="text-gray-400">Lead Time =</span>
                            <span className="text-white border-b-4 border-defense pb-1 font-bold tracking-wide shadow-[0_4px_10px_rgba(255,0,0,0.3)]">Час Друку Вашого STL</span>
                            <span className="text-defense">+</span>
                            <span className="text-white">1 година</span>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400 font-mono">
                            {LEAD_TIME_FEATURES.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <feature.icon size={16} className="text-defense" />
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
