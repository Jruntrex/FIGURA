import { motion } from 'framer-motion';

const farmImage = "https://images.unsplash.com/photo-1631553127988-347432095f70?q=80&w=2070&auto=format&fit=crop"; // Placeholder high-tech print farm

export const FarmGallery = () => {
    return (
        <section className="relative w-full py-12 px-8 lg:px-32 bg-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video w-full max-w-7xl mx-auto overflow-hidden group"
            >
                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-defense/30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-defense shadow-[4px_4px_0_rgba(255,0,0,1)]" />

                {/* Print Farm Label */}
                <div className="absolute top-8 left-8 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded-sm">
                    <div className="w-2 h-2 bg-defense rounded-full animate-pulse shadow-[0_0_8px_var(--color-defense)]" />
                    <span className="text-white font-mono text-xs tracking-[0.3em] font-bold">PRINT FARM</span>
                </div>

                {/* Image with overlay */}
                <img
                    src={farmImage}
                    alt="Figura Print Farm"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </motion.div>
        </section>
    );
};
