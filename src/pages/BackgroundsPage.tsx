import { useState } from 'react';
import { Download, Search, Filter } from 'lucide-react';

const FILTERS = ['All', 'Racing', 'Garage', 'City', 'Desert', 'Neon', 'Retro'];

const backgrounds = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    'Speed Strip Sunset', 'Neon Garage Night', 'Asphalt Dreams', 'Desert Drifter',
    'City Lights Track', 'Retro Race Day', 'Burnout Boulevard', 'Mountain Pass',
    'Downtown Drag', 'Midnight Motorway', 'Factory Floor', 'Chrome & Concrete',
  ][i],
  category: FILTERS[1 + (i % (FILTERS.length - 1))],
  resolution: ['1920×1080', '3840×2160', '2560×1440'][i % 3],
  downloads: Math.floor(Math.random() * 900 + 100),
  hue: [20, 45, 0, 30, 200, 15, 25, 180, 210, 0, 40, 220][i],
}));

export default function BackgroundsPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = backgrounds.filter((bg) => {
    const matchSearch = bg.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === 'All' || bg.category === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2">
          <span className="text-[#FF6B00]">Backgrounds</span>
        </h1>
        <p className="text-gray-400">High-resolution backdrops for your Hot Wheels photography.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search backgrounds..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
          />
        </div>
        <div className="flex items-center gap-1 bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg p-1">
          <Filter className="w-4 h-4 text-gray-500 ml-2" />
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-[#FF6B00] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-500">No backgrounds found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((bg) => (
            <div
              key={bg.id}
              className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#FF6B00]/10 hover:border-[#FF6B00]/50 transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.1)]"
            >
              {/* Placeholder image */}
              <div
                className="w-full aspect-video relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, hsl(${bg.hue},80%,12%), hsl(${bg.hue + 20},60%,20%))`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-16 h-16 border-4 border-current rounded-full" />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `hsl(${bg.hue},100%,55%)`, boxShadow: `0 0 10px hsl(${bg.hue},100%,55%)` }}
                />
                {/* Download overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-[#FF6B00] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#FFD60A] transition-colors">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-white font-semibold text-sm truncate">{bg.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-full">{bg.category}</span>
                  <span className="text-xs text-gray-500">{bg.resolution}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Download className="w-3 h-3 text-gray-600" />
                  <span className="text-xs text-gray-600">{bg.downloads}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
