import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] group pointer-events-auto"
                    aria-label="Scroll to top"
                >
                    {/* Background with tech aesthetic */}
                    <div className="relative w-14 h-14 bg-black/90 backdrop-blur-md border border-white/15 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-defense/60">
                        {/* Red accent corners */}
                        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-defense opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-defense opacity-0 group-hover:opacity-100 transition-opacity" />

                        <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-defense transition-colors duration-300" />

                        {/* Animated background glow on hover */}
                        <div className="absolute inset-0 bg-defense/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
