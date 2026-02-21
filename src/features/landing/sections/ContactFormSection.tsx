import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
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
        'w-full bg-neutral-950/70 border border-white/10 px-5 py-3.5 text-white font-normal text-base ' +
        'placeholder:text-gray-500 focus:border-defense focus:outline-none transition-all duration-500 ' +
        'font-mono backdrop-blur-md relative z-10';

    const labelClasses = "block text-defense/80 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-2 ml-1 group-focus-within:text-defense transition-colors duration-500 font-bold";

    return (
        <section className="relative w-full bg-black overflow-hidden py-20 lg:py-32">
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Form Frame (Centered) */}
                    <div className="relative w-full bg-neutral-900/40 backdrop-blur-3xl border border-white/5 p-6 sm:p-10 md:p-14 shadow-[0_60px_200px_-40px_rgba(0,0,0,0.8)] group/form">

                        {/* Animated Inner Border Glow */}
                        <AnimatePresence>
                            {activeField && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 border border-defense/20 pointer-events-none shadow-[inset_0_0_60px_rgba(255,0,0,0.08)] z-0"
                                />
                            )}
                        </AnimatePresence>

                        {/* Corner HUD Markers (Enhanced) */}
                        <div className="absolute -top-[2px] -left-[2px] w-20 h-20 border-t-4 border-l-4 border-defense z-20 group-hover/form:w-24 group-hover/form:h-24 transition-all duration-700 ease-out" />
                        <div className="absolute -bottom-[2px] -right-[2px] w-20 h-20 border-b-4 border-r-4 border-defense z-20 group-hover/form:w-24 group-hover/form:h-24 transition-all duration-700 ease-out" />

                        {/* Tactical Decorations */}
                        <div className="absolute top-0 right-12 -translate-y-full py-4 flex items-center gap-4 opacity-70 group-hover/form:opacity-100 transition-all">
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 border border-defense" />
                                ))}
                            </div>
                            <span className="text-[9px] font-mono uppercase tracking-[0.6em] font-bold">READY_TO_XMIT</span>
                            <div className="w-2 h-2 bg-defense rounded-full animate-pulse shadow-[0_0_10px_#FF0000]" />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                                <div className="group/field relative">
                                    <label className={labelClasses}>{t.hud.clientId}</label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-defense/5 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                        <User size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/5 group-focus-within/field:text-defense transition-colors" />
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
                                        {/* Tactical Brackets */}
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-defense/0 group-focus-within/field:border-defense/60 transition-all duration-500" />
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-defense/0 group-focus-within/field:border-defense/60 transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="group/field relative">
                                    <label className={labelClasses}>{t.hud.networkNode}</label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-defense/5 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                        <Mail size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/5 group-focus-within/field:text-defense transition-colors" />
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
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-defense/0 group-focus-within/field:border-defense/60 transition-all duration-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
                                <div className="group/field relative">
                                    <label className={labelClasses}>{t.hud.commsLink}</label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-defense/5 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                        <Phone size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/5 group-focus-within/field:text-defense transition-colors" />
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
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-defense/0 group-focus-within/field:border-defense/60 transition-all duration-500" />
                                    </div>
                                </div>
                                <div className="group/field relative">
                                    <label className={labelClasses}>{t.hud.objective}</label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-defense/5 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                        <FileText size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/5 group-focus-within/field:text-defense transition-colors" />
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
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-defense/0 group-focus-within/field:border-defense/60 transition-all duration-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="group/field relative">
                                <label className={labelClasses}>{t.hud.payload}</label>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-defense/5 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-500" />
                                    <MessageSquare size={18} className="absolute right-6 top-8 text-white/5 group-focus-within/field:text-defense transition-colors" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onFocus={() => setActiveField('message')}
                                        onBlur={() => setActiveField(null)}
                                        onChange={handleChange}
                                        placeholder={t.form.message.toUpperCase()}
                                        required
                                        rows={6}
                                        className={`${inputClasses} resize-none`}
                                    />
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-defense/0 group-focus-within/field:border-defense/60 transition-all duration-500" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-10 sm:pt-12">
                                <div className="flex flex-col gap-4 hidden sm:flex">
                                    <div className="flex gap-2.5">
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={status === 'sending' ? { opacity: [0.2, 1, 0.2] } : {}}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                                className={`w-2 h-5 ${status === 'sending' ? 'bg-defense shadow-[0_0_10px_#FF0000]' : 'bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="items-center gap-3 hidden sm:flex">
                                        <div className="w-2.5 h-2.5 bg-defense/40 rounded-full" />
                                        <span className="text-[11px] font-mono text-gray-700 tracking-[0.5em] uppercase font-black">{t.hud.statusReady}</span>
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success'}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                            relative w-full md:w-auto px-12 py-5 font-rajdhani font-black text-sm sm:text-base uppercase tracking-[0.3em]
                                            transition-all duration-700 overflow-hidden group/btn
                                            ${status === 'success' ? 'bg-white text-black' : 'bg-defense text-white'}
                                            shadow-[0_0_40px_rgba(255,0,0,0.2)] hover:shadow-[0_0_70px_rgba(255,0,0,0.5)]
                                        `}
                                >
                                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />

                                    <span className="relative z-10 flex items-center justify-center gap-5">
                                        {status === 'idle' && (
                                            <>
                                                <Send size={20} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                                                {t.form.submit}
                                            </>
                                        )}
                                        {status === 'sending' && (
                                            <>
                                                <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                                                {t.form.sending}
                                            </>
                                        )}
                                        {status === 'success' && (
                                            <>
                                                <CheckCircle2 size={22} className="text-defense" />
                                                <span className="text-black font-black">{t.form.success}</span>
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </div>
                        </form>

                        {/* Status Tags (Cyber-HUD) */}
                        <div className="absolute -bottom-16 left-0 right-0 flex justify-between px-8 font-mono text-[11px] text-white/60 tracking-[0.5em] uppercase font-bold">
                            <span className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-defense rounded-full animate-pulse shadow-[0_0_10px_#FF0000]" />
                                {t.hud.encryptedV2}
                            </span>
                            <span className="flex items-center gap-3">
                                {t.hud.responseTime}
                                <span className="w-2 h-2 bg-defense rounded-full animate-pulse shadow-[0_0_10px_#FF0000]" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
