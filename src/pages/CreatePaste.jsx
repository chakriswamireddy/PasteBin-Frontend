import { useState } from "react";



export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [pasteData, setPasteData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setPasteData(null);

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/pastes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        ttl_seconds: ttl ? Number(ttl) : null,
        max_views: maxViews ? Number(maxViews) : null,
      }),
    });

    const data = await res.json();
    setPasteData(data);
    setLoading(false);
  };


  const resetForm = () => {
    setContent("");
    setTtl("");
    setMaxViews("");
    setPasteData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-3xl mx-auto px-6 pt-24">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Create a <span className="text-indigo-400">Paste</span>
          </h1>
          <p className="mt-3 text-slate-400">
            Share text securely with optional expiry and view limits.
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-xl">
          {/* Textarea */}
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Paste Content
          </label>
          <textarea
            rows={7}
            placeholder="Paste your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Time to Live (seconds)
              </label>
              <input
                type="number"
                placeholder="Optional"
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Max Views
              </label>
              <input
                type="number"
                placeholder="Optional"
                value={maxViews}
                onChange={(e) => setMaxViews(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading || !content}
            className="mt-8 w-full py-3 rounded-xl font-medium bg-indigo-500 hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating..." : "Create Paste"}
          </button>

          {/* Result */}
          {pasteData?.id && (
            <div className="mt-10 space-y-5">
              {/* Gradient animated border */}
              <div
                onClick={() => navigate(`/pastes/${pasteData.id}`)}
                className="relative cursor-pointer rounded-2xl p-[2px]
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                 animate-shimmer"
              >
                <div className="rounded-2xl bg-slate-950 p-5 border border-slate-800 animate-glow">
                  <p className="text-sm text-slate-400 mb-1">
                    Your paste is ready
                  </p>

                  <p className="text-indigo-400 font-medium break-all">
                     {pasteData?.url}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Click to open paste
                  </p>
                </div>
              </div>


              <button
                onClick={resetForm}
                className="w-full py-3 rounded-xl border border-slate-700
                 hover:bg-slate-800 transition"
              >
                Create New Paste
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
