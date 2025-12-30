import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function ViewPaste() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/pastes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Expired or not found");
        return res.json();
      })
      .then(setData)
      .catch(() => setError("Paste expired or no longer available"));
  }, [id]);

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-12 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-4">
          {/* Animated code lines */}
          <div className="w-72 bg-slate-900/70 border border-slate-800 rounded-xl p-4 font-mono text-sm text-slate-400 space-y-2">
            <div className="h-3 bg-slate-800 rounded animate-pulse w-5/6" />
            <div className="h-3 bg-slate-800 rounded animate-pulse w-4/6" />
            <div className="h-3 bg-slate-800 rounded animate-pulse w-3/6" />
          </div>
  
          {/* Status text */}
          <p className="text-slate-400 text-sm tracking-wide">
            Retrieving paste securely…
          </p>
        </div>
      </div>
    );
  }
  
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-3xl mx-auto px-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Secure <span className="text-indigo-400">Paste</span>
          </h1>
          <p className="mt-2 text-slate-400">
            This paste may expire automatically based on its limits.
          </p>
        </div>
  
        {/* Content Card */}
        <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6 shadow-xl">
          <pre className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-slate-200 whitespace-pre-wrap break-words max-h-[60vh] overflow-auto">
            {data.content}
          </pre>
  
          {/* Metadata */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            {data.viewsRemaining !== null && (
              <div>
                <span className="text-slate-500">Views remaining</span>
                <p className="text-white font-medium">
                  {data.viewsRemaining}
                </p>
              </div>
            )}
  
            {data.expiresAt && (
              <div>
                <span className="text-slate-500">Expires at</span>
                <p className="text-white font-medium">
                  {new Date(data.expiresAt).toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
  