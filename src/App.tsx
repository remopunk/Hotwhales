import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Image, Palette, Box, Upload, Flame, Menu, X } from 'lucide-react';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import BackgroundsPage from './pages/BackgroundsPage';
import ArtworksPage from './pages/ArtworksPage';
import DioramasPage from './pages/DioramasPage';
import UploadPage from './pages/UploadPage';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/backgrounds', label: 'Backgrounds', icon: Image },
    { path: '/artworks', label: 'Artworks', icon: Palette },
    { path: '/dioramas', label: 'Dioramas', icon: Box },
    { path: '/upload', label: 'Upload', icon: Upload },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#FF6B00]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#FFD60A] flex items-center justify-center transition-all group-hover:shadow-[0_0_20px_rgba(255,107,0,0.6)]">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              <span className="text-[#FF6B00]">HOT</span> WHEELS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#FF6B00]/30">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/50'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#FF6B00]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#FFD60A] flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-[#FF6B00]">HOT</span> WHEELS
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The ultimate destination for Hot Wheels enthusiasts. Download stunning backgrounds,
              artworks, and dioramas for your collection.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF6B00]/20 transition-colors"
              >
                <span className="text-[#FF6B00] font-bold">f</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF6B00]/20 transition-colors"
              >
                <span className="text-[#FF6B00] font-bold">in</span>
              </a>
              <a
                href="https://github.com/remopunk/Hotwhales"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#FF6B00]/20 transition-colors"
              >
                <span className="text-[#FF6B00] font-bold text-xs">GH</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#FF6B00] transition-colors">Home</Link></li>
              <li><Link to="/backgrounds" className="text-gray-400 hover:text-[#FF6B00] transition-colors">Backgrounds</Link></li>
              <li><Link to="/artworks" className="text-gray-400 hover:text-[#FF6B00] transition-colors">Artworks</Link></li>
              <li><Link to="/dioramas" className="text-gray-400 hover:text-[#FF6B00] transition-colors">Dioramas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hotwheels@fanzone.com"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  hotwheels@fanzone.com
                </a>
              </li>
              <li className="text-gray-400">Join our community</li>
              <li className="text-gray-400">Share your creations</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1A1A1A] text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Hot Wheels Fan Zone. This is a fan-made website. Hot Wheels is a trademark of Mattel.
          </p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/backgrounds" element={<BackgroundsPage />} />
            <Route path="/artworks" element={<ArtworksPage />} />
            <Route path="/dioramas" element={<DioramasPage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
