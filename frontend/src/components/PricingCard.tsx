import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <article
      className={`
      relative
      rounded-3xl
      border
      p-8
      transition-all
      duration-300
      hover:-translate-y-2

      ${
        highlighted
          ? `
          border-yellow-400
          bg-yellow-400/5
          shadow-xl
          `
          : `
          border-white/10
          bg-white/5
          `
      }
      `}
    >
      {highlighted && (
        <span
          className="
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-yellow-400
            px-4
            py-1
            text-sm
            font-bold
            text-black
            "
        >
          Mais popular
        </span>
      )}

      <h3
        className="
        text-xl
        font-bold
        text-white
        "
      >
        {name}
      </h3>

      <p
        className="
        mt-3
        text-sm
        text-zinc-400
        "
      >
        {description}
      </p>

      <div className="mt-6">
        <span
          className="
          text-4xl
          font-extrabold
          text-white
          "
        >
          {price}
        </span>

        <span className="text-zinc-400">/mês</span>
      </div>

      <ul
        className="
        mt-8
        space-y-4
        "
      >
        {features.map((feature) => (
          <li
            key={feature}
            className="
              flex
              items-center
              gap-3
              text-zinc-300
              "
          >
            <Check size={18} className="text-yellow-400" />

            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`
        mt-10
        w-full
        rounded-full
        py-3
        font-bold
        transition

        ${
          highlighted
            ? `
          bg-yellow-400
          text-black
          hover:bg-yellow-300
          `
            : `
          border
          border-white/20
          text-white
          hover:bg-white/10
          `
        }

        `}
      >
        Começar agora
      </button>
    </article>
  );
}
