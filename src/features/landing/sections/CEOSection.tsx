import { CEO_DATA } from '@/app/data/landing-content';
import { ContactItem } from '@/features/landing/components/ContactItem';
import { CONTACT_INFO } from '@/app/data/landing-content';

export const CEOSection = () => {
    return (
        <section className="relative w-full py-24 bg-black">
            <div className="max-w-7xl mx-auto px-8 lg:pl-32">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch border border-white/5 bg-carbon-light/30 relative overflow-hidden h-full min-h-[600px]">

                    {/* Left: Image Container */}
                    <div className="relative overflow-hidden min-h-[400px] lg:min-h-full bg-[#5D8CAE]">
                        {/* Corner Brackets for Image */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-defense z-10" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-defense z-10" />

                        <img
                            src={CEO_DATA.image}
                            alt={CEO_DATA.name}
                            className="w-full h-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Right: Content */}
                    <div className="p-8 lg:p-16 flex flex-col">
                        <div className="flex-1">
                            <span className="text-defense font-mono text-xs tracking-[0.2em] font-bold uppercase mb-4 block">
                                {CEO_DATA.title}
                            </span>
                            <h2 className="text-5xl md:text-6xl font-bold font-rajdhani text-white mb-2 uppercase">
                                {CEO_DATA.name}
                            </h2>
                            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-8">
                                {CEO_DATA.division}
                            </p>

                            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-lg">
                                {CEO_DATA.bio}
                            </p>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span className="text-green-500 font-mono text-[10px] font-bold tracking-widest">{CEO_DATA.status}</span>
                                </div>
                                <span className="text-gray-600 font-mono text-[10px]">{CEO_DATA.responseTime}</span>
                            </div>

                            {/* Red Divider Line */}
                            <div className="w-full h-[2px] bg-gradient-to-r from-defense to-transparent mb-12" />

                            <span className="text-defense font-mono text-[10px] tracking-[0.3em] font-bold uppercase mb-6 block opacity-80">
                                // DIRECT CONTACT CHANNELS
                            </span>

                            {/* Contact Stack */}
                            <div className="grid gap-3 max-w-md">
                                {CONTACT_INFO.map((info) => (
                                    <ContactItem
                                        key={info.label}
                                        icon={info.icon}
                                        label={info.label}
                                        value={info.value}
                                        href={info.href}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-defense/5 blur-[100px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
};
