import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { QUALITY_PROTOCOLS } from '@/app/data/landing-content';

export const QualitySection = () => {
    return (
        <section className="relative w-full py-24 bg-carbon-light">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="mb-20">
                    <SectionHeader
                        subtitle="QC Protocols"
                        title="Контроль якості на кожному етапі"
                    />
                </div>
                <div className="grid gap-6">
                    {QUALITY_PROTOCOLS.map((protocol) => (
                        <div key={protocol.title} className="flex flex-col relative group">
                            <div className="relative z-10 border-l border-white/10 pl-6 pb-12 group-hover:border-defense transition-colors duration-500">
                                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-defense rounded-full shadow-[0_0_10px_var(--color-defense)] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="mb-4 text-defense"><protocol.icon size={32} /></div>
                                <h3 className="text-xl font-bold text-white uppercase mb-2">{protocol.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{protocol.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
