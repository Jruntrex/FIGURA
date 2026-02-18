import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RELIABILITY_FEATURES } from '@/app/data/landing-content';

export const ReliabilitySection = () => {
    return (
        <section className="relative w-full py-24 bg-carbon">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <SectionHeader title="Безперебійне Виробництво" />

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {RELIABILITY_FEATURES.map((item, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 hover:border-defense-glow/30 transition-colors group">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-defense mb-6 group-hover:scale-110 transition-transform">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full bg-[#120202] border border-defense-glow/30 flex flex-col md:flex-row items-stretch relative overflow-hidden group min-h-[100px]">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,0,0.03)_10px,rgba(255,0,0,0.03)_20px)]" />
                    <div className="w-full md:w-auto bg-[#1F0505] border-b md:border-b-0 md:border-r border-defense-glow/30 flex flex-col justify-center px-8 py-6 relative shrink-0">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-defense" />
                        <span className="text-defense font-mono font-bold text-xs tracking-[0.2em] leading-relaxed block">
                            LIABILITY<br />FORMULA
                        </span>
                        <div className="w-12 h-[1px] bg-defense-glow/50 mt-3" />
                    </div>
                    <div className="flex-1 flex items-center overflow-hidden py-6 px-6 md:px-12 relative">
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#120202] to-transparent z-10 pointer-events-none md:hidden" />
                        <div className="w-full overflow-x-auto md:overflow-visible no-scrollbar">
                            <p className="font-rajdhani font-medium text-white text-sm md:text-base lg:text-lg tracking-wide whitespace-nowrap text-center">
                                Енергонезалежність + Резервні Принтери + Прогнозоване Обслуговування
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
