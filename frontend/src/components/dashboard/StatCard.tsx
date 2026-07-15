interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
}

export default function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      backdrop-blur-sm
      transition
      hover:border-yellow-400/30
      "
    >
      <p className="text-sm text-zinc-400">{label}</p>

      <strong
        className="
        mt-2
        block
        text-3xl
        font-bold
        text-white
        "
      >
        {value}
      </strong>

      {trend && (
        <span
          className="
          mt-2
          block
          text-sm
          text-yellow-400
          "
        >
          {trend}
        </span>
      )}
    </div>
  );
}
