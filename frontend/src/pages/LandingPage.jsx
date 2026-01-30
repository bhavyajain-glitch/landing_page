import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function LandingPage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-neon selection:text-black">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Purple Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-purple/20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-purple/10 blur-[150px] rounded-full mix-blend-screen"></div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">

        {/* Animated decorative stars */}
        <div className="absolute top-1/4 left-10 w-12 h-12 bg-brand-neon shape-star animate-star-spin opacity-80 shadow-neon"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-brand-purple shape-star animate-spin opacity-80 shadow-purple" style={{ animationDuration: '6s' }}></div>

        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-6 relative">
          <span className="text-metallic drop-shadow-lg">UNLEASH</span>
          <br />
          <span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-neon">YOUR</span>
          <span className="text-metallic ml-4">CAMPUS</span>
        </h1>

        <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light tracking-wide">
          The ultimate platform for the next generation. <span className="text-brand-neon font-bold">Connect.Create.Conquer.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <a href="/download/app-release.apk" className="btn-chrome group">
            <span className="relative z-10 flex items-center gap-2">
              Download APK
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </span>
          </a>
          <a href="https://web.campusconnect.com" className="btn-neon">
            Launch Web App
          </a>
        </div>
      </section>

      {/* Feature Sticker Grid */}
      <section className="relative z-10 py-32 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "HYPER-SYNC", desc: "Real-time updates across all your devices.", color: "border-brand-neon" },
              { title: "CLAN-MODE", desc: "Join squads and collaborate instantly.", color: "border-brand-purple" },
              { title: "VAULT-SECURE", desc: "Your data, locked down and private.", color: "border-white" },
            ].map((item, i) => (
              <div key={i} className={`p-8 border-2 ${item.color} bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden group`}>
                <h3 className="text-3xl font-black italic mb-4 text-white">{item.title}</h3>
                <p className="text-slate-400 text-lg">{item.desc}</p>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-current opacity-20 -mr-4 -mt-4 transform rotate-45"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline (Re-styled) */}
      <section className="relative z-10 py-32 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-24 text-metallic">THE JOURNEY</h2>

          <div className="space-y-24 relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-neon via-brand-purple to-transparent"></div>

            {[
              { step: "01", title: "INITIATE", text: "Jack into the network. Download the app." },
              { step: "02", title: "SYNC UP", text: "Link your university profile." },
              { step: "03", title: "DOMINATE", text: "Organize, chat, and lead the campus." }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-left md:text-right">
                  <h3 className={`text-4xl font-bold text-white mb-2 ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>{item.title}</h3>
                  <p className={`text-slate-400 ${idx % 2 !== 0 ? 'md:text-left' : ''}`}>{item.text}</p>
                </div>

                {/* Node */}
                <div className="w-12 h-12 bg-black border-4 border-brand-neon relative z-10 shadow-neon flex items-center justify-center transform -skew-x-12">
                  <span className="font-bold text-brand-neon">{item.step}</span>
                </div>

                <div className="flex-1 opacity-50 hidden md:block">
                  {/* Placeholder for decoration */}
                  <div className="h-1 bg-white/10 w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 border-t border-white/5 bg-black">
        <p className="uppercase tracking-widest text-xs font-bold">Designed by Vyb App &copy; 2024</p>
      </footer>
    </div>
  );
}

export default LandingPage;
