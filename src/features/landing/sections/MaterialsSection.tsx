import { PenTool } from 'lucide-react';
import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechCard } from '@/features/landing/components/TechCard';
import { MATERIALS } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const MaterialsSection = () => {
    const { lang } = useLang();
    const t = translations[lang].materials;
    return (
        <section className="relative w-full py-24 bg-carbon">
            <TechDivider />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 flex flex-col items-start gap-12">
                <div className="w-full">
                    <SectionHeader title={t.title} />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-gray-400 font-light max-w-xl">{t.description}</p>
                        <div className="flex items-center gap-3 text-sm font-mono text-defense uppercase border border-defense-glow/30 bg-defense-dim/50 px-4 py-2 rounded">
                            <PenTool size={16} />
                            <span className="font-bold tracking-wider">{t.customOrder}</span>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
                    {MATERIALS.map((material) => (
                        <TechCard
                            key={material.title}
                            title={material.title}
                            subtitle={material.subtitle}
                            icon={material.icon}
                            type={material.type as 'standard' | 'hero' | 'wide'}
                            className={material.className}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
