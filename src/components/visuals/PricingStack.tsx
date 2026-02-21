import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// SVG geometry per layer:
//   Top rhombus face: startY → startY+80 (vertical span)
//   Side faces:       startY+40 → startY+100
//
// For layers to form ONE solid cube, the top edge of the layer above
// must meet the bottom edge of the layer below's side face:
//   nextStartY + 40 = prevStartY + 100  →  step = 60px
//
// Final spacing between layers = 90px (original design).
// So each layer i (0=bottom) needs to travel (90 - 60) * i = 30 * i px downward.

const LAYER_STEP_FINAL = 90;   // final spacing (original)
const LAYER_STEP_CUBE = 60;   // tight spacing that forms a solid cube
const SEPARATION_DELAY = 50;  // fires almost immediately on scroll-in

import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

export const PricingStack = () => {
    const { lang } = useLang();
    const t = translations[lang].pricing;
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [separated, setSeparated] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setSeparated(true), SEPARATION_DELAY);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    // Map translations to layers with IDs
    const pricingLayers = t.layers.map((layer, i) => ({
        id: i + 1,
        ...layer
    }));

    const layers = [...pricingLayers].reverse();
    const totalLayers = pricingLayers.length;

    return (
        <div ref={ref} className="w-full max-w-5xl mx-auto py-8 sm:py-12 flex justify-center items-center relative overflow-hidden sm:overflow-visible">
            <div className="w-full h-[450px] sm:h-[600px] relative z-10">
                <svg
                    viewBox="-50 -50 400 600"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full drop-shadow-[0_0_30px_rgba(255,0,0,0.15)] overflow-visible"
                >
                    <defs>
                        <linearGradient id="glassTop" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(180, 0, 0, 0.9)" />
                            <stop offset="50%" stopColor="rgba(120, 0, 0, 0.7)" />
                            <stop offset="100%" stopColor="rgba(160, 0, 0, 0.8)" />
                        </linearGradient>
                        <linearGradient id="glassSide" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(100, 0, 0, 0.95)" />
                            <stop offset="100%" stopColor="rgba(60, 0, 0, 1)" />
                        </linearGradient>
                        <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
                            <stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="lineGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
                            <stop offset="100%" stopColor="#FF0000" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {layers.map((layer, reverseIndex) => {
                        const index = totalLayers - 1 - reverseIndex; // 0=bottom, 3=top

                        const finalStartY = 50 + index * LAYER_STEP_FINAL;
                        const collapsedStartY = 50 + index * LAYER_STEP_CUBE;

                        // How far each layer must travel downward to reach final position
                        const deltaY = finalStartY - collapsedStartY; // = 30 * index

                        const isRight = index % 2 === 0;

                        const rightCorner = { x: 280, y: finalStartY + 40 };
                        const leftCorner = { x: 20, y: finalStartY + 40 };
                        const lineLength = 100;
                        const lineEndRight = { x: rightCorner.x + lineLength, y: rightCorner.y };
                        const lineEndLeft = { x: leftCorner.x - lineLength, y: leftCorner.y };

                        // Bottom layer moves first, upper layers follow slightly after
                        const staggerDelay = index * 0.05;

                        return (
                            <motion.g
                                key={layer.id}
                                // Start: shifted UP so layers form a tight solid cube
                                initial={{ translateY: -deltaY }}
                                animate={
                                    !isInView
                                        ? { translateY: -deltaY }
                                        : separated
                                            ? { translateY: 0 }
                                            : { translateY: -deltaY }
                                }
                                whileHover={{ translateY: -5 }}
                                transition={{
                                    translateY: {
                                        duration: 0.6,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: staggerDelay,
                                    },
                                }}
                            >
                                {/* Connector line — always visible */}
                                <motion.path
                                    d={isRight
                                        ? `M ${rightCorner.x} ${rightCorner.y} L ${lineEndRight.x} ${lineEndRight.y}`
                                        : `M ${leftCorner.x} ${leftCorner.y} L ${lineEndLeft.x} ${lineEndLeft.y}`
                                    }
                                    stroke={isRight ? 'url(#lineGradientRight)' : 'url(#lineGradientLeft)'}
                                    strokeWidth="2"
                                    fill="none"
                                />

                                {/* Dot */}
                                <motion.circle
                                    cx={isRight ? lineEndRight.x : lineEndLeft.x}
                                    cy={isRight ? lineEndRight.y : lineEndLeft.y}
                                    r="4"
                                    fill="#FF0000"
                                />

                                {/* Left side face */}
                                <path
                                    d={`M 20 ${finalStartY + 40} L 150 ${finalStartY + 80} L 150 ${finalStartY + 100} L 20 ${finalStartY + 60} Z`}
                                    fill="url(#glassSide)"
                                    stroke="#880000"
                                    strokeWidth="0.5"
                                />
                                {/* Right side face */}
                                <path
                                    d={`M 280 ${finalStartY + 40} L 150 ${finalStartY + 80} L 150 ${finalStartY + 100} L 280 ${finalStartY + 60} Z`}
                                    fill="url(#glassSide)"
                                    stroke="#880000"
                                    strokeWidth="0.5"
                                />
                                {/* Top face */}
                                <path
                                    d={`M 150 ${finalStartY} L 280 ${finalStartY + 40} L 150 ${finalStartY + 80} L 20 ${finalStartY + 40} Z`}
                                    fill="url(#glassTop)"
                                    stroke="#FF0000"
                                    strokeWidth="1.5"
                                />
                                {/* Highlight gloss */}
                                <path
                                    d={`M 30 ${finalStartY + 42} L 150 ${finalStartY + 75} L 270 ${finalStartY + 42}`}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeOpacity="0.15"
                                    style={{ mixBlendMode: 'overlay' }}
                                />

                                {/* Label */}
                                <foreignObject
                                    x={isRight ? lineEndRight.x + 10 : lineEndLeft.x - 210}
                                    y={finalStartY - 15}
                                    width="200"
                                    height="100"
                                    style={{ overflow: 'visible' }}
                                >
                                    <div className={`flex flex-col justify-center h-full ${isRight ? 'items-start text-left' : 'items-end text-right'}`}>
                                        <div className="flex flex-col justify-center py-2">
                                            <span className="text-defense font-mono text-[9px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-3 block">{layer.sub}</span>
                                            <h4 className="text-white font-rajdhani font-bold text-sm sm:text-xl uppercase leading-none break-words max-w-[150px] sm:max-w-none">{layer.label}</h4>
                                        </div>
                                    </div>
                                </foreignObject>
                            </motion.g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};
