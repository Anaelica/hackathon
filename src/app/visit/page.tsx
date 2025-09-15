"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setVisits(data.count));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Contador de Acessos</h1>
      {visits !== null ? (
        <p className="mt-4">Total de visitas: {visits}</p>
      ) : (
        <p className="mt-4">Carregando...</p>
      )}
    </main>
  );
}
