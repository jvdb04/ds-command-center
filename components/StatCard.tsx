type StatCardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <p className="text-sm text-zinc-400">{title}</p>

      <p className="mt-3 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        {subtitle}
      </p>
    </div>
  );
}