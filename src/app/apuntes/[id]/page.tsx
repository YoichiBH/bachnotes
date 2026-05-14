import Link from "next/link";
import { notFound } from "next/navigation";

const apuntesData: Record<string, any> = {
  derivadas: {
    titulo: "Derivadas",
    asignatura: "Matemáticas",
    contenido: `
Las derivadas miden la tasa de cambio de una función.

📌 REGLAS BÁSICAS

1. (x^n)' = n·x^(n-1)
2. (sin x)' = cos x
3. (cos x)' = -sin x

📌 EJEMPLO

f(x) = x²  
f'(x) = 2x

📌 INTERPRETACIÓN

La derivada representa la pendiente de la recta tangente.
    `,
  },

  historia: {
    titulo: "Segunda Guerra Mundial",
    asignatura: "Historia",
    contenido: `
📌 FECHAS CLAVE

- 1939: Inicio de la guerra
- 1941: Pearl Harbor
- 1945: Fin de la guerra

📌 BANDOS

- Eje: Alemania, Italia, Japón
- Aliados: Reino Unido, EEUU, URSS

📌 CONSECUENCIAS

- ONU
- Guerra Fría
- Reconstrucción de Europa
    `,
  },

  mru: {
    titulo: "Movimiento Rectilíneo Uniforme",
    asignatura: "Física",
    contenido: `
📌 FÓRMULA PRINCIPAL

v = e / t

📌 VARIABLES

- v = velocidad
- e = espacio
- t = tiempo

📌 CARACTERÍSTICAS

- Velocidad constante
- Trayectoria recta
    `,
  },
};

export default function ApuntePage({ params }: any) {
  const apunte = apuntesData[params.id];

  if (!apunte) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* NAVBAR SUPERIOR */}
      <header className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="text-lg font-semibold hover:opacity-80 transition"
          >
            BachNotes
          </Link>

          <Link
            href="/apuntes"
            className="text-sm text-zinc-400 hover:text-white transition"
          >
            ← Volver a apuntes
          </Link>

        </div>
      </header>

      {/* CONTENIDO */}
      <section className="max-w-3xl mx-auto px-6 py-16">

        {/* ETIQUETA */}
        <div className="mb-6">
          <span className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1 rounded-full">
            {apunte.asignatura}
          </span>
        </div>

        {/* TITULO */}
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          {apunte.titulo}
        </h1>

        {/* INFO */}
        <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
          <span>BachNotes</span>
          <span>•</span>
          <span>Lectura 3 min</span>
        </div>

        {/* SEPARADOR */}
        <div className="w-full h-px bg-zinc-800 my-10" />

        {/* CONTENIDO */}
        <article className="prose prose-invert max-w-none">
          <div className="text-zinc-300 leading-8 whitespace-pre-line text-[17px]">
            {apunte.contenido}
          </div>
        </article>

      </section>

    </main>
  );
}