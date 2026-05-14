export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-zinc-800">
      
      <h1 className="text-xl font-bold">
        BachNotes
      </h1>

      <input
        placeholder="Buscar..."
        className="bg-zinc-900 px-4 py-2 rounded-xl"
      />

    </nav>
  );
}