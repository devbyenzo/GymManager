export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight">
          Gym
          <span className="text-yellow-400">Manager</span>
        </div>

        {/* Links */}
        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a className="transition hover:text-white">Funcionalidades</a>

          <a className="transition hover:text-white">Soluções</a>

          <a className="transition hover:text-white">Planos</a>
        </div>

        {/* Botão */}
        <button
          className="
          rounded-full
          bg-yellow-400
          px-6
          py-3
          font-semibold
          text-black
          transition
          hover:bg-yellow-300
          "
        >
          Entrar
        </button>
      </nav>
    </header>
  );
}
