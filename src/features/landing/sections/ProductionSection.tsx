import { motion } from 'framer-motion';
import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureBlock } from '@/features/landing/components/FeatureBlock';
import { PRODUCTION_FEATURES } from '@/app/data/landing-content';

const bambuPrinterImg = "/assets/printer.png";

export const ProductionSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center py-24 bg-carbon-light">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                    <SectionHeader
                        subtitle="Core Infrastructure"
                        title="Виробнича Платформа"
                    />

                    <div className="grid gap-6">
                        {PRODUCTION_FEATURES.map((feature, index) => (
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
                    className="relative h-[600px] w-full"
                >
                    <div className="absolute inset-0 border border-white/10 p-2">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-defense -translate-x-1 -translate-y-1" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-defense translate-x-1 translate-y-1" />
                        <div className="w-full h-full overflow-hidden bg-gray-900 relative flex items-center justify-center p-8">
                            <img
                                src={bambuPrinterImg}
                                alt="Bambu Lab P2S Printer"
                                className="w-full h-full object-contain relative z-10"
                            />
                            <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-20" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
