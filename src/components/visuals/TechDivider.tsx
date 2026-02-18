export const TechDivider = () => (
    <div className="w-full h-16 relative flex items-center justify-center overflow-hidden my-12 opacity-50">
        {/* Center Line */}
        <div className="absolute inset-0 flex items-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-defense-glow/60 to-transparent" />
        </div>

        {/* Central Hex/Node */}
        <div className="relative z-10 w-4 h-4 rotate-45 border border-defense-glow/80 bg-black flex items-center justify-center">
            <div className="w-1 h-1 bg-defense rounded-full" />
        </div>

        {/* Decorative Brackets */}
        <div className="absolute left-[20%] text-defense/20 font-mono text-[10px] tracking-[0.5em] hidden md:block">
      // SECTION_BREAK //
        </div>
        <div className="absolute right-[20%] text-defense/20 font-mono text-[10px] tracking-[0.5em] hidden md:block">
      // SYSTEM_SYNC //
        </div>
    </div>
);
