import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Proprietário',
    company: 'PowerFit Academia',
    text: 'O GymManager facilitou completamente nossa gestão. Hoje conseguimos acompanhar alunos e pagamentos em poucos minutos.',
  },

  {
    name: 'Mariana Silva',
    role: 'Gerente',
    company: 'Evolution Fitness',
    text: 'A equipe ganhou muito tempo deixando processos manuais para trás. O controle financeiro ficou muito mais simples.',
  },

  {
    name: 'Rafael Oliveira',
    role: 'Administrador',
    company: 'Alpha Training',
    text: 'Finalmente temos uma visão clara do crescimento da academia e conseguimos tomar decisões melhores.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        "
      >
        {/* Título */}

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
            Depoimentos
          </span>

          <h2
            className="
            mt-4
            text-4xl
            font-extrabold
            text-white
            "
          >
            Academias crescendo
            <span className="text-yellow-400"> com o GymManager</span>
          </h2>

          <p
            className="
            mt-5
            text-zinc-400
            "
          >
            Veja como gestores estão transformando a maneira de administrar suas
            academias.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
          mt-16
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
