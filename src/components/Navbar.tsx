import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition"
        >
          BachNotes
        </Link>

        {/* NAVEGACIÓN */}
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          
          <Link
            href="/"
            className="hover:text-white transition"
          >
            Inicio
          </Link>

          <Link
            href="/apuntes"
            className="hover:text-white transition"
          >
            Apuntes
          </Link>

          <Link
            href="/examenes"
            className="hover:text-white transition"
          >
            Exámenes
          </Link>

        </nav>

      </div>

    </header>
  );
}