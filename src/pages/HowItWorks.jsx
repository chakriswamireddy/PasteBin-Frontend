import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-32">
     
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">
            How <span className="text-indigo-400">PasteVault</span> Works
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Share text securely with automatic expiration and view limits.
            Simple, fast, and private by design.
          </p>
        </div>

  
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step
            step="01"
            title="Create a Paste"
            description="Paste your text and optionally set a time limit or maximum number of views."
          />

          <Step
            step="02"
            title="Share the Link"
            description="A unique link is generated instantly. Share it with anyone you choose."
          />

          <Step
            step="03"
            title="Auto Destruct"
            description="Once the paste expires or runs out of views, it is permanently deleted."
          />
        </div>

 
        <div className="mt-20 text-center">
          <Link
            to="/create"
            className="inline-flex items-center px-8 py-4 rounded-xl
                       bg-indigo-500 hover:bg-indigo-600 transition
                       font-medium text-lg"
          >
            Create Your First Paste
          </Link>
        </div>
   
      </div>
    </div>
  );
}

function Step({ step, title, description }) {
  return (
    <div className="relative bg-slate-900/70 backdrop-blur border border-slate-800 rounded-2xl p-6">
      <span className="absolute -top-4 left-6 px-3 py-1 rounded-full
                       bg-indigo-500 text-xs font-semibold">
        {step}
      </span>

      <h3 className="text-xl font-semibold mt-4 mb-3">
        {title}
      </h3>
      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
}
