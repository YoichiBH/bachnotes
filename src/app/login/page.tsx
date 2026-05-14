export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="bg-zinc-900 p-10 rounded-3xl w-100">
        
        <h1 className="text-3xl font-bold mb-6">
          Iniciar sesión
        </h1>

        <input
          placeholder="Correo"
          className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
        />

        <input
          placeholder="Contraseña"
          type="password"
          className="w-full p-3 rounded-xl bg-zinc-800 mb-4"
        />

        <button className="w-full bg-white text-black py-3 rounded-xl">
          Entrar
        </button>

      </div>
    </main>
  );
}