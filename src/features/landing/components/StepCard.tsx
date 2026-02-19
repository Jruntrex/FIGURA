interface StepCardProps {
    number: string;
    title: string;
    desc: string;
    isActive?: boolean;
}

export const StepCard = ({ number, title, desc, isActive }: StepCardProps) => (
    <div className={`relative flex flex-col gap-6 group overflow-hidden ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
        <div className="relative">
            {/* Active Indicator Pulse */}
            {isActive && (
                <div className="absolute -inset-4 bg-defense/20 rounded-full blur-xl animate-pulse z-0" />
            )}

            {/* Number Box */}
            <div className={`relative z-10 w-16 h-16 flex items-center justify-center text-2xl font-bold font-mono transition-all duration-500 border
                ${isActive
                    ? 'bg-defense border-defense text-black shadow-[0_0_30px_rgba(255,0,0,0.6)] scale-110'
                    : 'bg-carbon border-defense/20 text-defense group-hover:border-defense/60 group-hover:bg-defense/10 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.15)]'
                }`}
            >
                {number}
            </div>
        </div>

        <div className="relative z-10">
            <h3 className={`text-2xl font-bold font-rajdhani uppercase mb-3 transition-colors ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {title}
            </h3>
            <p className="text-gray-400 text-sm font-mono leading-relaxed max-w-xs border-l-2 border-defense/20 group-hover:border-defense/50 pl-4 transition-colors duration-500">
                {desc}
            </p>
        </div>
    </div>
);
