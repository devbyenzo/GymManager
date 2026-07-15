import { Users, Wallet, ChartNoAxesColumn, Zap } from 'lucide-react';

import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Users,
    title: 'Gestão de alunos',
    description:
      'Cadastre alunos, acompanhe planos e mantenha todas as informações organizadas.',
  },

  {
    icon: Wallet,
    title: 'Controle financeiro',
    description:
      'Gerencie mensalidades, pagamentos e receitas da sua academia.',
  },

  {
    icon: ChartNoAxesColumn,
    title: 'Indicadores inteligentes',
    description: 'Tenha visão clara dos dados para tomar decisões melhores.',
  },

  {
    icon: Zap,
    title: 'Automação',
    description: 'Reduza tarefas manuais e economize tempo na gestão.',
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            text-sm
            font-bold
            uppercase
            tracking-widest
            text-yellow-400
            "
          >
            Funcionalidades
          </span>

          <h2
            className="
            mt-4
            text-4xl
            font-extrabold
            text-white
            "
          >
            Tudo que sua academia precisa
            <br />
            <span className="text-yellow-400">em um único sistema</span>
          </h2>

          <p
            className="
            mt-5
            text-zinc-400
            "
          >
            Uma plataforma criada para simplificar a administração e aumentar
            seus resultados.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
