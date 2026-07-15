import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-zinc-900/50
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-yellow-400/40
      hover:bg-zinc-900
      "
    >
      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-yellow-400/10
        text-yellow-400
        transition
        group-hover:scale-110
        "
      >
        <Icon size={28} />
      </div>

      <h3
        className="
        mt-6
        text-xl
        font-bold
        text-white
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3
        leading-relaxed
        text-zinc-400
        "
      >
        {description}
      </p>
    </article>
  );
}
