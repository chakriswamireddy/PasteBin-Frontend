import React from 'react'

function Loader() {
    return (
        <>
            <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center text-white">
                <div className="flex flex-col items-center gap-4">

                    <div className="w-72 bg-slate-900/70 border border-slate-800 rounded-xl p-4 font-mono text-sm text-slate-400 space-y-2">
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-5/6" />
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-4/6" />
                        <div className="h-3 bg-slate-800 rounded animate-pulse w-3/6" />
                    </div>


                    <p className="text-slate-400 text-sm tracking-wide">
                        Retrieving paste securely…
                    </p>
                </div>
            </div>

        </>
    )
}

export default Loader