export default function CTA() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-yellow-400/20
          bg-gradient-to-br
          from-yellow-400/10
          via-zinc-900
          to-black
          p-16
          text-center
          "
        >
          {/* Glow */}

          <div
            className="
            absolute
            left-1/2
            top-0
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-yellow-400/10
            blur-3xl
            "
          />

          <div className="relative">
            <span
              className="
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-yellow-400
              "
            >
              GymManager
            </span>

            <h2
              className="
              mt-8
              text-5xl
              font-extrabold
              leading-tight
              text-white
              "
            >
              Pronto para transformar
              <br />
              sua academia?
            </h2>

            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-zinc-400
              "
            >
              Centralize alunos, pagamentos, indicadores e gestão em uma
              plataforma feita para quem quer crescer.
            </p>

            <button
              className="
              mt-10
              rounded-full
              bg-yellow-400
              px-10
              py-5
              text-lg
              font-bold
              text-black
              transition
              hover:scale-105
              hover:bg-yellow-300
              "
            >
              Começar Gratuitamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
