import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg group-hover:bg-primary-dark transition-colors">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Calisthenics <span className="text-primary">Forge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/library" className="hover:text-primary transition-colors">Library</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link 
              to="/signup" 
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-colors"
            >
              Start Training
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-zinc-800 bg-zinc-950 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <Link to="/" className="text-zinc-400 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/library" className="text-zinc-400 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Library</Link>
            <Link to="/pricing" className="text-zinc-400 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link 
              to="/signup" 
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Training
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="bg-primary p-1 rounded">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Calisthenics Forge</span>
              </Link>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Premium bodyweight training demonstrations. Master advanced skills with step-by-step progressions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li><Link to="/library" className="hover:text-primary transition-colors">Exercise Library</Link></li>
                  <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">Our Method</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
                <ul className="space-y-2 text-sm text-zinc-500">
                  <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-600">
            <p>© 2026 Calisthenics Forge. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-zinc-400">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zinc-400">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
