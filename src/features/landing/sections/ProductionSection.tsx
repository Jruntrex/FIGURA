import { motion } from 'framer-motion';
import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureBlock } from '@/features/landing/components/FeatureBlock';
import { PRODUCTION_FEATURES, SERVICE_ITEMS } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';
import { ServiceCard } from '@/features/landing/components/ServiceCard';

const printer1 = "/assets/printer-1.png";
const printer2 = "/assets/printer-2.png";

export const ProductionSection = () => {
    const { lang } = useLang();
    const t = translations[lang].production;
    const features = PRODUCTION_FEATURES.map((f, i) => ({
        ...f,
        title: t.features[i].title,
        desc: t.features[i].desc,
    }));

    const services = SERVICE_ITEMS.map((s, i) => ({
        ...s,
        title: t.services[i].title,
        desc: t.services[i].desc,
    }));

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center py-24 bg-carbon-light">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:pl-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
                    <div className="space-y-10 lg:space-y-12">
                        <SectionHeader
                            subtitle={t.subtitle}
                            title={t.title}
                        />

                        <div className="grid gap-5 lg:gap-6">
                            {features.map((feature, index) => (
                                <FeatureBlock
                                    key={feature.title}
                                    icon={feature.icon}
                                    title={feature.title}
                                    desc={feature.desc}
                                    delay={0.1 * (index + 1)}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] sm:h-[500px] lg:h-[650px] w-full"
                    >
                        <div className="absolute inset-0 border border-white/10 p-2">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-defense -translate-x-1 -translate-y-1" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-defense translate-x-1 translate-y-1" />
                            <div className="w-full h-full flex flex-col gap-2 relative overflow-hidden">
                                <div className="w-full h-[calc(50%-4px)] relative flex items-center justify-center p-6 bg-[#101828]">
                                    <img
                                        src={printer1}
                                        alt="Production Printer 1"
                                        className="w-full h-full object-contain relative z-10 scale-115 sm:scale-135"
                                    />
                                    <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-20" />
                                </div>
                                <div className="w-full h-[calc(50%-4px)] relative flex items-center justify-center p-6 bg-[#101828]">
                                    <img
                                        src={printer2}
                                        alt="Production Printer 2"
                                        className="w-full h-full object-contain relative z-10 scale-90 sm:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-20" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Services Subsection */}
                <div className="space-y-10 lg:space-y-12 relative">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-8 lg:w-16 bg-defense" />
                        <h3 className="text-xl lg:text-2xl font-bold font-rajdhani uppercase tracking-[0.2em] text-white">
                            <span className="text-defense">//</span> {t.servicesTitle}
                        </h3>
                        <div className="h-[1px] flex-grow bg-defense/10" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                desc={service.desc}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


