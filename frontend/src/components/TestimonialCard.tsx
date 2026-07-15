import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  text: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  text,
}: TestimonialCardProps) {
  return (
    <article
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-yellow-400/40
      "
    >
      {/* Estrelas */}

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Depoimento */}

      <p
        className="
        mt-6
        leading-relaxed
        text-zinc-300
        "
      >
        "{text}"
      </p>

      {/* Usuário */}

      <div className="mt-8">
        <h3
          className="
          font-bold
          text-white
          "
        >
          {name}
        </h3>

        <p
          className="
          text-sm
          text-zinc-400
          "
        >
          {role} • {company}
        </p>
      </div>
    </article>
  );
}
