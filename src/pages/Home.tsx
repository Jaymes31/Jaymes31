import { Link } from 'react-router-dom';
import { Play, CheckCircle, ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Master Your Bodyweight
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Forging Elite <span className="text-primary">Athletes</span> Through Calisthenics
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                Step-by-step video demonstrations and structured progressions for everything from your first pull-up to the advanced planche.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/signup" 
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                >
                  Start Training Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/library" 
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-full border border-zinc-700 flex items-center justify-center gap-2 transition-all"
                >
                  Explore Library <Play className="w-4 h-4 fill-current" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-primary/30 transition-all group">
              <div className="bg-zinc-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Slow-Motion Demos</h3>
              <p className="text-zinc-500 leading-relaxed">
                Every exercise is demonstrated in high-definition slow motion with clear form cues to ensure you train safely.
              </p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-primary/30 transition-all group">
              <div className="bg-zinc-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Progressions</h3>
              <p className="text-zinc-500 leading-relaxed">
                Don't guess how to reach your goals. Our scientific progression pathways take you from zero to elite level.
              </p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-primary/30 transition-all group">
              <div className="bg-zinc-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">No Equipment Needed</h3>
              <p className="text-zinc-500 leading-relaxed">
                Learn how to build a world-class physique using nothing but your own bodyweight, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Forge Your Strength?</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join thousands of athletes mastering their bodies. Get full access to our complete workout library and skill pathways.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link 
              to="/signup" 
              className="bg-primary hover:bg-primary-dark text-white font-extrabold text-xl px-12 py-5 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Get Unlimited Access
            </Link>
            <div className="flex items-center gap-6 text-zinc-500 text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> HD Video Library</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-primary" /> Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
