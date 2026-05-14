"use client";

import Link from "next/link";
import { useState } from "react";

export default function ApuntesPage() {
  
  const apuntes = [
    {
      id: "derivadas",
      titulo: "Derivadas",
      asignatura: "Matemáticas",
      descripcion: "Reglas básicas y ejercicios resueltos.",
    },
    {
      id: "historia",
      titulo: "La Segunda Guerra Mundial",
      asignatura: "Historia",
      descripcion: "Resumen completo con fechas clave.",
    },
    {
      id: "mru",
      titulo: "Movimiento Rectilíneo",
      asignatura: "Física",
      descripcion: "Fórmulas y problemas típicos de examen.",
    },
    {
      id: "texto-argumentativo",
      titulo: "Texto argumentativo",
      asignatura: "Lengua",
      descripcion: "Estructura y ejemplos para selectividad.",
    },
  ];

  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState("Todas");

  const apuntesFiltrados = apuntes.filter((apunte) => {
    
    const coincideBusqueda =
      apunte.titulo.toLowerCase().includes(search.toLowerCase()) ||
      apunte.asignatura.toLowerCase().includes(search.toLowerCase());

    const coincideFiltro =
      filtro === "Todas" || apunte.asignatura === filtro;

    return coincideBusqueda && coincideFiltro;
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold">
          📘 Apuntes
        </h1>

        <p className="text-zinc-400 mt-2">
          Explora contenido organizado por asignatura.
        </p>

        {/* CONTROLES */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">

          {/* BUSCADOR */}
          <input
            type="text"
            placeholder="Buscar apuntes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl w-full outline-none focus:border-zinc-600"
          />

          {/* FILTRO */}
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl outline-none focus:border-zinc-600"
          >
            <option>Todas</option>
            <option>Matemáticas</option>
            <option>Historia</option>
            <option>Física</option>
            <option>Lengua</option>
          </select>

        </div>

      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {apuntesFiltrados.map((apunte, index) => (
            <Link
              href={`/apuntes/${apunte.id}`}
              key={index}
              className="bg-zinc-900 p-5 rounded-2xl hover:bg-zinc-800 transition block"
            >
              
              <div className="flex items-start justify-between">

                <h2 className="text-lg font-semibold">
                  {apunte.titulo}
                </h2>

                <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-lg">
                  {apunte.asignatura}
                </span>

              </div>

              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                {apunte.descripcion}
              </p>

              <div className="mt-5 text-sm text-white underline underline-offset-4">
                Ver apunte →
              </div>

            </Link>
          ))}

        </div>

        {/* VACÍO */}
        {apuntesFiltrados.length === 0 && (
          <div className="text-center text-zinc-500 mt-16">
            No se encontraron apuntes.
          </div>
        )}

      </section>

    </main>
  );
}