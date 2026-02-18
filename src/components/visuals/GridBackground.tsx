export const GridBackground = () => (
    <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
    />
);
