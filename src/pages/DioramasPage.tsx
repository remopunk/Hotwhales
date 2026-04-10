import { useState } from 'react';
import { Download, Search, Eye } from 'lucide-react';

const THEMES = ['All', 'Race Track', 'Garage', 'City Street', 'Off-Road', 'Futuristic'];

const dioramas = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: [
    'Canyon Jump Setup', 'Garage Workshop Scene', 'City Chase Diorama',
    'Desert Rally Stage', 'Neon Raceway Night', 'Loop-the-Loop Arena',
    'Junkyard Circuit', 'Futuristic Speedway', 'Mountain Hairpin',
  ][i],
  theme: THEMES[1 + (i % (THEMES.length - 1))],
  creator: ['DieCastDave', 'SceneSetSam', 'MiniWorldMike', 'CollectorKai', 'DioramaQueen'][i % 5],
  views: Math.floor(Math.random() * 2000 + 300),
  difficulty: ['Beginner', 'Intermediate', 'Advanced'][i % 3],
  hue: [25, 120, 200, 35, 280, 0, 45, 190, 15][i],
}));

const difficultyColor: Record<string, string> = {
  Beginner: 'text-green-400 bg-green-400/10',
  Intermediate: 'text-yellow-400 bg-yellow-400/10',
  Advanced: 'text-red-400 bg-red-400/10',
};

export default function DioramasPage() {
  const [search, setSearch] = useState('');
  const [activeTheme, setActiveTheme] = useState('All');

  const filtered = dioramas.filter((d) => {
    const matchSearch = d.title.toLowerCase().includes(search.toLowerCase());
    const matchTheme = activeTheme === 'All' || d.theme === activeTheme;
    return matchSearch && matchTheme;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2">
          <span className="text-[#FF6B00]">Dioramas</span>
        </h1>
        <p className="text-gray-400">Scene setups and diorama inspiration from the community.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search dioramas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-1 bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg p-1">
          {THEMES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTheme(t)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTheme === t ? 'bg-[#FF6B00] text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-gray-500">No dioramas found.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <div
              key={d.id}
              className="group bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#FF6B00]/10 hover:border-[#FF6B00]/50 transition-all hover:shadow-[0_0_25px_rgba(255,107,0,0.12)]"
            >
              {/* Scene placeholder */}
              <div
                className="w-full aspect-[4/3] relative overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, hsl(${d.hue},60%,10%), hsl(${d.hue + 30},40%,18%))`,
                }}
              >
                {/* Stylized scene elements */}
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-[#FF6B00]/30 rounded" />
                <div className="absolute bottom-8 left-8 right-8 h-px bg-white/10 rounded" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 rounded"
                  style={{ background: `hsl(${d.hue},90%,55%)`, opacity: 0.3 }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="flex items-center gap-2 bg-[#FF6B00] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#FFD60A] transition-colors">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold truncate">{d.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">by {d.creator}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-2">
                    <span className="text-xs text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-0.5 rounded-full">{d.theme}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyColor[d.difficulty]}`}>
                      {d.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Eye className="w-3 h-3" /> {d.views.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
