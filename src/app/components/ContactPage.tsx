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
        <section className="relative w-full pt-32 pb-20 bg-black overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-defense-dim/20 via-black to-black opacity-50 pointer-events-none" />
            <GridBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Tagline */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-16 bg-defense" />
                        <span className="text-defense font-mono text-sm tracking-[0.3em] uppercase">{t.tagline}</span>
                        <div className="h-[2px] w-16 bg-defense" />
                    </div>

                    {/* Title */}
                    <h1 className="text-6xl md:text-8xl font-bold font-rajdhani uppercase leading-[0.85] mb-6 text-white">
                        {t.title}{' '}
                        <span className="bg-defense text-white px-4 py-1 inline-block transform -skew-x-6">
                            {t.titleHighlight}
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6 mt-8">
                        {t.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
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
