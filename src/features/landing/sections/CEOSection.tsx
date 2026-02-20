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
    const opacityHero = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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

            <div className="max-w-7xl mx-auto px-8 lg:pl-32 relative z-10">
                <motion.div
                    style={{ opacity: opacityHero }}
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-0 items-stretch bg-neutral-900/40 backdrop-blur-xl border border-white/10 relative overflow-hidden shadow-2xl"
                >
                    {/* Corner HUD Markers */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-defense z-20" />
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-defense z-20" />

                    {/* Top Right Status Bar */}
                    <div className="absolute top-0 right-0 p-4 hidden md:flex items-center gap-6 font-mono text-[10px] text-defense/40 tracking-[0.2em] z-20">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            {t.hud.sysActive}
                        </span>
                        <span>{t.hud.encLvl}</span>
                        <span>{t.hud.node}</span>
                    </div>

                    {/* Left: Content Area (Dark Glass) */}
                    <div className="p-8 lg:p-16 flex flex-col justify-center border-r border-white/5 order-2 lg:order-1 relative">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-defense/5 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="inline-block px-3 py-1 bg-defense text-white font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-6 transform -skew-x-12">
                                    {CEO_DATA.title}
                                </span>
                                <h2 className="text-6xl md:text-8xl font-bold font-rajdhani text-white mb-2 uppercase leading-[0.9] tracking-tighter">
                                    {CEO_DATA.name.split(' ').map((part, i) => (
                                        <span key={i} className={i === 1 ? "text-defense block" : "block"}>{part}</span>
                                    ))}
                                </h2>
                                <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.4em] mb-10 border-l border-defense/30 pl-4 mt-4">
                                    {CEO_DATA.division}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-8"
                            >
                                <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg italic border-r border-defense/20 pr-8">
                                    "{t.bio}"
                                </p>

                                <div className="flex flex-wrap items-center gap-8 py-6 border-y border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-40" />
                                            <div className="relative w-3 h-3 bg-green-500 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-green-500 font-mono text-[10px] font-bold tracking-widest leading-none">{t.status}</span>
                                            <span className="text-gray-600 font-mono text-[9px] mt-1 uppercase">{t.hud.directLine}</span>
                                        </div>
                                    </div>
                                    <div className="h-8 w-[1px] bg-white/10" />
                                    <div className="flex flex-col">
                                        <span className="text-gray-400 font-mono text-[10px] uppercase tracking-wider">{t.responseTime}</span>
                                        <span className="text-defense font-mono text-[9px] font-bold uppercase mt-1 tracking-widest">{t.hud.priorityMode}</span>
                                    </div>
                                </div>

                                {/* Contact Stack */}
                                <div className="grid gap-3 pt-4">
                                    <span className="text-defense/60 font-mono text-[9px] tracking-[0.5em] font-bold uppercase mb-2 block">
                                        {t.contactLabel}
                                    </span>
                                    <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
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
                    <div className="relative overflow-hidden min-h-[500px] lg:min-h-full order-1 lg:order-2 bg-neutral-950">
                        {/* Dynamic Scan Line */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[1px] bg-defense/40 shadow-[0_0_15px_rgba(255,0,0,0.5)] z-20 pointer-events-none"
                        />

                        {/* HUD Graphics Overlay */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
                            <div className="absolute top-1/4 left-8 text-defense font-mono text-[8px] space-y-1">
                                <p>{t.hud.coord}</p>
                                <p>{t.hud.scale}</p>
                                <p>{t.hud.ref}</p>
                            </div>
                            <div className="absolute bottom-1/4 right-8 text-defense font-mono text-[8px] space-y-1 text-right">
                                <p>{t.hud.bioSig}</p>
                                <p>{t.hud.statusVerified}</p>
                                <p>{t.hud.hash}</p>
                            </div>
                        </div>

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
                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 px-4 font-mono text-[9px] text-gray-500 tracking-[0.3em] uppercase">
                    <div className="flex gap-12">
                        <span>// FIGURA_MANUFACTURING</span>
                        <span className="hidden sm:inline">{t.hud.prodFlow}</span>
                    </div>
                    <span>{t.hud.loc}</span>
                </div>
            </div>
        </section>
    );
};
