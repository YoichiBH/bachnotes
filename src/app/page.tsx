import Navbar from "@/components/Navbar";

<Navbar />

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        <div className="mb-10">
          <h1 className="text-6xl font-bold mb-6">
            Estudia inteligente.
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl">
            Accede a apuntes, exámenes y proyectos reales de alumnos
            que ya pasaron Bachillerato.
          </p>
        </div>

        <button className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition">
          Entrar
        </button>

      </section>
    </main>
  );
}

<div className="bg-zinc-900 p-6 rounded-3xl">
  <h1 className="text-white text-2xl">
    Matemáticas
  </h1>

  <p className="text-zinc-400">
    Tema 1 completo
  </p>
</div>