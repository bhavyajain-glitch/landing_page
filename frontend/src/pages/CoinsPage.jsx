import React from 'react';
import Navbar from '../components/Navbar';

const CoinsPage = () => {
    const tiers = [
        {
            coins: 150,
            price: "19rs",
            description: "Perfect for getting started.",
            highlight: false,
            color: "border-gray-500"
        },
        {
            coins: 600,
            price: "49rs",
            description: "Best value for regular users.",
            highlight: true,
            color: "border-brand-neon"
        },
        {
            coins: "Unlimited",
            price: "299rs",
            description: "Unlock everything. Fest Access.",
            highlight: false,
            color: "border-brand-purple"
        }
    ];

    return (
        <div className="relative min-h-screen selection:bg-brand-neon selection:text-black bg-black text-white overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-purple/20 blur-[150px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-neon/10 blur-[150px] rounded-full mix-blend-screen"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            <Navbar />

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4">
                        <span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-purple">STORE</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Top up your balance or unlock exclusive access.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative bg-white/5 border-2 ${tier.color} p-8 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 ${tier.highlight ? 'md:scale-110 z-10 shadow-neon' : 'hover:bg-white/10'}`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-neon text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                                    Best Value
                                </div>
                            )}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2 text-slate-300">
                                    {tier.coins === "Unlimited" ? "Fest Access" : `${tier.coins} Coins`}
                                </h3>
                                <div className="text-5xl font-black mb-4 italic text-white">
                                    {tier.price}
                                </div>
                                <p className="text-slate-400 mb-8 border-t border-white/10 pt-4">
                                    {tier.description}
                                </p>
                                <button className={`w-full py-3 px-6 rounded font-bold uppercase tracking-wider transition-all ${tier.highlight ? 'bg-brand-neon text-black hover:bg-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoinsPage;
