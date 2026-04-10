import { useState } from 'react';
import { Download, Search, Heart } from 'lucide-react';

const STYLES = ['All', 'Illustration', 'Poster', 'Fan Art', 'Pixel', 'Watercolor'];

const artworks = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    'Flame Series Tribute', 'Twin Mill Classic', 'Speed Racer Poster', 'Deora III Splash',
    'Hot Wheels Universe', 'Race Day Glory', 'Pixel Drag Strip', 'Chrome Dreams',
    'Bone Shaker Portrait', 'Velocita Print', 'Treasure Hunt 2026', 'Rodger Dodger Retro',
  ][i],
  style: STYLES[1 + (i % (STYLES.length - 1))],
  artist: ['CollectorKai', 'WheelsFan99', 'ArtByNova', 'DiecastDrew', 'PixelPete', 'SpeedBrush'][i % 6],
  likes: Math.floor(Math.random() * 500 + 50),
  hue: [15, 45, 200, 280, 330, 0, 180, 30, 60, 240, 20, 10][i],
}));

export default function ArtworksPage() {
  const [search, setSearch] = useState('');
  const [activeStyle, setActiveStyle] = useState('All');
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const filtered = artworks.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchStyle = activeStyle === 'All' || a.style === activeStyle;
    return matchSearch && matchStyle;
  });

  const toggleLike = (id: number) => {
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2">
          <span className="text-[#FF6B00]">Artworks</span>
        </h1>
        <p className="text-gray-400">Fan-made digital art celebrating Hot Wheels culture.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search artworks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-1 bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg p-1">
          {STYLES.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStyle(s)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeStyle === s ? 'bg-[#FF6B00] text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-500">No artworks found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <div
              key={art.id}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#FF6B00]/10 hover:border-[#FF6B00]/50 transition-all hover:shadow-[0_0_25px_rgba(255,107,0,0.12)]"
            >
              {/* Art placeholder */}
              <div
                className="w-full aspect-square relative overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at 30% 30%, hsl(${art.hue},90%,25%), hsl(${art.hue + 40},50%,8%))`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-6xl font-black opacity-10 select-none"
                    style={{ color: `hsl(${art.hue},100%,70%)` }}
                  >
                    HW
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="flex items-center gap-2 bg-[#FF6B00] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#FFD60A] transition-colors">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold truncate">{art.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <span className="text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-full">{art.style}</span>
                    <p className="text-xs text-gray-500 mt-1">by {art.artist}</p>
                  </div>
                  <button
                    onClick={() => toggleLike(art.id)}
                    className="flex items-center gap-1 text-sm transition-colors"
                    aria-label="Like"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        liked.has(art.id) ? 'fill-red-500 text-red-500' : 'text-gray-500 hover:text-red-400'
                      }`}
                    />
                    <span className={liked.has(art.id) ? 'text-red-400' : 'text-gray-500'}>
                      {art.likes + (liked.has(art.id) ? 1 : 0)}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
