import { motion, useTransform, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GridBackground } from '@/components/visuals/GridBackground';

const heroLogo = "/assets/figura-logo.png";

export const HeroSection = () => {
    const { scrollY } = useScroll();
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative w-full h-[110vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black">
                <GridBackground />
                <div className="absolute top-0 right-0 w-[60vh] h-full bg-gradient-to-l from-defense-dim/50 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-8 lg:px-12 h-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Hero Logo with Darkness Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:flex justify-center items-center"
                >
                    <div className="relative w-[500px] h-[500px] opacity-90">
                        <img
                            src={heroLogo}
                            alt="Figura Emblem"
                            className="w-full h-full object-contain"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-defense" />
                        <span className="text-defense font-mono text-sm tracking-[0.2em] uppercase">
                            Defense Manufacturing Factory
                        </span>
                    </div>
                    <h1 className="text-8xl sm:text-[10rem] font-bold font-rajdhani leading-[0.85] tracking-tighter mb-8 uppercase text-white flex items-baseline">
                        Figura
                        <span className="text-defense text-6xl ml-1">.</span>
                    </h1>
                    <p className="max-w-xl text-xl sm:text-2xl text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-6">
                        Виробничий продакшин 3D-друку для оборонної промисловості.
                        <span className="block mt-2 text-white font-medium">Швидкість. Точність. Масштаб.</span>
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <motion.div
                    style={{ opacity: opacityText }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-[10px] font-mono uppercase tracking-widest">Scroll System</span>
                    <ChevronDown className="animate-bounce text-defense" />
                </motion.div>
            </div>
        </section>
    );
};
