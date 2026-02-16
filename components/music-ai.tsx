"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicRecommender() {
  const [mood, setMood] = useState("happy");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_MUSIC_API_URL || "https://mood-based-music-recommender-main.onrender.com";

  const getPlaylist = async () => {
    setLoading(true);
    setSongs([]); // Clear เก่าออกก่อน
    try {
      const formData = new URLSearchParams();
      formData.append("mood", mood);

      const response = await fetch(`${API_URL}/get_playlist`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });

      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error("Failed to fetch playlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-[#050505] border border-green-900/30 rounded-xl font-mono shadow-[0_0_20px_rgba(0,50,0,0.2)]">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-xs text-green-900 ml-2 tracking-widest">NEURAL_LINK_V1.0</span>
      </div>

      <h3 className="text-xl text-green-500 mb-6 flex items-center gap-2">
        <span className="animate-pulse">▶</span> RUN music_recommender.exe
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-[10px] text-green-900 uppercase block mb-1">Select_Vibe</label>
          <select 
            value={mood} 
            onChange={(e) => setMood(e.target.value)}
            className="bg-black text-green-400 border border-green-900/50 p-2 w-full focus:outline-none focus:border-green-500 transition-colors"
          >
            <option value="happy">HAPPY</option>
            <option value="sad">SAD</option>
            <option value="energetic">ENERGETIC</option>
            <option value="dark">DARK</option>
            <option value="calm">CALM</option>
          </select>
        </div>

        <div className="flex items-end">
          <button 
            onClick={getPlaylist}
            disabled={loading}
            className="w-full bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-bold py-2 rounded transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "SEARCHING..." : "INITIALIZE_SCAN"}
          </button>
        </div>
      </div>

      {/* Loading State สไตล์ Terminal */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10 text-center"
          >
            <p className="text-green-500 animate-pulse mb-2 text-sm">ACCESSING_DATABASE...</p>
            <div className="w-full bg-green-900/20 h-1 max-w-xs mx-auto overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-1/2 h-full bg-green-500"
              />
            </div>
            <p className="text-[10px] text-green-900 mt-4 italic">Note: AI may take 30s to wake up on Render Free Tier</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Cards */}
      {/* Music Cards */}
<div className="grid grid-cols-1 gap-4">
  {songs.map((song, i) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      key={i} 
      className="group border border-green-900/30 bg-black/60 p-4 hover:border-green-500/40 transition-all rounded-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-green-400 text-sm font-bold group-hover:text-green-300 transition-colors">
            <span className="text-green-900 mr-2">[{String(i+1).padStart(2, '0')}]</span>
            {song.track_name}
          </p>
          <p className="text-green-900 text-[11px] uppercase tracking-tighter mt-1">
            Artist: {song.track_artist}
          </p>
        </div>
        <div className="text-[9px] text-green-900 border border-green-900 px-2 py-0.5 animate-pulse">
          READY_TO_PLAY
        </div>
      </div>

      {/* Spotify Embed Player */}
      {song.track_id ? (
        <div className="mt-3 overflow-hidden rounded-md border border-green-900/20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <iframe
            src={`https://open.spotify.com/embed/track/${song.track_id}?utm_source=generator&theme=0`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="opacity-70 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>
      ) : (
        <p className="text-[10px] text-red-900/50 italic mt-2">! TRACK_ID_NOT_FOUND</p>
      )}
    </motion.div>
  ))}
</div>
    </div>
  );
}