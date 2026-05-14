import { notFound } from "next/navigation";

const apuntesData: Record<string, any> = {
  derivadas: {
    titulo: "Derivadas",
    asignatura: "Matemáticas",
    contenido: `
Las derivadas miden la tasa de cambio de una función.

📌 REGLAS BÁSICAS:

1. (x^n)' = n·x^(n-1)
2. (sin x)' = cos x
3. (cos x)' = -sin x

📌 EJEMPLO:

f(x) = x²  
f'(x) = 2x

📌 INTERPRETACIÓN:
La derivada representa la pendiente de la recta tangente.
    `,
  },

  historia: {
    titulo: "Segunda Guerra Mundial",
    asignatura: "Historia",
    contenido: `
📌 FECHAS CLAVE:

- 1939: Inicio de la guerra
- 1941: Pearl Harbor
- 1945: Fin de la guerra

📌 BANDOS:

- Eje: Alemania, Italia, Japón
- Aliados: Reino Unido, EEUU, URSS

📌 CONSECUENCIAS:
- ONU
- Guerra Fría
- Reconstrucción de Europa
    `,
  },

  mru: {
    titulo: "Movimiento Rectilíneo Uniforme",
    asignatura: "Física",
    contenido: `
📌 FÓRMULA PRINCIPAL:

v = e / t

📌 VARIABLES:
- v = velocidad
- e = espacio
- t = tiempo

📌 CARACTERÍSTICAS:
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
      
      {/* HEADER */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        
        <span className="text-sm text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
          {apunte.asignatura}
        </span>

        <h1 className="text-4xl font-bold mt-4">
          {apunte.titulo}
        </h1>

        {/* CONTENIDO */}
        <article className="mt-10 text-zinc-300 leading-relaxed whitespace-pre-line">
          {apunte.contenido}
        </article>

      </section>

    </main>
  );
}