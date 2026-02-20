import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechDivider } from '@/components/visuals/TechDivider';
import { GridBackground } from '@/components/visuals/GridBackground';
import { StepCard } from '@/features/landing/components/StepCard';
import { CONTACT_STEPS } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const ContactSection = () => {
    const { lang } = useLang();
    const t = translations[lang].contact;
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const steps = CONTACT_STEPS.map((s, i) => ({
        ...s,
        title: t.steps[i].title,
        desc: t.steps[i].desc,
    }));

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24">
            <TechDivider />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,_var(--tw-gradient-stops))] from-defense-dim/20 via-black to-black opacity-50 pointer-events-none" />
            <GridBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32 flex-1 flex flex-col justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-40 max-w-4xl mx-auto text-center flex flex-col items-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[2px] w-16 bg-defense" />
                        <span className="text-defense font-mono text-sm tracking-[0.3em] uppercase">{t.tagline}</span>
                        <div className="h-[2px] w-16 bg-defense" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold font-rajdhani uppercase leading-[0.9] mb-8 text-white">
                        {t.title1} <br />
                        <span className="bg-defense text-white px-3 py-1 inline-block transform -skew-x-6 my-2">{t.title2}</span> <br />
                        {t.title3}
                    </h2>
                </motion.div>

                {/* Steps Visual */}
                <div className="grid md:grid-cols-3 gap-16 lg:gap-32 mb-40 relative">
                    <div className="hidden md:block absolute top-8 left-8 right-8 h-[2px] bg-white/5 z-0 rounded-full overflow-hidden">
                        {/* Background line */}
                        <div className="absolute inset-0 bg-white/10" />

                        {/* Active/Hover line */}
                        <motion.div
                            initial={{ width: '16%' }}
                            animate={{
                                width: hoveredIndex === 0 ? '16%' :
                                    hoveredIndex === 1 ? '50%' :
                                        hoveredIndex === 2 ? '100%' : '16%'
                            }}
                            className="h-full bg-gradient-to-r from-defense via-defense to-defense/50 shadow-[0_0_25px_rgba(255,0,0,1)] relative"
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff]" />
                        </motion.div>
                    </div>

                    {steps.map((step, index) => (
                        <StepCard
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            desc={step.desc}
                            isActive={hoveredIndex === index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(index === 0 ? 0 : hoveredIndex)} // Mantain hover if we want or reset to 0
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
