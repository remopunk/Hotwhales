import { useState, useRef } from 'react';
import { Upload, Image, Palette, Box, CheckCircle, AlertCircle } from 'lucide-react';

const CATEGORIES = [
  { value: 'background', label: 'Background', icon: Image },
  { value: 'artwork', label: 'Artwork', icon: Palette },
  { value: 'diorama', label: 'Diorama', icon: Box },
];

type Status = 'idle' | 'uploading' | 'success' | 'error';

export default function UploadPage() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type.startsWith('image/')) setFile(dropped);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !title || !file) return;
    setStatus('uploading');
    // Simulate upload
    setTimeout(() => setStatus('success'), 1800);
  };

  const reset = () => {
    setCategory('');
    setTitle('');
    setDescription('');
    setFile(null);
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h2 className="text-3xl font-black text-white mb-3">Submission Received!</h2>
        <p className="text-gray-400 mb-8">
          Thanks for contributing. Your upload is under review and will be published shortly.
        </p>
        <button
          onClick={reset}
          className="bg-gradient-to-r from-[#FF6B00] to-[#FFD60A] text-black font-bold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all"
        >
          Upload Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-white mb-2">
          <span className="text-[#FF6B00]">Upload</span>
        </h1>
        <p className="text-gray-400">Share your creations with the Hot Wheels community.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">Category *</label>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setCategory(value)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  category === value
                    ? 'border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]'
                    : 'border-[#FF6B00]/20 bg-[#1A1A1A] text-gray-400 hover:border-[#FF6B00]/40 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="title">
            Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Flame Series Sunset Background"
            required
            className="w-full bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]/60 transition-colors"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell the community about your creation..."
            rows={3}
            className="w-full bg-[#1A1A1A] border border-[#FF6B00]/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00]/60 transition-colors resize-none"
          />
        </div>

        {/* File drop zone */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">File *</label>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
            className={`relative border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${
              dragOver
                ? 'border-[#FF6B00] bg-[#FF6B00]/5'
                : file
                ? 'border-green-500/50 bg-green-500/5'
                : 'border-[#FF6B00]/20 bg-[#1A1A1A] hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/5'
            }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
            />
            {file ? (
              <div className="flex flex-col items-center gap-2">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <p className="text-white font-medium">{file.name}</p>
                <p className="text-gray-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setFile(null); }}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors mt-1"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-[#FF6B00]" />
                <p className="text-white font-medium">Drop your image here</p>
                <p className="text-gray-500 text-sm">or click to browse · PNG, JPG, WEBP up to 20MB</p>
              </div>
            )}
          </div>
        </div>

        {/* Guidelines */}
        <div className="flex gap-3 bg-[#1A1A1A] border border-[#FF6B00]/10 rounded-xl p-4">
          <AlertCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-400">
            <p className="font-semibold text-gray-300 mb-1">Submission Guidelines</p>
            <ul className="space-y-0.5 list-disc list-inside">
              <li>Only upload original or properly licensed content</li>
              <li>Minimum resolution: 1920×1080 for backgrounds</li>
              <li>No watermarks or promotional content</li>
              <li>Hot Wheels trademark of Mattel — fan content only</li>
            </ul>
          </div>
        </div>

        <button
          type="submit"
          disabled={!category || !title || !file || status === 'uploading'}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#FFD60A] text-black font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
        >
          {status === 'uploading' ? (
            <>
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Uploading…
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" /> Submit for Review
            </>
          )}
        </button>
      </form>
    </div>
  );
}
