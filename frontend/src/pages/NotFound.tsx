import { Dumbbell, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div
        className="
        max-w-xl
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-12
        text-center
        backdrop-blur-xl
        "
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400/10">
          <Dumbbell size={46} className="text-yellow-400" />
        </div>

        <h1
          className="
          mt-8
          text-7xl
          font-black
          text-yellow-400
          "
        >
          404
        </h1>

        <h2
          className="
          mt-4
          text-3xl
          font-bold
          text-white
          "
        >
          Esse treino não existe.
        </h2>

        <p
          className="
          mt-6
          text-zinc-400
          leading-relaxed
          "
        >
          Parece que você tentou acessar uma página que ainda não foi criada ou
          foi removida.
        </p>

        <Link
          to="/"
          className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-yellow-400
          px-8
          py-4
          font-bold
          text-black
          transition
          hover:scale-105
          hover:bg-yellow-300
          "
        >
          <ArrowLeft size={18} />
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
