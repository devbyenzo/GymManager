import StatCard from './StatCard';
import PaymentRow from './PaymentRow';

const stats = [
  {
    label: 'Alunos ativos',
    value: '642',
    trend: '+12% este mês',
  },
  {
    label: 'Receita mensal',
    value: 'R$45.200',
    trend: '+8% crescimento',
  },
  {
    label: 'Planos ativos',
    value: '318',
    trend: '+24 novos',
  },
];

const payments = [
  {
    name: 'Carlos Oliveira',
    plan: 'Premium',
    status: 'Pago',
  },
  {
    name: 'Ana Souza',
    plan: 'Básico',
    status: 'Pendente',
  },
  {
    name: 'Lucas Mendes',
    plan: 'Gold',
    status: 'Pago',
  },
];

export default function DashboardPreview() {
  return (
    <section className="py-24">
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        <div
          className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-900/80
          p-8
          shadow-2xl
          "
        >
          {/* Header */}

          <div
            className="
            flex
            items-center
            justify-between
            "
          >
            <div>
              <p className="text-sm text-zinc-400">Painel administrativo</p>

              <h2
                className="
                mt-1
                text-2xl
                font-bold
                text-white
                "
              >
                GymManager Dashboard
              </h2>
            </div>

            <span
              className="
              rounded-full
              bg-green-400/10
              px-4
              py-2
              text-sm
              font-semibold
              text-green-400
              "
            >
              ● Online
            </span>
          </div>

          {/* Cards */}

          <div
            className="
            mt-8
            grid
            gap-5
            md:grid-cols-3
            "
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Payments */}

          <div
            className="
            mt-8
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            "
          >
            <h3
              className="
              text-lg
              font-bold
              text-white
              "
            >
              Últimos pagamentos
            </h3>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-zinc-400">Nome</span>
              <span className="text-sm text-zinc-400">Plano</span>
              <span className="text-sm text-zinc-400">Status</span>
            </div>

            <div className="mt-4">
              {payments.map((payment) => (
                <PaymentRow key={payment.name} {...payment} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
