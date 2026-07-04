import StatCard from "@/components/StatCard";
import { dashboardStats } from "@/lib/dashboard-data";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <p className="text-sm text-zinc-400">Vandaag</p>

        <h2 className="mt-2 text-4xl font-bold">
          Command Center
        </h2>

        <p className="mt-3 text-zinc-400">
          Hier komt straks automatisch je omzet, winst, ROAS, spend en orders
          binnen.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">
          <h3 className="font-bold">🚀 Scale</h3>
          <p className="mt-2 text-sm text-zinc-300">
            Hier komen straks je winnaars.
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">
          <h3 className="font-bold">⚠️ Watch</h3>
          <p className="mt-2 text-sm text-zinc-300">
            Campagnes met twijfelachtige data.
          </p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">
          <h3 className="font-bold">❌ Kill</h3>
          <p className="mt-2 text-sm text-zinc-300">
            Campagnes die geld lekken.
          </p>
        </div>
      </div>
    </>
  );
}