import { PRICING_LAYERS } from '@/app/data/landing-content';

export const PricingStack = () => {
    return (
        <div className="w-full max-w-5xl mx-auto py-12 flex justify-center items-center relative">
            <div className="w-full h-[600px] relative z-10">
                <svg viewBox="-100 -50 500 600" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,0,0,0.15)]">
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

                    {[...PRICING_LAYERS].reverse().map((layer, reverseIndex) => {
                        const index = PRICING_LAYERS.length - 1 - reverseIndex;
                        const yOffset = index * 90;
                        const startY = 50 + yOffset;
                        const isRight = index % 2 === 0;

                        const rightCorner = { x: 280, y: startY + 40 };
                        const leftCorner = { x: 20, y: startY + 40 };

                        const lineLength = 120;
                        const lineEndRight = { x: rightCorner.x + lineLength, y: rightCorner.y };
                        const lineEndLeft = { x: leftCorner.x - lineLength, y: leftCorner.y };

                        return (
                            <g key={layer.id} className="group transition-all duration-300 hover:translate-y-[-5px]">
                                <path
                                    d={isRight
                                        ? `M ${rightCorner.x} ${rightCorner.y} L ${lineEndRight.x} ${lineEndRight.y}`
                                        : `M ${leftCorner.x} ${leftCorner.y} L ${lineEndLeft.x} ${lineEndLeft.y}`
                                    }
                                    stroke={isRight ? "url(#lineGradientRight)" : "url(#lineGradientLeft)"}
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="200"
                                    strokeDashoffset="200"
                                    className="transition-all duration-1000 ease-out group-hover:stroke-dashoffset-0"
                                    style={{ strokeDashoffset: 0 }}
                                />

                                <circle
                                    cx={isRight ? lineEndRight.x : lineEndLeft.x}
                                    cy={isRight ? lineEndRight.y : lineEndLeft.y}
                                    r="5"
                                    fill="#FF0000"
                                    className="drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                                />

                                <path
                                    d={`M 20 ${startY + 40} L 150 ${startY + 80} L 150 ${startY + 100} L 20 ${startY + 60} Z`}
                                    fill="url(#glassSide)"
                                    stroke="#880000"
                                    strokeWidth="0.5"
                                />
                                <path
                                    d={`M 280 ${startY + 40} L 150 ${startY + 80} L 150 ${startY + 100} L 280 ${startY + 60} Z`}
                                    fill="url(#glassSide)"
                                    stroke="#880000"
                                    strokeWidth="0.5"
                                />

                                <path
                                    d={`M 150 ${startY} L 280 ${startY + 40} L 150 ${startY + 80} L 20 ${startY + 40} Z`}
                                    fill="url(#glassTop)"
                                    stroke="#FF0000"
                                    strokeWidth="1.5"
                                    className="group-hover:brightness-110 transition-all duration-300"
                                />

                                <path
                                    d={`M 30 ${startY + 42} L 150 ${startY + 75} L 270 ${startY + 42}`}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeOpacity="0.15"
                                    style={{ mixBlendMode: 'overlay' }}
                                />

                                <foreignObject
                                    x={isRight ? lineEndRight.x + 15 : lineEndLeft.x - 315}
                                    y={startY - 10}
                                    width="300"
                                    height="100"
                                    className="overflow-visible"
                                >
                                    <div className={`flex flex-col justify-center h-full ${isRight ? 'items-start text-left' : 'items-end text-right'}`}>
                                        <div className="flex flex-col justify-center py-2">
                                            <span className="text-defense font-mono text-xs uppercase tracking-widest mb-3 block">{layer.sub}</span>
                                            <h4 className="text-white font-rajdhani font-bold text-xl uppercase leading-none text-shadow-sm">{layer.label}</h4>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};
