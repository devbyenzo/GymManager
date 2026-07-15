export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40">
      {/* Glow amarelo no fundo */}
      <div
        className="
        absolute
        left-1/2
        top-20
        -z-10
        h-96
        w-96
        -translate-x-1/2
        rounded-full
        bg-yellow-400/20
        blur-3xl
        "
      />

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-12
        px-6
        lg:grid-cols-2
        "
      >
        {/* Texto */}
        <div>
          <span
            className="
            inline-flex
            rounded-full
            border
            border-yellow-400/30
            bg-yellow-400/10
            px-4
            py-2
            text-sm
            font-medium
            text-yellow-400
            "
          >
            Gestão inteligente para academias
          </span>

          <h1
            className="
            mt-6
            text-5xl
            font-extrabold
            leading-tight
            tracking-tight
            text-white
            md:text-6xl
            "
          >
            Sua academia crescendo.
            <br />
            <span className="text-yellow-400">Sua gestão simplificada.</span>
          </h1>

          <p
            className="
            mt-6
            max-w-xl
            text-lg
            leading-relaxed
            text-zinc-400
            "
          >
            Controle alunos, pagamentos e indicadores importantes em uma única
            plataforma criada para academias modernas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
              rounded-full
              bg-yellow-400
              px-8
              py-4
              font-bold
              text-black
              transition
              hover:bg-yellow-300
              "
            >
              Começar agora
            </button>

            <button
              className="
              rounded-full
              border
              border-white/20
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-white/10
              "
            >
              Ver demonstração
            </button>
          </div>

          {/* Estatísticas */}
          <div
            className="
            mt-12
            flex
            gap-10
            "
          >
            <div>
              <strong className="text-3xl text-white">600+</strong>

              <p className="text-sm text-zinc-500">Alunos gerenciados</p>
            </div>

            <div>
              <strong className="text-3xl text-white">99%</strong>

              <p className="text-sm text-zinc-500">Controle financeiro</p>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div
          className="
          relative
          "
        >
          <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-zinc-900/80
            p-6
            shadow-2xl
            "
          >
            <div className="flex justify-between">
              <span className="text-zinc-400">Dashboard</span>

              <span className="text-yellow-400">● Online</span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card title="Alunos ativos" value="642" />

              <Card title="Receita mensal" value="R$45.200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
      rounded-2xl
      bg-white/5
      p-5
      "
    >
      <p className="text-sm text-zinc-400">{title}</p>

      <strong className="mt-2 block text-3xl text-white">{value}</strong>
    </div>
  );
}
