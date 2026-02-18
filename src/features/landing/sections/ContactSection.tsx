import { motion } from 'framer-motion';
import { TechDivider } from '@/components/visuals/TechDivider';
import { GridBackground } from '@/components/visuals/GridBackground';
import { StepCard } from '@/features/landing/components/StepCard';
import { CONTACT_STEPS } from '@/app/data/landing-content';

export const ContactSection = () => {
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
                        <span className="text-defense font-mono text-sm tracking-[0.3em] uppercase">Ready To Launch</span>
                        <div className="h-[2px] w-16 bg-defense" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold font-rajdhani uppercase leading-[0.9] mb-8 text-white">
                        Надішліть нам STL <br />
                        <span className="bg-defense text-white px-3 py-1 inline-block transform -skew-x-6 my-2">ми порахуємо</span> <br />
                        строки і вартість.
                    </h2>
                </motion.div>

                {/* Steps Visual */}
                <div className="grid md:grid-cols-3 gap-16 lg:gap-32 mb-40 relative">
                    <div className="hidden md:block absolute top-8 left-8 right-8 h-[2px] bg-white/10 z-0 rounded-full overflow-hidden">
                        <div className="h-full w-[20%] bg-gradient-to-r from-defense via-defense to-transparent shadow-[0_0_20px_var(--color-defense)]" />
                    </div>

                    {CONTACT_STEPS.map((step) => (
                        <StepCard
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            desc={step.desc}
                            isActive={step.isActive}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
