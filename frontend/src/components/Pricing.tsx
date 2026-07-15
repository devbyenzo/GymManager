import PricingCard from './PricingCard';

const plans = [
  {
    name: 'Starter',
    price: 'R$99',
    description:
      'Ideal para academias pequenas começando a digitalizar sua gestão.',

    features: [
      'Até 200 alunos',
      'Cadastro de alunos',
      'Controle de planos',
      'Gestão básica',
    ],
  },

  {
    name: 'Professional',
    price: 'R$199',
    description: 'Para academias que querem crescer com dados e automação.',

    highlighted: true,

    features: [
      'Alunos ilimitados',
      'Controle financeiro',
      'Dashboard inteligente',
      'Relatórios completos',
      'Suporte prioritário',
    ],
  },

  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Soluções completas para redes de academias.',

    features: [
      'Multi unidades',
      'API personalizada',
      'Integrações externas',
      'Suporte dedicado',
    ],
  },
];

export default function Pricing() {
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
          mx-auto
          max-w-3xl
          text-center
          "
        >
          <span
            className="
            text-sm
            font-bold
            uppercase
            tracking-widest
            text-yellow-400
            "
          >
            Planos
          </span>

          <h2
            className="
            mt-4
            text-4xl
            font-extrabold
            text-white
            "
          >
            Escolha o plano ideal
            <span className="text-yellow-400"> para sua academia</span>
          </h2>

          <p
            className="
            mt-5
            text-zinc-400
            "
          >
            Comece pequeno e evolua conforme seu negócio cresce.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          gap-6
          lg:grid-cols-3
          "
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
