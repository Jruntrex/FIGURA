import { motion, useScroll, useTransform } from 'framer-motion';

export const GlobalProgressSpine = () => {
    const { scrollY } = useScroll();

    // Mapping based on a large fixed height to simulate global progress
    const progressHeight = useTransform(scrollY, [0, 10000], ["0%", "100%"]);

    return (
        <div className="fixed left-0 top-0 bottom-0 w-12 md:w-24 z-50 hidden lg:flex flex-col items-center border-r border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="h-full w-[1px] bg-gradient-to-b from-defense via-white/5 to-transparent relative">
                <motion.div
                    style={{ height: progressHeight }}
                    className="w-[2px] bg-defense absolute top-0 -left-[0.5px] shadow-[0_0_15px_var(--color-defense)]"
                />
            </div>

            {/* Spine Terminator */}
            <div className="absolute bottom-12 text-defense">
                <div className="w-2 h-2 bg-defense rotate-45 mb-2 mx-auto shadow-[0_0_100px_var(--color-defense)]" />
                <div className="text-[10px] font-mono text-defense opacity-50 rotate-90 origin-center whitespace-nowrap translate-y-8">
                    SYSTEM END
                </div>
            </div>
        </div>
    );
};
