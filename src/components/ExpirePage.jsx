import React from 'react'

function ExpirePage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center">
        <div className="max-w-md w-full px-6 text-center">
           
          <div className="bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h1 className="text-2xl font-bold mb-3">
              Paste Unavailable
            </h1>

            <p className="text-slate-400 mb-6">
              This paste has either expired or reached its view limit and has
              been permanently deleted.
            </p>

            
            <div className="h-px bg-slate-800 my-6" />

            <div className="flex flex-col gap-3">
              <button
                onClick={() => window.location.href = "/create"}
                className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium"
              >
                Create a New Paste
              </button>

              <button
                onClick={() => window.location.href = "/"}
                className="w-full py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition"
              >
                Go to Home
              </button>
            </div>
          </div>

           
          <p className="mt-6 text-xs text-slate-500">
            Expired pastes are not recoverable for privacy reasons.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExpirePage