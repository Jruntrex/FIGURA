import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MouseEvent } from 'react';
import { useLang } from '@/app/context/LanguageContext';
import { translations } from '@/app/i18n/translations';

// VARIANT B — split islands navbar (active)
// Left island: language switcher | Right island: nav links
// Mobile: single floating island button (bottom-right) → popup panel

export const Navbar = () => {
    const { lang, setLang } = useLang();
    const t = translations[lang].nav;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { label: t.capabilities, href: '#capabilities' },
        { label: t.materials, href: '#materials' },
        { label: t.price, href: '#pricing' },
    ];

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleContactClick = () => {
        setMobileOpen(false);
        navigate('/contact');
    };

    const isContactPage = location.pathname === '/contact';

    const handleToHome = () => {
        setMobileOpen(false);
        navigate('/');
    };

    return (
        <>
            {/* ── DESKTOP header ── */}
            <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
                {/* pl-16 lg:pl-20 = offset for the left sidebar */}
                <div className="w-full pl-20 lg:pl-28 pr-4 pt-5 flex items-start justify-between">

                    {/* LEFT ISLAND — Language Switcher (desktop only) */}
                    <div className="pointer-events-auto hidden md:flex items-center bg-black/90 backdrop-blur-md border border-white/15 overflow-hidden">
                        <button
                            onClick={() => setLang('ua')}
                            className={`relative font-mono text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-all duration-200 ${lang === 'ua'
                                ? 'text-white bg-defense/20'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'ua' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense" />
                            )}
                            UA
                        </button>
                        <span className="w-[1px] h-5 bg-white/15" />
                        <button
                            onClick={() => setLang('en')}
                            className={`relative font-mono text-xs tracking-[0.25em] uppercase px-6 py-2.5 transition-all duration-200 ${lang === 'en'
                                ? 'text-white bg-defense/20'
                                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'en' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense" />
                            )}
                            EN
                        </button>
                    </div>

                    {/* RIGHT ISLAND — Nav Links (desktop only) */}
                    <nav className="pointer-events-auto hidden md:flex items-center bg-black/90 backdrop-blur-md border border-white/15 overflow-hidden">
                        {!isContactPage ? (
                            <>
                                {navLinks.map((link, i) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="relative group font-mono text-xs tracking-[0.2em] uppercase px-7 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                                    >
                                        {/* separator between items */}
                                        {i > 0 && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-5 bg-white/15" />
                                        )}
                                        {/* red bottom accent on hover */}
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-defense scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                                        {link.label}
                                    </a>
                                ))}

                                <span className="w-[1px] h-5 bg-white/15" />

                                <button
                                    onClick={handleContactClick}
                                    className="relative group font-mono text-xs tracking-[0.2em] uppercase px-7 py-2.5 text-white bg-defense hover:bg-red-600 transition-colors duration-200 font-bold"
                                >
                                    {t.contactUs}
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleToHome}
                                className="relative group font-mono text-xs tracking-[0.2em] uppercase px-7 py-2.5 text-white bg-defense hover:bg-red-600 transition-colors duration-200 font-bold"
                            >
                                {t.toHome}
                            </button>
                        )}
                    </nav>

                </div>
            </header>

            {/* ── MOBILE floating island + popup ── */}
            <div className="md:hidden">

                {/* Backdrop — closes menu when tapped outside */}
                {mobileOpen && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setMobileOpen(false)}
                    />
                )}

                {/* Popup panel — slides up above the button */}
                <div
                    className={`
                        fixed bottom-[88px] right-4 z-50
                        bg-black/95 backdrop-blur-xl border border-white/10
                        w-[calc(100vw-32px)] sm:w-64 overflow-hidden
                        transition-all duration-300 ease-out
                        shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(255,0,0,0.05)]
                        ${mobileOpen
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-4 pointer-events-none'}
                    `}
                >
                    {/* Header line */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-defense via-defense/50 to-transparent" />

                    {/* Nav links */}
                    <div className="flex flex-col py-2">
                        {!isContactPage ? (
                            <>
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`
                                            relative group flex items-center justify-between
                                            font-mono text-[11px] tracking-[0.25em] uppercase
                                            px-6 py-4 text-gray-400 hover:text-white hover:bg-white/5
                                            transition-all duration-200
                                        `}
                                    >
                                        <span>{link.label}</span>
                                        <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-defense transition-colors" />
                                    </a>
                                ))}
                                <div className="px-4 py-3">
                                    <button
                                        onClick={handleContactClick}
                                        className="relative group flex items-center justify-center w-full font-mono text-xs tracking-[0.2em] uppercase px-5 py-4 text-white bg-defense hover:bg-red-600 transition-all duration-200 font-bold shadow-lg shadow-defense/10"
                                    >
                                        {t.contactUs}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="px-4 py-3">
                                <button
                                    onClick={handleToHome}
                                    className="relative group flex items-center justify-center w-full font-mono text-xs tracking-[0.2em] uppercase px-5 py-4 text-white bg-defense hover:bg-red-600 transition-all duration-200 font-bold"
                                >
                                    {t.toHome}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Language switcher - Integrated more cleanly */}
                    <div className="flex items-center border-t border-white/5 bg-white/[0.02]">
                        <button
                            onClick={() => setLang('ua')}
                            className={`relative flex-1 font-mono text-[10px] tracking-[0.3em] uppercase py-4 transition-all duration-200 ${lang === 'ua'
                                ? 'text-white bg-defense/10'
                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'ua' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-defense" />
                            )}
                            UA
                        </button>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <button
                            onClick={() => setLang('en')}
                            className={`relative flex-1 font-mono text-[10px] tracking-[0.3em] uppercase py-4 transition-all duration-200 ${lang === 'en'
                                ? 'text-white bg-defense/10'
                                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                }`}
                        >
                            {lang === 'en' && (
                                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-defense" />
                            )}
                            EN
                        </button>
                    </div>
                </div>

                {/* Floating trigger button */}
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Menu"
                    className={`
                        fixed bottom-6 right-6 z-50
                        w-14 h-14
                        bg-black border border-white/20
                        flex items-center justify-center
                        transition-all duration-300
                        shadow-2xl shadow-black
                        ${mobileOpen ? 'border-defense bg-defense/5 rotate-90' : 'hover:border-white/40 hover:bg-white/5 active:scale-95'}
                    `}
                >
                    {/* Animated hamburger → X */}
                    <span className="relative w-5 h-[14px] flex flex-col justify-between overflow-hidden">
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px] text-defense w-6' : 'text-gray-300 w-5'}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 -translate-x-full text-defense' : 'text-gray-300 w-3'}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px] text-defense w-6' : 'text-gray-300 w-5'}`} />
                    </span>
                </button>

            </div>
        </>
    );
};
