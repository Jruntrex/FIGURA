import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RELIABILITY_FEATURES } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const ReliabilitySection = () => {
    const { lang } = useLang();
    const t = translations[lang].reliability;
    const features = RELIABILITY_FEATURES.map((f, i) => ({
        ...f,
        title: t.features[i].title,
        desc: t.features[i].desc,
    }));
    return (
        <section className="relative w-full py-24 bg-carbon">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <SectionHeader title={t.title} />

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {features.map((item, i) => (
                        <div key={i} className="relative p-8 bg-carbon border border-defense/10 hover:border-defense/40 transition-all duration-500 group overflow-hidden">
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                <div className="absolute top-0 right-0 w-[1px] h-3 bg-defense" />
                                <div className="absolute top-0 right-0 w-3 h-[1px] bg-defense" />
                            </div>

                            {/* Red Glow */}
                            <div className="absolute -top-12 -left-12 w-32 h-32 bg-defense/0 group-hover:bg-defense/8 blur-[60px] transition-all duration-700 rounded-full" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-defense/5 border border-defense/15 flex items-center justify-center text-defense mb-6 group-hover:bg-defense/10 group-hover:border-defense/40 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.15)] transition-all duration-500">
                                    <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white/90 uppercase mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                <div className="h-[1px] w-8 bg-defense/30 group-hover:w-14 group-hover:bg-defense/60 transition-all duration-500 mb-2" />
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                            </div>

                            {/* Bottom Red Line Sweep */}
                            <div className="absolute bottom-0 left-0 h-[2px] bg-defense w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                            {/* Left Vertical Accent */}
                            <div className="absolute top-0 left-0 w-[2px] bg-defense/50 h-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out delay-100" />
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
                                {t.formula}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
