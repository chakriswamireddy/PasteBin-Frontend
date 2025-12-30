import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-xl font-semibold tracking-tight">
          Paste<span className="text-indigo-400">Vault</span>
        </h1>
        <Link
          to="/create"
          className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition"
        >
          Create Paste
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 mt-24">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold leading-tight">
            Share text securely.
            <br />
            <span className="text-indigo-400">It disappears automatically.</span>
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            PasteVault lets you share text snippets with optional expiration
            time and view limits. Once a limit is reached, your paste is
            permanently deleted.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/create"
              className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium"
            >
              Create a Paste
            </Link>
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition"
            >
              How it works
            </a>
          </div>
        </div>
      </main>

      {/* Features */}
      <section
        id="how-it-works"
        className="max-w-7xl mx-auto px-6 mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <Feature
          title="Time-based expiry"
          description="Set a TTL so your paste automatically expires after a fixed time."
        />
        <Feature
          title="View-limited access"
          description="Restrict how many times a paste can be opened."
        />
        <Feature
          title="Automatic deletion"
          description="Once expired or consumed, the paste is permanently removed."
        />
      </section>

      {/* Footer */}
      <footer className="mt-32 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        Built for secure, temporary sharing.
      </footer>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export default Home;
