export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tight">
          BachNotes
        </h1>

        <p className="text-zinc-400 mt-4 text-lg max-w-2xl">
          Plataforma de apuntes, exámenes y recursos de Bachillerato.
          Accede, comparte y mejora tu rendimiento académico.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
            Explorar apuntes
          </button>

          <button className="bg-zinc-900 px-5 py-2 rounded-xl hover:bg-zinc-800 transition">
            Subir contenido
          </button>
        </div>
      </section>

      {/* SECCIONES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-semibold mb-6 text-zinc-300">
          Accesos rápidos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition cursor-pointer">
            <h3 className="font-semibold">📘 Apuntes</h3>
            <p className="text-zinc-400 text-sm mt-1">
              Resúmenes organizados por asignatura.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition cursor-pointer">
            <h3 className="font-semibold">📝 Exámenes</h3>
            <p className="text-zinc-400 text-sm mt-1">
              Modelos reales de años anteriores.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition cursor-pointer">
            <h3 className="font-semibold">📂 Proyectos</h3>
            <p className="text-zinc-400 text-sm mt-1">
              Trabajos y prácticas destacadas.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}