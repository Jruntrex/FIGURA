import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

export const GlobalProgressSpine = () => {
    const { scrollYProgress } = useScroll();

    // Create a smooth velocity tracker to detect scroll direction
    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 30 });

    // Drone travels from top (0%) to tank position (~85%)
    // Trigger collision at 90% scroll to align exactly with the "Interaction Algorithm" section
    const droneTop = useTransform(scrollYProgress, [0, 0.9, 1], ["0%", "85%", "85%"]);

    // Explosion peaking significantly later (0.9) and much narrower
    const explosionScale = useTransform(scrollYProgress, [0.87, 0.9, 0.93], [0, 8, 0]);
    const baseExplosionOpacity = useTransform(scrollYProgress, [0.87, 0.9, 0.91], [0, 1, 0]);

    // Directional control: only show explosion when scrolling down (positive velocity)
    const explosionOpacity = useTransform(
        [baseExplosionOpacity, smoothVelocity],
        ([opacity, velocity]) => (velocity as number) > 0 ? (opacity as number) : 0
    );

    const tankOpacity = useTransform(scrollYProgress, [0.88, 0.92], [1, 0.2]);

    return (
        <div className="fixed left-0 top-0 bottom-0 w-16 md:w-24 z-50 hidden lg:flex flex-col items-center border-r border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="h-full w-[1px] bg-gradient-to-b from-defense via-white/5 to-transparent relative">
                {/* Drone */}
                <motion.div
                    style={{ top: droneTop }}
                    className="absolute left-1/2 -translate-x-1/2 z-30"
                >
                    <div className="relative group">
                        {/* Neon Drone Icon - Massive (120x120) with Reduced Glow */}
                        <div
                            className="w-24 h-24 md:w-32 md:h-32 bg-defense shadow-[0_0_20px_rgba(255,0,0,0.6)]"
                            style={{
                                maskImage: 'url(/icons/drone.svg)',
                                WebkitMaskImage: 'url(/icons/drone.svg)',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                WebkitMaskSize: 'contain',
                            }}
                        />
                        {/* Subtle Glow effect (fixed, no pulse) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-defense/20 blur-2xl rounded-full -z-10" />
                    </div>
                </motion.div>

                {/* Tank */}
                <motion.div
                    style={{ opacity: tankOpacity }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="relative">
                        {/* Neon Tank Icon - Massive (150x150) at bottom edge */}
                        <div
                            className="w-32 h-32 md:w-40 md:h-40 bg-defense shadow-[0_0_30px_rgba(255,0,0,0.8)]"
                            style={{
                                maskImage: 'url(/icons/tank.svg)',
                                WebkitMaskImage: 'url(/icons/tank.svg)',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                WebkitMaskSize: 'contain',
                            }}
                        />
                        <div className="absolute inset-x-0 -bottom-2 h-10 bg-defense/20 blur-3xl rounded-full -z-10" />
                    </div>
                </motion.div>

                {/* Explosion Effect - Massive and Violent peaking at 70% height */}
                <motion.div
                    style={{
                        scale: explosionScale,
                        opacity: explosionOpacity,
                        top: "85%"
                    }}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-defense rounded-full blur-[80px] z-40 pointer-events-none shadow-[0_0_200px_rgba(255,0,0,1)]"
                />
            </div>
        </div>
    );
};
