import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CEO_DATA } from '@/app/data/landing-content';
import { ContactItem } from '@/features/landing/components/ContactItem';
import { CONTACT_INFO } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const CEOSection = () => {
    const { lang } = useLang();
    const t = translations[lang].ceo;
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} className="relative w-full py-24 bg-black overflow-hidden">
            {/* Background Decorative Text - Scrolling */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-5">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap text-[20rem] font-black font-rajdhani uppercase tracking-tighter"
                >
                    {t.hud.scrollingText} {t.hud.scrollingText}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:pl-32 relative z-10">
                <motion.div
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-0 items-stretch bg-neutral-900/40 backdrop-blur-xl border border-white/10 relative overflow-hidden shadow-2xl"
                >
                    {/* Corner HUD Markers */}
                    <div className="absolute top-0 left-0 w-8 lg:w-12 h-8 lg:h-12 border-t-2 border-l-2 border-defense z-20" />
                    <div className="absolute bottom-0 right-0 w-8 lg:w-12 h-8 lg:h-12 border-b-2 border-r-2 border-defense z-20" />

                    {/* Left: Content Area (Dark Glass) */}
                    <div className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center border-r border-white/5 order-2 lg:order-1 relative">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-defense/5 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block px-3 py-1 bg-defense text-white font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6 transform -skew-x-12">
                                    {CEO_DATA.title}
                                </span>
                                <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold font-rajdhani text-white mb-2 uppercase leading-[0.9] tracking-tighter">
                                    {CEO_DATA.name.split(' ').map((part, i) => (
                                        <span key={i} className={i === 1 ? "text-defense block" : "block"}>{part}</span>
                                    ))}
                                </h2>
                                <p className="text-gray-400 font-mono text-[11px] sm:text-xs uppercase tracking-[0.4em] mb-8 sm:mb-10 border-l border-defense pl-4 mt-4 font-bold">
                                    {CEO_DATA.division}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-6 sm:space-y-8"
                            >
                                <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-lg italic border-r-0 lg:border-r border-defense/20 lg:pr-8 pr-0">
                                    "{t.bio}"
                                </p>

                                <div className="flex flex-wrap items-center gap-6 sm:gap-8 py-4 sm:py-6 border-y border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-40" />
                                            <div className="relative w-3 h-3 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-green-500 font-mono text-[11px] font-bold tracking-widest leading-none">{t.status}</span>
                                            <span className="text-gray-400 font-mono text-[10px] mt-1 uppercase font-bold">{t.hud.directLine}</span>
                                        </div>
                                    </div>
                                    <div className="h-8 w-[1px] bg-white/10" />
                                    <div className="flex flex-col">
                                        <span className="text-gray-300 font-mono text-[11px] uppercase tracking-wider font-bold">{t.responseTime}</span>
                                        <span className="text-defense font-mono text-[10px] font-bold uppercase mt-1 tracking-widest">{t.hud.priorityMode}</span>
                                    </div>
                                </div>

                                {/* Contact Stack */}
                                <div className="grid gap-3 pt-2 sm:pt-4">
                                    <span className="text-defense font-mono text-[11px] tracking-[0.5em] font-bold uppercase mb-2 block">
                                        {t.contactLabel}
                                    </span>
                                    <div className="flex flex-col gap-3 max-w-xl">
                                        {CONTACT_INFO.map((info, idx) => (
                                            <motion.div
                                                key={info.label}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + idx * 0.1 }}
                                            >
                                                <ContactItem
                                                    icon={info.icon}
                                                    label={info.label}
                                                    value={info.value}
                                                    href={info.href}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Image Container (High-Tech Frame) */}
                    <div className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-full order-1 lg:order-2 bg-neutral-950">
                        <motion.img
                            style={{ y: yParallax }}
                            src={CEO_DATA.image}
                            alt={CEO_DATA.name}
                            className="w-full h-[120%] object-cover object-[center_40%] grayscale-[30%] brightness-75 contrast-125 transition-all duration-700"
                        />

                        {/* Dramatic Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-defense/10 mix-blend-overlay" />

                        {/* Glitch Overlay (Subtle) */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    </div>
                </motion.div>

                {/* Bottom Stats Banner */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 px-4 font-mono text-[10px] text-gray-400 tracking-[0.3em] uppercase font-bold">
                    <div className="flex gap-12">
                        <span className="text-defense">// FIGURA_MANUFACTURING</span>
                        <span className="hidden sm:inline">{t.hud.prodFlow}</span>
                    </div>
                    <span>{t.hud.loc}</span>
                </div>
            </div>
        </section>
    );
};
