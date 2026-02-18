import { TechDivider } from '@/components/visuals/TechDivider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SCALING_STEPS } from '@/app/data/landing-content';
import { cn } from '@/app/utils/cn';

export const ScalingSection = () => {
    return (
        <section className="relative w-full py-24 bg-carbon">
            <TechDivider />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="mb-20 max-w-3xl">
                    <SectionHeader
                        subtitle="Capacity Planning"
                        title="Наші поточні можливості + можливості масштабування"
                    />
                    <p className="text-xl text-gray-400 font-light max-w-2xl mt-8">
                        Наша модель дозволяє гнучко адаптувати виробничі потужності під замовлення будь-якого розміру.
                    </p>
                </div>

                <div className="relative flex flex-col gap-16 md:gap-24 py-12 mb-20">
                    <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-defense via-defense/50 to-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-defense via-defense/50 to-white/10 -translate-x-1/2 md:hidden" />

                    {SCALING_STEPS.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={step.id} className="relative grid grid-cols-[56px_1fr] md:grid-cols-[1fr_56px_1fr] items-start md:items-center gap-8 group">
                                {/* Left Content (Desktop) */}
                                <div className={cn(
                                    "hidden md:flex flex-col items-end text-right",
                                    isEven ? "order-1" : "order-1 opacity-60 hover:opacity-100 transition-opacity"
                                )}>
                                    {isEven && (
                                        <>
                                            <div className={cn(
                                                "inline-block px-3 py-1 font-bold font-mono text-xs rounded mb-4",
                                                step.isActive ? "bg-defense text-black" : "border border-white/10 text-gray-500 uppercase"
                                            )}>
                                                {step.label}
                                            </div>
                                            <h3 className="text-6xl md:text-7xl font-bold font-rajdhani text-white mb-2">
                                                {step.title} <span className="text-2xl md:text-3xl text-gray-500 font-medium">{step.unit}</span>
                                            </h3>
                                            <p className="text-defense font-mono text-base uppercase tracking-wider mb-2">{step.subtitle}</p>
                                            <p className="text-gray-400 text-lg max-w-sm">{step.desc}</p>
                                        </>
                                    )}
                                </div>

                                {/* Center Marker */}
                                <div className="relative flex justify-center order-1 md:order-2 h-full">
                                    <div className={cn(
                                        "sticky top-1/2 -translate-y-1/2 w-14 h-14 bg-black border-2 rounded-full flex items-center justify-center z-10 transition-all",
                                        step.isActive
                                            ? "border-defense shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                                            : "border-white/20 group-hover:border-defense"
                                    )}>
                                        {step.isActive ? (
                                            <div className="w-4 h-4 bg-defense rounded-full shadow-[0_0_10px_var(--color-defense)]" />
                                        ) : (
                                            <span className="font-rajdhani font-bold text-xl text-white/50 group-hover:text-white">{step.id}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Right Content / Mobile */}
                                <div className={cn(
                                    "flex flex-col items-start text-left order-2",
                                    isEven ? "md:hidden" : "md:order-3"
                                )}>
                                    <div className={cn(
                                        "inline-block px-3 py-1 font-bold font-mono text-xs rounded mb-4 uppercase",
                                        step.isActive ? "bg-defense text-black" : "border border-white/20 text-gray-400"
                                    )}>
                                        {step.label}
                                    </div>
                                    <h3 className={cn(
                                        "text-6xl md:text-7xl font-bold font-rajdhani text-white mb-2 transition-colors",
                                        !step.isActive && "group-hover:text-defense"
                                    )}>
                                        {step.title} <span className="text-2xl md:text-3xl text-gray-500 font-medium transition-colors">{step.unit}</span>
                                    </h3>
                                    <p className={cn(
                                        "font-mono text-base uppercase tracking-wider mb-2",
                                        step.isActive ? "text-defense" : "text-white"
                                    )}>{step.subtitle}</p>
                                    <p className="text-gray-400 text-lg max-w-sm mb-6">{step.desc}</p>

                                    {step.readiness && (
                                        <div className="w-full bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                                            <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                                                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Готовність до запуску</span>
                                                <span className="text-defense font-mono font-bold text-sm">{step.readiness.score}</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                {step.readiness.items.map(item => (
                                                    <div key={item} className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-white/5 rounded text-xs text-gray-200 font-medium">
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
