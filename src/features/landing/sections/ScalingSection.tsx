import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCALING_STEPS } from '@/app/data/landing-content';
import { cn } from '@/app/utils/cn';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';
import { AnimatedCounter } from '@/components/visuals/AnimatedCounter';

export const ScalingSection = () => {
    const { lang } = useLang();
    const t = translations[lang].scaling;
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const steps = SCALING_STEPS.map((step, i) => {
        const tStep = t.steps[i] as {
            label: string;
            value?: number;
            suffix?: string;
            title?: string;
            subtitle: string;
            desc: string;
            readiness?: { score: string; items: string[] };
        };

        return {
            ...step,
            label: tStep.label,
            value: tStep.value,
            suffix: tStep.suffix,
            title: tStep.title,
            subtitle: tStep.subtitle,
            desc: tStep.desc,
            readiness: tStep.readiness,
        };
    });

    return (
        <section className="relative w-full py-24 bg-carbon overflow-hidden">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="mb-20 max-w-3xl">
                    <SectionHeader
                        subtitle={t.subtitle}
                        title={t.title}
                    />
                    <p className="text-xl text-gray-400 font-light max-w-2xl mt-8">
                        {t.description}
                    </p>
                </div>

                <div className="relative flex flex-col gap-16 md:gap-24 py-12 mb-20">
                    {/* Interactive Vertical Progress Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-defense via-defense to-defense/50 shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                            initial={{ height: '33.33%' }}
                            animate={{
                                height: hoveredIndex === 0 ? '33.33%' :
                                    hoveredIndex === 1 ? '66.66%' : '100%'
                            }}
                            transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        />
                    </div>

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const isStepActive = hoveredIndex === index;

                        return (
                            <div
                                key={step.id}
                                className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start md:items-center gap-8 group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(index === 0 ? 0 : hoveredIndex)}
                            >
                                {/* Left Content (Desktop) */}
                                <div className={cn(
                                    "hidden md:flex flex-col items-end text-right transition-opacity duration-300",
                                    isEven ? "order-1" : "order-1 opacity-0 pointer-events-none",
                                    isEven && (isStepActive ? "opacity-100" : "opacity-60")
                                )}>
                                    {isEven && (
                                        <>
                                            <div className={cn(
                                                "inline-block px-3 py-1 font-bold font-mono text-xs rounded mb-4",
                                                isStepActive ? "bg-defense text-white" : "border border-white/10 text-gray-500 uppercase"
                                            )}>
                                                {step.label}
                                            </div>
                                            <h3 className="text-6xl md:text-7xl font-bold font-rajdhani text-white mb-2">
                                                {step.value !== undefined ? (
                                                    <AnimatedCounter target={step.value} suffix={step.suffix} />
                                                ) : (
                                                    step.title
                                                )}
                                                <span className="text-2xl md:text-3xl text-gray-500 font-medium ml-2">{step.unit}</span>
                                            </h3>
                                            <p className="text-defense font-mono text-base uppercase tracking-wider mb-2">{step.subtitle}</p>
                                            <p className="text-gray-400 text-lg max-w-sm">{step.desc}</p>
                                        </>
                                    )}
                                </div>

                                {/* Center Marker */}
                                <div className="relative flex justify-center order-1 md:order-2 h-full py-4">
                                    <div
                                        className={cn(
                                            "absolute inset-0 transition-opacity duration-700 pointer-events-none z-0",
                                            isStepActive ? "opacity-100 animate-pulse" : "opacity-0 group-hover:opacity-40"
                                        )}
                                        style={{
                                            background: 'radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(255,0,0,0) 70%)'
                                        }}
                                    />

                                    <div className={cn(
                                        "relative w-14 h-14 bg-black border-2 rounded-full flex items-center justify-center z-10 transition-all duration-500",
                                        isStepActive
                                            ? "border-defense shadow-[0_0_30px_rgba(255,0,0,0.5)] scale-110"
                                            : "border-white/20 group-hover:border-defense/60 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.15)]"
                                    )}>
                                        <span className={cn(
                                            "font-rajdhani font-bold text-xl transition-colors",
                                            isStepActive ? "text-defense" : "text-white/50 group-hover:text-white"
                                        )}>
                                            {step.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Content / Mobile */}
                                <div className={cn(
                                    "flex flex-col items-start text-left transition-opacity duration-300",
                                    isEven ? "md:hidden order-2" : "md:order-3",
                                    !isEven && (isStepActive ? "opacity-100" : "opacity-60")
                                )}>
                                    <div className={cn(
                                        "inline-block px-3 py-1 font-bold font-mono text-xs rounded mb-4 uppercase",
                                        isStepActive ? "bg-defense text-white" : "border border-white/20 text-gray-400"
                                    )}>
                                        {step.label}
                                    </div>
                                    <h3 className={cn(
                                        "text-6xl md:text-7xl font-bold font-rajdhani text-white mb-2 transition-colors",
                                        isStepActive && "text-white"
                                    )}>
                                        {step.value !== undefined ? (
                                            <AnimatedCounter target={step.value} suffix={step.suffix} />
                                        ) : (
                                            step.title
                                        )}
                                        <span className="text-2xl md:text-3xl text-gray-500 font-medium transition-colors ml-2">{step.unit}</span>
                                    </h3>
                                    <p className={cn(
                                        "font-mono text-base uppercase tracking-wider mb-2",
                                        isStepActive ? "text-defense" : "text-white/80"
                                    )}>{step.subtitle}</p>
                                    <p className="text-gray-400 text-lg max-w-sm mb-6">{step.desc}</p>

                                    {step.readiness && (
                                        <div className={cn(
                                            "w-full bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-500",
                                            isStepActive ? "border-defense/30 shadow-[0_0_20px_rgba(255,0,0,0.05)]" : "opacity-80"
                                        )}>
                                            <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                                                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Готовність до запуску</span>
                                                <span className="text-defense font-mono font-bold text-sm">{step.readiness.score}</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                {step.readiness.items.map((item: string) => (
                                                    <div key={item} className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-white/5 rounded text-xs text-gray-100 font-medium">
                                                        <div className="w-1.5 h-1.5 bg-defense rounded-full shadow-[0_0_8px_var(--color-defense)]" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
