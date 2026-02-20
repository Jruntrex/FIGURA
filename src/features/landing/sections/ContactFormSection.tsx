import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import { GridBackground } from '@/components/visuals/GridBackground';
import { TechDivider } from '@/components/visuals/TechDivider';
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 1800));
        setStatus('success');

        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 4000);
    };

    const inputClasses =
        'w-full bg-[#0a0a0a] border border-white/10 px-5 py-4 text-white font-light text-base ' +
        'placeholder:text-gray-600 focus:border-defense/60 focus:outline-none focus:shadow-[0_0_20px_rgba(255,0,0,0.08)] ' +
        'transition-all duration-500 font-sans';

    return (
        <section className="relative w-full bg-black overflow-hidden py-24">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-defense-dim/10 via-black to-black opacity-40 pointer-events-none" />
            <GridBackground />

            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">

                {/* Section sub-header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-defense/60" />
                        <span className="text-defense font-mono text-xs tracking-[0.3em] uppercase">// INQUIRY_FORM</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-rajdhani uppercase text-white">
                        {t.form.submit}
                    </h3>
                </motion.div>

                {/* Form Block — full width like CEO section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative"
                >
                    {/* Form Container with corner brackets */}
                    <div className="relative border border-white/5 bg-carbon-light/20 p-8 md:p-12 lg:p-16 overflow-hidden">

                        {/* Corner Brackets — Top Left */}
                        <div className="absolute top-0 left-0 w-8 h-8">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-defense" />
                            <div className="absolute top-0 left-0 w-[2px] h-full bg-defense" />
                        </div>

                        {/* Corner Brackets — Top Right */}
                        <div className="absolute top-0 right-0 w-8 h-8">
                            <div className="absolute top-0 right-0 w-full h-[2px] bg-defense" />
                            <div className="absolute top-0 right-0 w-[2px] h-full bg-defense" />
                        </div>

                        {/* Corner Brackets — Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-8 h-8">
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-defense" />
                            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-defense" />
                        </div>

                        {/* Corner Brackets — Bottom Right */}
                        <div className="absolute bottom-0 right-0 w-8 h-8">
                            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-defense" />
                            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-defense" />
                        </div>

                        {/* Red glow in top corner */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-defense/5 blur-[100px] pointer-events-none" />

                        {/* Form tag label */}
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-2 h-2 bg-defense animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                            <span className="text-defense/70 font-mono text-[10px] tracking-[0.3em] uppercase">
                                // STATUS: READY_TO_RECEIVE
                            </span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Row 1: Name + Email */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-defense/50 font-mono text-[11px] tracking-[0.2em] uppercase mb-3">
                                        // CONTACT_NAME
                                    </label>
                                    <div className="relative group">
                                        <User size={16} className="absolute top-5 left-4 text-gray-600 group-focus-within:text-defense transition-colors" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t.form.name}
                                            required
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-defense/50 font-mono text-[11px] tracking-[0.2em] uppercase mb-3">
                                        // EMAIL_ADDRESS
                                    </label>
                                    <div className="relative group">
                                        <Mail size={16} className="absolute top-5 left-4 text-gray-600 group-focus-within:text-defense transition-colors" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t.form.email}
                                            required
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Phone + Subject */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-defense/50 font-mono text-[11px] tracking-[0.2em] uppercase mb-3">
                                        // PHONE_NUMBER
                                    </label>
                                    <div className="relative group">
                                        <Phone size={16} className="absolute top-5 left-4 text-gray-600 group-focus-within:text-defense transition-colors" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t.form.phone}
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-defense/50 font-mono text-[11px] tracking-[0.2em] uppercase mb-3">
                                        // REQUEST_SUBJECT
                                    </label>
                                    <div className="relative group">
                                        <FileText size={16} className="absolute top-5 left-4 text-gray-600 group-focus-within:text-defense transition-colors" />
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={t.form.subject}
                                            required
                                            className={`${inputClasses} pl-12`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Message */}
                            <div>
                                <label className="block text-defense/50 font-mono text-[11px] tracking-[0.2em] uppercase mb-3">
                                    // MESSAGE_BODY
                                </label>
                                <div className="relative group">
                                    <MessageSquare size={16} className="absolute top-5 left-4 text-gray-600 group-focus-within:text-defense transition-colors" />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t.form.message}
                                        required
                                        rows={6}
                                        className={`${inputClasses} pl-12 resize-none`}
                                    />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-[1px] bg-gradient-to-r from-defense/30 via-white/5 to-transparent" />

                            {/* Submit Row */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'success'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                        relative flex items-center gap-3 px-10 py-4 font-rajdhani font-bold text-lg uppercase tracking-wider
                                        transform -skew-x-6 transition-all duration-500 overflow-hidden
                                        ${status === 'success'
                                            ? 'bg-green-600 text-white cursor-default'
                                            : status === 'sending'
                                                ? 'bg-defense/60 text-white/70 cursor-wait'
                                                : 'bg-defense text-white hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]'
                                        }
                                        disabled:opacity-70
                                    `}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />

                                    <span className="relative z-10 skew-x-6 flex items-center gap-3">
                                        {status === 'sending' && (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        )}
                                        {status === 'success' && <CheckCircle2 size={20} />}
                                        {status === 'idle' && <Send size={18} />}
                                        {status === 'error' && <AlertTriangle size={18} />}

                                        {status === 'idle' && t.form.submit}
                                        {status === 'sending' && t.form.sending}
                                        {status === 'success' && t.form.success}
                                        {status === 'error' && t.form.error}
                                    </span>
                                </motion.button>

                                {/* Encryption note */}
                                <span className="text-gray-600 font-mono text-[10px] tracking-widest uppercase">
                                    // ENCRYPTED_CHANNEL.v2
                                </span>
                            </div>
                        </form>
                    </div>

                    {/* Bottom decorative line */}
                    <div className="mt-6 flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-defense/20 to-transparent" />
                        <span className="text-gray-700 font-mono text-[9px] tracking-[0.4em] uppercase">
                            // RESPONSE_TIME: &lt; 2H
                        </span>
                        <div className="h-[1px] w-16 bg-white/5" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
