import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, FileText, MessageSquare, ShieldCheck, Zap, Globe } from 'lucide-react';
import { GridBackground } from '@/components/visuals/GridBackground';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const ContactFormSection = () => {
    const { lang } = useLang();
    const t = translations[lang].contactPage;

    const [status, setStatus] = useState<FormStatus>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [activeField, setActiveField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus('success');
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 4000);
    };

    const inputClasses =
        'w-full bg-neutral-950/50 border border-white/5 px-6 py-5 text-white font-light text-lg ' +
        'placeholder:text-gray-700 focus:border-defense focus:outline-none transition-all duration-500 ' +
        'font-sans backdrop-blur-sm relative z-10';

    const labelClasses = "block text-defense/40 font-mono text-[9px] tracking-[0.4em] uppercase mb-3 ml-1 group-focus-within:text-defense transition-colors duration-500";

    return (
        <section className="relative w-full bg-black overflow-hidden py-32">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-defense-dim/15 via-black to-black opacity-60 pointer-events-none" />
            <GridBackground />

            {/* Floating Glass Particles (Visual Decor) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-defense/5 blur-[120px] rounded-full"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-20">

                    {/* Left Side: Strategic Info */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-[1px] bg-defense" />
                                <span className="text-defense font-mono text-[10px] tracking-[0.5em] uppercase">{t.hud.inquiryProtocol}</span>
                            </div>
                            <h3 className="text-5xl md:text-6xl font-bold font-rajdhani uppercase text-white leading-none mb-8 tracking-tighter">
                                {t.hud.startMission.split('.').map((part, i) => (
                                    <span key={i} className={i === 1 ? "text-defense block" : "block"}>{part}</span>
                                ))}
                            </h3>
                            <p className="text-gray-400 font-light text-lg leading-relaxed max-w-sm border-l border-white/10 pl-6">
                                {t.subtitle}
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {[
                                { icon: ShieldCheck, title: t.hud.secureChannel, desc: t.hud.encrypted },
                                { icon: Zap, title: t.hud.speedResponse, desc: t.hud.triage },
                                { icon: Globe, title: t.hud.globalSync, desc: t.hud.intOps }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-defense group-hover:bg-defense group-hover:text-white transition-all duration-500">
                                        <item.icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-rajdhani font-bold text-sm uppercase tracking-wider">{item.title}</span>
                                        <span className="text-gray-600 font-mono text-[9px] uppercase tracking-widest">{item.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: High-Tech Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Form Frame */}
                        <div className="relative bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">

                            {/* Animated Inner Border Glow */}
                            <AnimatePresence>
                                {activeField && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 border border-defense/30 pointer-events-none shadow-[inset_0_0_30px_rgba(255,0,0,0.05)] z-0"
                                    />
                                )}
                            </AnimatePresence>

                            {/* Corner HUD Markers */}
                            <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t border-l border-defense z-20" />
                            <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b border-r border-defense z-20" />

                            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="group">
                                        <label className={labelClasses}>{t.hud.clientId}</label>
                                        <div className="relative">
                                            <User size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-defense transition-colors" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onFocus={() => setActiveField('name')}
                                                onBlur={() => setActiveField(null)}
                                                onChange={handleChange}
                                                placeholder={t.form.name.toUpperCase()}
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className={labelClasses}>{t.hud.networkNode}</label>
                                        <div className="relative">
                                            <Mail size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-defense transition-colors" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onFocus={() => setActiveField('email')}
                                                onBlur={() => setActiveField(null)}
                                                onChange={handleChange}
                                                placeholder={t.form.email.toUpperCase()}
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="group">
                                        <label className={labelClasses}>{t.hud.commsLink}</label>
                                        <div className="relative">
                                            <Phone size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-defense transition-colors" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onFocus={() => setActiveField('phone')}
                                                onBlur={() => setActiveField(null)}
                                                onChange={handleChange}
                                                placeholder={t.form.phone.toUpperCase()}
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className={labelClasses}>{t.hud.objective}</label>
                                        <div className="relative">
                                            <FileText size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-defense transition-colors" />
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onFocus={() => setActiveField('subject')}
                                                onBlur={() => setActiveField(null)}
                                                onChange={handleChange}
                                                placeholder={t.form.subject.toUpperCase()}
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className={labelClasses}>{t.hud.payload}</label>
                                    <div className="relative">
                                        <MessageSquare size={16} className="absolute right-4 top-6 text-white/10 group-focus-within:text-defense transition-colors" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onFocus={() => setActiveField('message')}
                                            onBlur={() => setActiveField(null)}
                                            onChange={handleChange}
                                            placeholder={t.form.message.toUpperCase()}
                                            required
                                            rows={5}
                                            className={`${inputClasses} resize-none`}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                                    <div className="flex flex-col gap-1 hidden md:flex">
                                        <div className="flex gap-2">
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className={`w-1 h-3 ${status === 'sending' ? 'bg-defense animate-pulse' : 'bg-white/10'}`} style={{ animationDelay: `${i * 0.1}s` }} />
                                            ))}
                                        </div>
                                        <span className="text-[8px] font-mono text-gray-700 tracking-[0.3em] uppercase">{t.hud.statusReady}</span>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === 'sending' || status === 'success'}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            relative w-full md:w-auto px-16 py-6 font-rajdhani font-black text-xl uppercase tracking-[0.2em]
                                            transition-all duration-500 overflow-hidden group/btn
                                            ${status === 'success' ? 'bg-green-600' : 'bg-defense'}
                                            text-white shadow-[0_0_30px_rgba(255,0,0,0.2)] hover:shadow-[0_0_50px_rgba(255,0,0,0.4)]
                                        `}
                                    >
                                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

                                        <span className="relative z-10 flex items-center justify-center gap-4">
                                            {status === 'idle' && (
                                                <>
                                                    <Send size={20} />
                                                    {t.form.submit}
                                                </>
                                            )}
                                            {status === 'sending' && (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    {t.form.sending}
                                                </>
                                            )}
                                            {status === 'success' && (
                                                <>
                                                    <CheckCircle2 size={20} />
                                                    {t.form.success}
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                        {/* Visual Decorative Bar at bottom */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-defense/30 to-transparent" />

                        {/* Status Tags */}
                        <div className="absolute -bottom-12 left-0 right-0 flex justify-between px-4 font-mono text-[9px] text-gray-700 tracking-[0.3em] uppercase">
                            <span>{t.hud.encryptedV2}</span>
                            <span>{t.hud.responseTime}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
