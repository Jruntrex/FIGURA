import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CEOSection } from '@/features/landing/sections/CEOSection';
import { ContactFormSection } from '@/features/landing/sections/ContactFormSection';
import { GlobalProgressSpine } from '@/features/landing/components/GlobalProgressSpine';
import { GridBackground } from '@/components/visuals/GridBackground';
import { CyberDrone } from '@/features/landing/components/CyberDrone';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

const ContactHero = () => {
    const { lang } = useLang();
    const t = translations[lang].contactPage;
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={containerRef} className="relative w-full pt-48 pb-32 bg-black overflow-hidden flex flex-col justify-center min-h-[85vh]">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-defense-dim/15 via-black to-black opacity-60 pointer-events-none" />
            <GridBackground />

            {/* Kinetic Background Text */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none">
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-20%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap text-[30rem] font-black font-rajdhani uppercase leading-none"
                    style={{ WebkitTextStroke: "2px white" }}
                >
                    {t.hud.heroDecorText}{t.hud.heroDecorText}
                </motion.div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid lg:grid-cols-2 items-center">
                <motion.div
                    style={{ y }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="lg:pl-32"
                >
                    {/* Tagline HUD style */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex items-center gap-6 mb-12"
                    >
                        <div className="h-[2px] w-24 bg-defense shadow-[0_0_15px_#FF0000]" />
                        <span className="text-defense font-mono text-base tracking-[0.6em] uppercase font-black">{t.tagline}</span>
                    </motion.div>

                    {/* Title with staggered reveal */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-6xl md:text-[8.5rem] font-bold font-rajdhani uppercase leading-[0.85] text-white tracking-tighter flex flex-wrap items-baseline gap-x-6 mb-8"
                    >
                        <span>{t.title}</span>
                        <motion.span
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-defense text-white px-8 py-3 inline-block transform -skew-x-12 text-4xl md:text-7xl font-black uppercase shadow-[0_0_35px_rgba(255,0,0,0.5)]"
                        >
                            {t.titleHighlight}
                        </motion.span>
                    </motion.h1>
                </motion.div>

                {/* Hero Drone Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    className="hidden lg:block relative h-[600px] w-full"
                >
                    <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
                        <ambientLight intensity={1.5} />
                        <pointLight position={[10, 10, 10]} intensity={3} color="#FF0000" />
                        <group position={[0, 0, 0]}>
                            <CyberDrone showHUDLines={true} speed={1.2} />
                        </group>
                    </Canvas>

                    {/* Decorative HUD near drone */}
                    <div className="absolute top-1/4 right-0 border-l border-defense/40 pl-4 py-2 pointer-events-none">
                        <div className="text-[10px] font-mono text-defense mb-1">UNIT_X_66</div>
                        <div className="text-[14px] font-rajdhani font-black text-white uppercase mb-2 tracking-tighter">FIGURA_DEFENSE_MANUFACTURING</div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-defense shadow-[0_0_5px_#FF0000]" />
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-1/4 left-10 border-r border-defense/40 pr-4 py-2 text-right pointer-events-none">
                        <div className="text-[10px] font-mono text-defense mb-1">SCAN_MODE</div>
                        <div className="text-[12px] font-mono text-white/60">ESTIMATING_PAYLOAD...</div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom transition gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-defense selection:text-white">
            <Helmet>
                <title>FIGURA | Contact Us</title>
                <meta name="description" content="Зв'яжіться з FIGURA Defense Manufacturing. Розрахунок вартості та запуск виробництва." />
                <meta name="theme-color" content="#FF0000" />
            </Helmet>

            <Navbar />
            <GlobalProgressSpine />

            <main>
                <ContactHero />
                <ContactFormSection />
                <CEOSection />
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
