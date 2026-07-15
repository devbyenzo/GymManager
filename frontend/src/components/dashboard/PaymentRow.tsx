interface PaymentRowProps {
  name: string;
  plan: string;
  status: string;
}

export default function PaymentRow({ name, plan, status }: PaymentRowProps) {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      border-b
      border-white/10
      py-4
      last:border-none
      "
    >
      <span className="text-white">{name}</span>

      <span className="text-zinc-400">{plan}</span>

      <span
        className={`
          text-sm
          font-semibold
          ${status === 'Pago' ? 'text-green-400' : 'text-yellow-400'}
        `}
      >
        {status}
      </span>
    </div>
  );
}
