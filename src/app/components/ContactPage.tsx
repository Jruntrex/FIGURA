import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CEOSection } from '@/features/landing/sections/CEOSection';
import { ContactFormSection } from '@/features/landing/sections/ContactFormSection';
import { GlobalProgressSpine } from '@/features/landing/components/GlobalProgressSpine';
import { GridBackground } from '@/components/visuals/GridBackground';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

const ContactHero = () => {
    const { lang } = useLang();
    const t = translations[lang].contactPage;

    return (
        <section className="relative w-full pt-48 pb-32 bg-black overflow-hidden flex flex-col justify-center min-h-[70vh]">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-defense-dim/20 via-black to-black opacity-60 pointer-events-none" />
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    {/* Tagline HUD style */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex items-center gap-6 mb-12"
                    >
                        <div className="h-[1px] w-24 bg-defense shadow-[0_0_10px_#FF0000]" />
                        <span className="text-defense font-mono text-sm tracking-[0.5em] uppercase font-bold">{t.tagline}</span>
                    </motion.div>

                    {/* Title with staggered reveal */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-7xl md:text-[9.5rem] font-bold font-rajdhani uppercase leading-[0.85] text-white tracking-tighter flex flex-wrap items-baseline gap-x-8"
                    >
                        <span>{t.title}</span>
                        <motion.span
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-defense text-white px-8 py-3 inline-block transform -skew-x-12 text-5xl md:text-8xl font-black uppercase shadow-[0_0_40px_rgba(255,0,0,0.3)]"
                        >
                            {t.titleHighlight}
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle with decorative border */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-20 max-w-2xl"
                    >
                        <p className="text-2xl text-gray-400 font-light leading-relaxed border-l-4 border-defense/40 pl-10 py-2">
                            {t.subtitle}
                        </p>
                    </motion.div>

                    {/* Bottom Status Feed (Decorative) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-24 flex items-center gap-8 font-mono text-[10px] text-gray-700 tracking-widest uppercase"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-defense animate-pulse" />
                            <span>{t.hud.sysOperational}</span>
                        </div>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <span>{t.hud.linkRedundant}</span>
                    </motion.div>
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
                <CEOSection />
                <ContactFormSection />
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
