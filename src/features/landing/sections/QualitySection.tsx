import { motion } from 'framer-motion';
import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { QUALITY_PROTOCOLS } from '@/app/data/landing-content';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

const ProtocolCard = ({ item, index }: { item: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full"
        >
            {/* Main Container */}
            <div className="relative h-full bg-black/40 border border-white/5 p-8 overflow-hidden transition-all duration-500 group-hover:border-defense/50">
                {/* Background Grid (appears on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(var(--color-defense) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}
                />

                {/* Scanning Line */}
                <motion.div
                    className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-defense to-transparent z-20 opacity-0 group-hover:opacity-100"
                    animate={{
                        top: ['-10%', '110%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute top-2 right-2 w-2 h-[1px] bg-defense" />
                    <div className="absolute top-2 right-2 w-[1px] h-2 bg-defense" />
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 w-2 h-[1px] bg-defense" />
                    <div className="absolute bottom-2 left-2 w-[1px] h-2 bg-defense" />
                </div>

                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="font-mono text-[10px] tracking-widest text-defense">
                        SEC_PRTCL_{index.toString().padStart(2, '0')}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-defense animate-pulse shadow-[0_0_8px_var(--color-defense)]" />
                </div>

                {/* Icon with Glitch Effect on Hover */}
                <div className="relative mb-6">
                    <div className="text-gray-400 group-hover:text-defense transition-colors duration-500 transform group-hover:scale-110 transition-transform">
                        <item.icon size={40} strokeWidth={1.5} />
                    </div>
                    {/* Shadow Pulse */}
                    <div className="absolute inset-0 bg-defense/20 blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-wider group-hover:text-defense transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                    {item.desc}
                </p>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                    <motion.div
                        className="h-full bg-defense"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 + (index * 0.1) }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-defense/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />
        </motion.div>
    );
};

export const QualitySection = () => {
    const { lang } = useLang();
    const t = translations[lang].quality;

    const protocols = QUALITY_PROTOCOLS.map((p, i) => ({
        ...p,
        title: t.protocols[i].title,
        desc: t.protocols[i].desc,
    }));

    return (
        <section className="relative w-full py-32 bg-carbon overflow-hidden">
            {/* Geometric Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-defense/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-defense/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:pl-32">
                <div className="mb-16 lg:mb-24">
                    <SectionHeader title={t.title} subtitle={t.subtitle} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                    {protocols.map((item, index) => (
                        <ProtocolCard key={item.title} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
