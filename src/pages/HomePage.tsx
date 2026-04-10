import { Link } from 'react-router-dom';
import { Image, Palette, Box, Upload, ArrowRight, Download, Users, Star } from 'lucide-react';

const categories = [
  {
    path: '/backgrounds',
    label: 'Backgrounds',
    icon: Image,
    description: 'High-res wallpapers and photo backdrops for your shoots.',
    count: '120+',
    color: 'from-orange-600 to-red-700',
  },
  {
    path: '/artworks',
    label: 'Artworks',
    icon: Palette,
    description: 'Fan-made digital art and illustrated prints.',
    count: '85+',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    path: '/dioramas',
    label: 'Dioramas',
    icon: Box,
    description: 'Scene setups and diorama inspiration for collectors.',
    count: '60+',
    color: 'from-red-700 to-rose-900',
  },
];

const stats = [
  { icon: Download, value: '10K+', label: 'Downloads' },
  { icon: Users, value: '3.2K', label: 'Community Members' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Image, value: '265+', label: 'Total Assets' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-24 px-4">
        {/* Background glow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#FFD60A]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            <span className="text-[#FF6B00] text-sm font-medium">Community Fan Site</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">FUEL YOUR </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFD60A]">
              COLLECTION
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Free downloads for Hot Wheels fans — backgrounds, artworks, and dioramas
            crafted by collectors, for collectors.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/backgrounds"
              className="flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FFD60A] text-black font-bold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all"
            >
              Browse Assets <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/upload"
              className="flex items-center gap-2 border border-[#FF6B00]/50 text-[#FF6B00] font-bold px-8 py-3 rounded-lg hover:bg-[#FF6B00]/10 transition-all"
            >
              <Upload className="w-4 h-4" /> Upload Yours
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#FF6B00]/20 bg-[#1A1A1A]/50 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="w-5 h-5 text-[#FF6B00] mb-2" />
              <span className="text-2xl font-black text-white">{value}</span>
              <span className="text-gray-500 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white mb-2">Browse by Category</h2>
          <p className="text-gray-500">Everything a Hot Wheels enthusiast needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(({ path, label, icon: Icon, description, count, color }) => (
            <Link
              key={path}
              to={path}
              className="group relative overflow-hidden bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-2xl p-6 hover:border-[#FF6B00]/60 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{label}</h3>
                <span className="text-[#FF6B00] text-sm font-medium bg-[#FF6B00]/10 px-2 py-0.5 rounded-full">{count}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{description}</p>
              <div className="flex items-center gap-1 text-[#FF6B00] text-sm font-medium">
                Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#FF6B00]/30 rounded-3xl p-12">
          <h2 className="text-3xl font-black text-white mb-4">Have Something to Share?</h2>
          <p className="text-gray-400 mb-8">
            Contribute your backgrounds, artworks, or diorama photos to the community.
          </p>
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FFD60A] text-black font-bold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all"
          >
            <Upload className="w-4 h-4" /> Upload Now
          </Link>
        </div>
      </section>
    </div>
  );
}
