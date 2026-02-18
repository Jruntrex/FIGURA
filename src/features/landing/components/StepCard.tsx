interface StepCardProps {
    number: string;
    title: string;
    desc: string;
    isActive?: boolean;
}

export const StepCard = ({ number, title, desc, isActive }: StepCardProps) => (
    <div className={`flex flex-col gap-6 relative group ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
        <div className="relative">
            {/* Active Indicator Pulse */}
            {isActive && (
                <div className="absolute -inset-4 bg-defense-glow/20 rounded-full blur-xl animate-pulse z-0" />
            )}

            {/* Number Box */}
            <div className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-md text-2xl font-bold font-mono transition-all duration-300 border
        ${isActive
                    ? 'bg-defense border-defense text-black shadow-[0_0_30px_rgba(255,0,0,0.6)] scale-110'
                    : 'bg-black border-defense-glow/30 text-defense group-hover:border-defense group-hover:bg-defense group-hover:text-black'
                }`}
            >
                {number}
            </div>
        </div>

        <div className="relative z-10">
            <h3 className={`text-2xl font-bold font-rajdhani uppercase mb-3 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {title}
            </h3>
            <p className="text-gray-400 text-sm font-mono leading-relaxed max-w-xs border-l border-white/10 pl-4">
                {desc}
            </p>
        </div>
    </div>
);
